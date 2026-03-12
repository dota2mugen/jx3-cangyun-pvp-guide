import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "ResponsiveTable",
  __ssrInlineRender: true,
  props: {
    caption: { type: String, default: "" },
    columns: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "responsive-table" }, _attrs))} data-v-d197df7e><table data-v-d197df7e>`);
      if (__props.caption) {
        _push(`<caption data-v-d197df7e>${ssrInterpolate(__props.caption)}</caption>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<thead data-v-d197df7e><tr data-v-d197df7e><!--[-->`);
      ssrRenderList(__props.columns, (column) => {
        _push(`<th style="${ssrRenderStyle({ textAlign: column.align ?? "left" })}" data-v-d197df7e>${ssrInterpolate(column.label)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody data-v-d197df7e><!--[-->`);
      ssrRenderList(__props.rows, (row, rowIndex) => {
        _push(`<tr data-v-d197df7e><!--[-->`);
        ssrRenderList(__props.columns, (column) => {
          _push(`<td${ssrRenderAttr("data-label", column.label)} style="${ssrRenderStyle({ textAlign: column.align ?? "left" })}" data-v-d197df7e>`);
          if (!column.html) {
            _push(`<span data-v-d197df7e>${ssrInterpolate(row[column.key])}</span>`);
          } else {
            _push(`<span data-v-d197df7e>${row[column.key] ?? ""}</span>`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ResponsiveTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResponsiveTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d197df7e"]]);
export {
  ResponsiveTable as R
};
