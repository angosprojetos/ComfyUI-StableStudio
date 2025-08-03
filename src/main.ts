import {app} from "../../../scripts/app.js";
import App from "@/App.vue";

const {ComfyButton} = window.comfyAPI.button


app.registerExtension({
    name: 'ComfyUI.StableStudio.TopMenu',
    setup() {
        function openStableStudio() {
            app.extensionManager?.dialog.showExtensionDialog({
                key: "global-stablestudio",
                title: "ComfyUI StableStudio",
                component: App,
                dialogComponentProps: {
                    style: "width: 80vw; height: 80vh;",
                    maximizable: !0
                }
            });
        }

        app.menu?.settingsGroup.append(
            new ComfyButton({
                icon: 'image',
                tooltip: 'comfyui-stablestudio',
                content: 'StableStudio',
                action: openStableStudio,
            }),
        )
    },
})