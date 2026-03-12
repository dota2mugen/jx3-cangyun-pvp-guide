import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "NoticePanel",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true },
    tone: { type: String, default: "info" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["notice-panel", `tone-${__props.tone}`]
      }, _attrs))} data-v-18577a94><div class="notice-panel__header" data-v-18577a94><span class="notice-panel__marker" data-v-18577a94></span><h3 data-v-18577a94>${ssrInterpolate(__props.title)}</h3></div><div class="notice-panel__body" data-v-18577a94>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/NoticePanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NoticePanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18577a94"]]);
export {
  NoticePanel as N
};
