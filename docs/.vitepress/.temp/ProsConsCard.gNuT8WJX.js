import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "ProsConsCard",
  __ssrInlineRender: true,
  props: {
    pros: { type: Array, default: () => [] },
    cons: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pros-cons-grid" }, _attrs))} data-v-3b06fafb>`);
      if (__props.pros && __props.pros.length) {
        _push(`<div class="pros-card" data-v-3b06fafb><h4 data-v-3b06fafb>优势</h4><ul data-v-3b06fafb><!--[-->`);
        ssrRenderList(__props.pros, (item, i) => {
          _push(`<li data-v-3b06fafb>${item ?? ""}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.cons && __props.cons.length) {
        _push(`<div class="cons-card" data-v-3b06fafb><h4 data-v-3b06fafb>劣势</h4><ul data-v-3b06fafb><!--[-->`);
        ssrRenderList(__props.cons, (item, i) => {
          _push(`<li data-v-3b06fafb>${item ?? ""}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ProsConsCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProsConsCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b06fafb"]]);
export {
  ProsConsCard as P
};
