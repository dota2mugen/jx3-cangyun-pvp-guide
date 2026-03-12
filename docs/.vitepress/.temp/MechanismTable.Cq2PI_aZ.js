import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "MechanismTable",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "" },
    rows: { type: Array, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mechanism-section" }, _attrs))} data-v-578eaaac>`);
      if (__props.title) {
        _push(`<h3 class="mechanism-title" data-v-578eaaac><span class="mechanism-title__sect-ornament" aria-hidden="true" data-v-578eaaac></span><span data-v-578eaaac>${ssrInterpolate(__props.title)}</span></h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mechanism-detail" data-v-578eaaac><!--[-->`);
      ssrRenderList(__props.rows, (row, i) => {
        _push(`<div class="mechanism-row" data-v-578eaaac><div class="${ssrRenderClass([{ warning: row.isWarning }, "mechanism-label"])}" data-v-578eaaac>${ssrInterpolate(row.label)}</div><div class="${ssrRenderClass([{ highlight: row.isHighlight }, "mechanism-content"])}" data-v-578eaaac>${row.content ?? ""}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/MechanismTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MechanismTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-578eaaac"]]);
export {
  MechanismTable as M
};
