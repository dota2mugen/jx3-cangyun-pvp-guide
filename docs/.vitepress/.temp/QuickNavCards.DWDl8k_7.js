import { mergeProps, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "QuickNavCards",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quick-nav-grid" }, _attrs))} data-v-c97fa222><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.disabled ? "div" : "a"), {
          key: item.title,
          href: item.disabled ? void 0 : item.href,
          class: ["quick-nav-card", [item.disabled ? "is-disabled" : "", item.tone ? `tone-${item.tone}` : ""]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="quick-nav-card__sect-ornament" aria-hidden="true" data-v-c97fa222${_scopeId}></span><div class="quick-nav-card__top" data-v-c97fa222${_scopeId}>`);
              if (item.icon) {
                _push2(`<span class="quick-nav-card__icon" data-v-c97fa222${_scopeId}>${ssrInterpolate(item.icon)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.badge) {
                _push2(`<span class="quick-nav-card__badge" data-v-c97fa222${_scopeId}>${ssrInterpolate(item.badge)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><h3 data-v-c97fa222${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="quick-nav-card__desc" data-v-c97fa222${_scopeId}>${ssrInterpolate(item.description)}</p>`);
              if (item.meta) {
                _push2(`<p class="quick-nav-card__meta" data-v-c97fa222${_scopeId}>${item.meta ?? ""}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("span", {
                  class: "quick-nav-card__sect-ornament",
                  "aria-hidden": "true"
                }),
                createVNode("div", { class: "quick-nav-card__top" }, [
                  item.icon ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "quick-nav-card__icon"
                  }, toDisplayString(item.icon), 1)) : createCommentVNode("", true),
                  item.badge ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "quick-nav-card__badge"
                  }, toDisplayString(item.badge), 1)) : createCommentVNode("", true)
                ]),
                createVNode("h3", null, toDisplayString(item.title), 1),
                createVNode("p", { class: "quick-nav-card__desc" }, toDisplayString(item.description), 1),
                item.meta ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "quick-nav-card__meta",
                  innerHTML: item.meta
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/QuickNavCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QuickNavCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c97fa222"]]);
export {
  QuickNavCards as Q
};
