import { useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { b as buildsData } from "./builds.B0J53f9q.js";
import { P as PageHero, a as PageIntro } from "./PageIntro.L3kNnde5.js";
import { Q as QuickNavCards } from "./QuickNavCards.DWDl8k_7.js";
import { N as NoticePanel } from "./NoticePanel.BXSp8naX.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cangyun/builds.md","filePath":"cangyun/builds.md"}');
const __default__ = { name: "cangyun/builds.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const buildCards = Object.values(buildsData.builds).map((build) => ({
      title: build.name,
      description: build.description,
      href: `/cangyun/build-detail?id=${build.id}`,
      icon: build.heroIcon,
      badge: build.tag,
      meta: build.recommended ? "适合第一次接触无界端苍云的玩家，优先从这一套开始。" : "更吃熟练度与细节处理，适合已经熟悉基础控链后再切换。",
      tone: build.recommended ? "recommend" : ""
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: "苍云流派",
        title: "流派选择",
        subtitle: "从容错率、爆发窗口和控制侧重点选择你的配置",
        summary: "无界端苍云的流派差异，本质上是你要把技能槽留给盾墙、盾壁、闪刀还是斩刀。不同选择会直接影响解控数量、攒血怒节奏和击杀方式。",
        meta: "新手推荐 · 进阶爆发 · 控制压制",
        badge: "入门路线",
        note: "建议先从盾壁生存流入手，等你熟悉盾立续免控和战狂窗口后，再尝试爆发流与控制流。"
      }, null, _parent));
      _push(ssrRenderComponent(PageIntro, {
        eyebrow: "选流派的方法",
        title: "先看容错，再看输出上限",
        summary: "如果你还不稳定，优先选双解控或更高容错的配置；如果已经能顺畅续免控、找击杀点，再考虑把技能槽换成更高爆发或更强控制。",
        chips: ["盾壁生存流", "闪刀爆发流", "斩刀控制流"]
      }, null, _parent));
      _push(`<h2 id="流派卡片" tabindex="-1">流派卡片 <a class="header-anchor" href="#流派卡片" aria-label="Permalink to &quot;流派卡片&quot;">​</a></h2>`);
      _push(ssrRenderComponent(QuickNavCards, { items: unref(buildCards) }, null, _parent));
      _push(ssrRenderComponent(NoticePanel, {
        title: "如何进入详情页",
        tone: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>每张卡片都会跳到当前路由下的详情页，并通过查询参数加载对应流派。无效参数会自动回退到默认的新手推荐流派。</p>`);
          } else {
            return [
              createVNode("p", null, "每张卡片都会跳到当前路由下的详情页，并通过查询参数加载对应流派。无效参数会自动回退到默认的新手推荐流派。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cangyun/builds.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
