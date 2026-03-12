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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pros-cons-grid" }, _attrs))} data-v-e4e5b03c>`);
      if (__props.pros && __props.pros.length) {
        _push(`<div class="pros-card" data-v-e4e5b03c><h4 data-v-e4e5b03c>优势</h4><ul data-v-e4e5b03c><!--[-->`);
        ssrRenderList(__props.pros, (item, i) => {
          _push(`<li data-v-e4e5b03c>${item ?? ""}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.cons && __props.cons.length) {
        _push(`<div class="cons-card" data-v-e4e5b03c><h4 data-v-e4e5b03c>劣势</h4><ul data-v-e4e5b03c><!--[-->`);
        ssrRenderList(__props.cons, (item, i) => {
          _push(`<li data-v-e4e5b03c>${item ?? ""}</li>`);
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
const ProsConsCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4e5b03c"]]);
export {
  ProsConsCard as P
};
