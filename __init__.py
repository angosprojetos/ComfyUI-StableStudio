from .ComfyUIStableStudio import NODE_CLASS_MAPPINGS
import os
import nodes
from aiohttp import web
import importlib
import execution
import logging
from pathlib import Path
import uuid
import json
import datetime

js_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), "js")

nodes.EXTENSION_WEB_DIRS["ComfyUI-StableStudio"] = js_dir

__all__ = ['NODE_CLASS_MAPPINGS']

from server import PromptServer

routes = PromptServer.instance.routes


@routes.get('/stablestudio/api/get-outputs')
async def api_get_outputs(request):
    output_path = os.path.join(os.path.dirname(__file__), '../../output/')

    page = int(request.query.get('page', 1))
    per_page = int(request.query.get('per_page', 20))

    page = max(1, page)
    per_page = max(1, min(per_page, 100))

    files_with_info = []
    for f in os.listdir(output_path):
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            file_path = os.path.join(output_path, f)
            mtime = os.path.getmtime(file_path)
            files_with_info.append({
                'filename': f,
                'modified_time': mtime
            })

    files_with_info.sort(key=lambda x: x['modified_time'], reverse=True)

    total_count = len(files_with_info)
    total_pages = (total_count + per_page - 1) // per_page
    offset = (page - 1) * per_page
    paginated_files = files_with_info[offset:offset + per_page]

    try:
        return web.json_response({
            'image_files': paginated_files,
            'pagination': {
                'total': total_count,
                'total_pages': total_pages,
                'current_page': page,
                'per_page': per_page,
                'has_next': page < total_pages,
                'has_prev': page > 1,
                'next_page': page + 1 if page < total_pages else None,
                'prev_page': page - 1 if page > 1 else None
            }
        })
    except Exception as e:
        print(f"Error processing request: {str(e)}")
        return web.json_response({
            'success': False,
            'message': f'Error: {str(e)}'
        }, status=500)

@routes.post('/stablestudio/api/post_prompt')
async def post_prompt(request):
    json_data = await request.json()
    s = PromptServer.instance
    if "number" in json_data:
        number = float(json_data['number'])
    else:
        number = s.number
        if "front" in json_data:
            if json_data['front']:
                number = -number

        s.number += 1

    if "prompt" in json_data:
        prompt = json_data["prompt"]
        prompt_id = str(json_data.get("prompt_id", uuid.uuid4()))
        valid = await execution.validate_prompt(prompt_id, prompt)
        extra_data = {}
        if "extra_data" in json_data:
            extra_data = json_data["extra_data"]

        if "client_id" in json_data:
            extra_data["client_id"] = json_data["client_id"]
        if valid[0]:
            outputs_to_execute = valid[2]
            s.prompt_queue.put((number, prompt_id, prompt, extra_data, outputs_to_execute))
            response = {"prompt_id": prompt_id, "number": number, "node_errors": valid[3]}
            return web.json_response(response)
        else:
            logging.warning("invalid prompt: {}".format(valid[1]))
            return web.json_response({"error": valid[1], "node_errors": valid[3]}, status=400)
    else:
        error = {
            "type": "no_prompt",
            "message": "No prompt provided",
            "details": "No prompt provided",
            "extra_info": {}
        }
        return web.json_response({"error": error, "node_errors": {}}, status=400)

@routes.get('/stablestudio/api/get_samplers')
async def get_samplers(request):
    from comfy.samplers import KSAMPLER_NAMES

    return web.json_response({
        'samplers': KSAMPLER_NAMES
    })

@routes.get('/stablestudio')
async def serve_stablestudio_index(request):
    stablestudio_path = Path(__file__).parent / 'stablestudio-ui' / 'index.html'
    if stablestudio_path.exists():
        return web.FileResponse(stablestudio_path)
    else:
        return web.Response(text="StableStudio UI not found", status=404)

@routes.get('/stablestudio/{path:.*}')
async def serve_stablestudio_static(request):
    path = request.match_info.get('path', '')
    if '..' in path or path.startswith('/'):
        return web.Response(text="Invalid path", status=400)
    
    stablestudio_path = Path(__file__).parent / 'stablestudio-ui' / path

    if stablestudio_path.is_dir():
        index_path = stablestudio_path / 'index.html'
        if index_path.exists():
            return web.FileResponse(index_path)

    if stablestudio_path.exists() and stablestudio_path.is_file():
        return web.FileResponse(stablestudio_path)
    
    return web.Response(text="File not found", status=404)