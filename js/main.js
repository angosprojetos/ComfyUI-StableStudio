import { app as r } from "../../../scripts/app.js";
import { defineComponent as m, ref as s, watch as c, onMounted as p, onBeforeUnmount as d, createElementBlock as v, openBlock as b, createElementVNode as f } from "vue";
const _ = /* @__PURE__ */ m({
  __name: "App",
  setup(l) {
    const e = s(), o = s(), i = s(!1), a = s(null), u = () => {
      var n;
      if ((n = e.value) != null && n.parentElement) {
        const t = e.value.parentElement;
        i.value ? t.classList.remove("h-full") : t.classList.add("h-full");
      }
    };
    return c(i, () => {
      u();
    }), p(async () => {
      e.value && (u(), a.value = new MutationObserver((n) => {
        n.forEach((t) => {
          t.type === "attributes" && t.attributeName === "maximized" && (i.value = t.target.getAttribute("maximized") === "true");
        });
      }), a.value.observe(e.value, {
        attributes: !0,
        attributeFilter: ["maximized"]
      }));
    }), d(() => {
      var n;
      (n = e.value) != null && n.parentElement && e.value.parentElement.classList.remove("h-full"), a.value && (a.value.disconnect(), a.value = null);
    }), (n, t) => (b(), v("div", {
      ref_key: "viewerContentRef",
      ref: e,
      class: "flex w-full h-full"
    }, [
      f("div", {
        ref_key: "mainContentRef",
        ref: o,
        class: "flex-1 relative"
      }, t[0] || (t[0] = [
        f("iframe", {
          src: "/stablestudio",
          class: "demo-iframe h-full w-full"
        }, null, -1)
      ]), 512)
    ], 512));
  }
}), g = (l, e) => {
  const o = l.__vccOpts || l;
  for (const [i, a] of e)
    o[i] = a;
  return o;
}, w = /* @__PURE__ */ g(_, [["__scopeId", "data-v-ef73331c"]]), { ComfyButton: x } = window.comfyAPI.button;
r.registerExtension({
  name: "ComfyUI.StableStudio.TopMenu",
  setup() {
    var e;
    function l() {
      var o;
      (o = r.extensionManager) == null || o.dialog.showExtensionDialog({
        key: "global-stablestudio",
        title: "ComfyUI StableStudio",
        component: w,
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
        action: l
      })
    );
  }
});
