class ComfyUIStableStudio:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
            },
        }

    RETURN_TYPES = ()

    FUNCTION = "run"

    OUTPUT_NODE = True

    CATEGORY = "StableStudio"

    def run(self,  **kwargs):
        return None,

NODE_CLASS_MAPPINGS = {
    "ComfyUIStableStudio": ComfyUIStableStudio
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "ComfyUIStableStudio": "StableStudio"
}