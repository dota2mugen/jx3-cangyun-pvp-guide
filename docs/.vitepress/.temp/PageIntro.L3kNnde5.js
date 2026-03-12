import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: { type: String, default: "" },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    summary: { type: String, default: "" },
    meta: { type: String, default: "" },
    badge: { type: String, default: "" },
    note: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-hero" }, _attrs))} data-v-b5743d37><div class="page-hero__sect-ornament" aria-hidden="true" data-v-b5743d37></div><div class="page-hero__sect-shield" aria-hidden="true" data-v-b5743d37></div><div class="page-hero__sect-blade" aria-hidden="true" data-v-b5743d37></div><div class="page-hero__content" data-v-b5743d37>`);
      if (__props.eyebrow) {
        _push(`<p class="page-hero__eyebrow" data-v-b5743d37>${ssrInterpolate(__props.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="page-hero__header" data-v-b5743d37><h1 data-v-b5743d37>${ssrInterpolate(__props.title)}</h1>`);
      if (__props.badge) {
        _push(`<span class="page-hero__badge" data-v-b5743d37>${ssrInterpolate(__props.badge)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.subtitle) {
        _push(`<p class="page-hero__subtitle" data-v-b5743d37>${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.summary) {
        _push(`<p class="page-hero__summary" data-v-b5743d37>${ssrInterpolate(__props.summary)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.meta || __props.note) {
        _push(`<div class="page-hero__meta" data-v-b5743d37>`);
        if (__props.meta) {
          _push(`<span class="page-hero__meta-chip" data-v-b5743d37>${ssrInterpolate(__props.meta)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.note) {
          _push(`<span class="page-hero__note" data-v-b5743d37>${ssrInterpolate(__props.note)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/PageHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PageHero = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b5743d37"]]);
const _sfc_main = {
  __name: "PageIntro",
  __ssrInlineRender: true,
  props: {
    eyebrow: { type: String, default: "" },
    title: { type: String, default: "" },
    summary: { type: String, default: "" },
    chips: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro guide-block" }, _attrs))} data-v-c113e182>`);
      if (__props.eyebrow) {
        _push(`<span class="guide-kicker" data-v-c113e182>${ssrInterpolate(__props.eyebrow)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.title) {
        _push(`<h2 class="page-intro__title" data-v-c113e182>${ssrInterpolate(__props.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.summary) {
        _push(`<p class="page-intro__summary" data-v-c113e182>${ssrInterpolate(__props.summary)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_a = __props.chips) == null ? void 0 : _a.length) {
        _push(`<div class="guide-pills" data-v-c113e182><!--[-->`);
        ssrRenderList(__props.chips, (chip) => {
          _push(`<span class="guide-pill" data-v-c113e182>${ssrInterpolate(chip)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/PageIntro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageIntro = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c113e182"]]);
export {
  PageHero as P,
  PageIntro as a
};
