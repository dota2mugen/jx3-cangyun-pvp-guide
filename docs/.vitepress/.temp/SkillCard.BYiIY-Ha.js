import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "SkillCard",
  __ssrInlineRender: true,
  props: {
    skill: { type: Object, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["skill-card", `skill-type-${__props.skill.type}`]
      }, _attrs))} data-v-03b22622><div class="skill-header" data-v-03b22622><h3 data-v-03b22622>${ssrInterpolate(__props.skill.name)}</h3><span class="skill-cd" data-v-03b22622>${ssrInterpolate(__props.skill.cd)}</span></div>`);
      if (__props.skill.desc) {
        _push(`<div class="skill-desc" data-v-03b22622>${__props.skill.desc ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.skill.segments && __props.skill.segments.length) {
        _push(`<div class="skill-segments" data-v-03b22622><!--[-->`);
        ssrRenderList(__props.skill.segments, (seg) => {
          _push(`<div class="segment" data-v-03b22622><span class="label" data-v-03b22622>${ssrInterpolate(seg.label)}</span><span class="desc" data-v-03b22622>${seg.desc ?? ""}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.skill.specials && __props.skill.specials.length) {
        _push(`<div class="skill-specials" data-v-03b22622><!--[-->`);
        ssrRenderList(__props.skill.specials, (special, i) => {
          _push(`<p data-v-03b22622>${special ?? ""}</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.skill.special) {
        _push(`<div class="skill-special" data-v-03b22622>${__props.skill.special ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.skill.books && __props.skill.books.length) {
        _push(`<div class="skill-books" data-v-03b22622><h4 data-v-03b22622>秘籍</h4><!--[-->`);
        ssrRenderList(__props.skill.books, (book, i) => {
          _push(`<p data-v-03b22622><span data-v-03b22622>${book.text ?? ""}</span>`);
          if (book.bookNote) {
            _push(`<span class="book-note" data-v-03b22622>（${ssrInterpolate(book.bookNote)}）</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.skill.tips) {
        _push(`<p class="skill-tips" data-v-03b22622>${ssrInterpolate(__props.skill.tips)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/SkillCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SkillCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03b22622"]]);
export {
  SkillCard as S
};
