import { app as r } from "../../../scripts/app.js";
import { defineComponent as m, ref as i, onMounted as f, onBeforeUnmount as c, createElementBlock as p, openBlock as d, normalizeClass as v, createElementVNode as u } from "vue";
const b = /* @__PURE__ */ m({
  __name: "App",
  setup(a) {
    const e = i();
    i();
    const t = i(), l = i(!1), o = i(null);
    return f(async () => {
      e.value && (o.value = new MutationObserver((s) => {
        s.forEach((n) => {
          n.type === "attributes" && n.attributeName === "maximized" && (l.value = n.target.getAttribute("maximized") === "true");
        });
      }), o.value.observe(e.value, {
        attributes: !0,
        attributeFilter: ["maximized"]
      }));
    }), c(() => {
      o.value && (o.value.disconnect(), o.value = null);
    }), (s, n) => (d(), p("div", {
      ref_key: "viewerContentRef",
      ref: e,
      class: v(["flex w-full", [l.value ? "h-full" : "h-[70vh]"]])
    }, [
      u("div", {
        ref_key: "mainContentRef",
        ref: t,
        class: "flex-1 relative"
      }, n[0] || (n[0] = [
        u("iframe", {
          src: "/stablestudio",
          class: "demo-iframe h-full w-full"
        }, null, -1)
      ]), 512)
    ], 2));
  }
}), _ = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [l, o] of e)
    t[l] = o;
  return t;
}, g = /* @__PURE__ */ _(b, [["__scopeId", "data-v-36025d5e"]]), { ComfyButton: x } = window.comfyAPI.button;
r.registerExtension({
  name: "ComfyUI.StableStudio.TopMenu",
  setup() {
    var e;
    function a() {
      var t;
      (t = r.extensionManager) == null || t.dialog.showExtensionDialog({
        key: "global-stablestudio",
        title: "ComfyUI StableStudio",
        component: g,
        dialogComponentProps: {
          style: "width: 80vw; height: 80vh;",
          maximizable: !0
        }
      });
    }
    (e = r.menu) == null || e.settingsGroup.append(
      new x({
        icon: "image",
        tooltip: "comfyui-stablestudio",
        content: "StableStudio",
        action: a
      })
    );
  }
});
