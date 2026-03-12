import { mergeProps, useSSRContext, createVNode, resolveDynamicComponent, withCtx, toDisplayString, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import { N as NoticePanel } from "./NoticePanel.BXSp8naX.js";
const siteSections = [
  {
    id: "cangyun",
    name: "苍云",
    subtitle: "玄甲苍云军",
    status: "available",
    path: "/cangyun/",
    summary: "近战 · 控制 · 减疗，已完成 Phase 1 现站收口。",
    accent: "shield"
  },
  {
    id: "tiance",
    name: "天策",
    subtitle: "东都天策府",
    status: "planned",
    path: "",
    summary: "第二门派扩展预留，待后续阶段接入完整内容。",
    accent: "horse"
  }
];
const _sfc_main$2 = {
  __name: "SiteHero",
  __ssrInlineRender: true,
  props: {
    badge: { type: String, default: "" },
    eyebrow: { type: String, default: "" },
    title: { type: String, required: true },
    summary: { type: String, default: "" },
    note: { type: String, default: "" },
    chips: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "site-hero" }, _attrs))} data-v-560d018e><div class="site-hero__panel" data-v-560d018e>`);
      if (__props.badge) {
        _push(`<span class="site-hero__badge" data-v-560d018e>${ssrInterpolate(__props.badge)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.eyebrow) {
        _push(`<p class="site-hero__eyebrow" data-v-560d018e>${ssrInterpolate(__props.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="site-hero__title" data-v-560d018e>${ssrInterpolate(__props.title)}</h1>`);
      if (__props.summary) {
        _push(`<p class="site-hero__summary" data-v-560d018e>${ssrInterpolate(__props.summary)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.note) {
        _push(`<p class="site-hero__note" data-v-560d018e>${ssrInterpolate(__props.note)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_a = __props.chips) == null ? void 0 : _a.length) {
        _push(`<div class="guide-pills" data-v-560d018e><!--[-->`);
        ssrRenderList(__props.chips, (chip) => {
          _push(`<span class="guide-pill" data-v-560d018e>${ssrInterpolate(chip)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/SiteHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SiteHero = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-560d018e"]]);
const _sfc_main$1 = {
  __name: "SectCardGrid",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, default: () => [] }
  },
  setup(__props) {
    const statusMap = {
      available: "已开放",
      planned: "规划中"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sect-card-grid" }, _attrs))} data-v-7088396a><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.status === "available" ? "a" : "div"), {
          key: item.id,
          href: item.status === "available" ? item.path : void 0,
          class: ["sect-card", [`accent-${item.accent}`, `status-${item.status}`]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="sect-card__header" data-v-7088396a${_scopeId}><p class="sect-card__title" data-v-7088396a${_scopeId}>${ssrInterpolate(item.name)}</p><span class="sect-card__status" data-v-7088396a${_scopeId}>${ssrInterpolate(statusMap[item.status] ?? item.status)}</span></div><p class="sect-card__subtitle" data-v-7088396a${_scopeId}>${ssrInterpolate(item.subtitle)}</p><p class="sect-card__summary" data-v-7088396a${_scopeId}>${ssrInterpolate(item.summary)}</p>`);
            } else {
              return [
                createVNode("div", { class: "sect-card__header" }, [
                  createVNode("p", { class: "sect-card__title" }, toDisplayString(item.name), 1),
                  createVNode("span", { class: "sect-card__status" }, toDisplayString(statusMap[item.status] ?? item.status), 1)
                ]),
                createVNode("p", { class: "sect-card__subtitle" }, toDisplayString(item.subtitle), 1),
                createVNode("p", { class: "sect-card__summary" }, toDisplayString(item.summary), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/SectCardGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectCardGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7088396a"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SiteHero, {
        badge: "Phase 1 · 苍云现站收口",
        eyebrow: "JX3 · 无界端 PVP",
        title: "剑网三无界端PVP攻略",
        summary: "保留多门派扩展骨架，优先把苍云专区打磨成可持续扩展的攻略基座。当前站点聚焦新手入门、33 实战和无界端特有的 8 选 4 + 四层奇穴体系。",
        note: "当前已开放苍云专区。通用机制页与天策专区保留在后续阶段接入，不再通过死链占位。",
        chips: ["深色金属主题", "苍云军武气质", "多门派扩展预留"]
      }, null, _parent));
      _push(`<h2 id="门派入口" tabindex="-1">门派入口 <a class="header-anchor" href="#门派入口" aria-label="Permalink to &quot;门派入口&quot;">​</a></h2>`);
      _push(ssrRenderComponent(SectCardGrid, { items: unref(siteSections) }, null, _parent));
      _push(ssrRenderComponent(NoticePanel, {
        title: "当前阶段说明",
        tone: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Phase 1 聚焦苍云现站收口：统一首页、门派首页、子页骨架和响应式表格。未落地页面不再挂到主导航，后续阶段再补通用机制与天策专区。</p>`);
          } else {
            return [
              createVNode("p", null, "Phase 1 聚焦苍云现站收口：统一首页、门派首页、子页骨架和响应式表格。未落地页面不再挂到主导航，后续阶段再补通用机制与天策专区。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
