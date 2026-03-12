import { useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { P as PageHero, a as PageIntro } from "./PageIntro.L3kNnde5.js";
import { Q as QuickNavCards } from "./QuickNavCards.DWDl8k_7.js";
import { P as ProsConsCard } from "./ProsConsCard.gNuT8WJX.js";
import { N as NoticePanel } from "./NoticePanel.BXSp8naX.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const name = "苍云";
const tagline = "玄甲苍云军";
const position = "近战 · 控制 · 减疗";
const hero = {
  badge: "PVP 新手攻略",
  note: "推荐先读门派落地页，再依次进入技能、流派、战术、配装四个栏目。"
};
const intro = {
  description: "苍云是刀盾切换的近战门派，在PVP中主要提供控制和减疗，通过盾系与刀系技能的配合打出控制链和减疗压制。",
  pros: [
    "控制多、封轻功、减疗频率高",
    "位移技能多、免控能力强",
    "能持续压制敌方治疗和输出"
  ],
  cons: [
    "减伤少、免控需靠续技能维持",
    "非常害怕缴械和封外",
    "伤害一般，依赖控制链配合队友"
  ]
};
const coreMechanisms = [
  {
    name: "战狂",
    desc: "三层血怒使用刀系技能造成爆发伤害+减疗30%，持续3秒"
  },
  {
    name: "盾立",
    desc: "每释放一个盾系技能免控1秒，实现几乎全程免控"
  }
];
const stats = {
  priority: [
    {
      name: "攻击力",
      desc: "提升所有技能伤害"
    },
    {
      name: "会心",
      desc: "提高暴击率"
    },
    {
      name: "会效",
      desc: "提高暴击伤害"
    },
    {
      name: "破防",
      desc: "穿透敌方防御"
    },
    {
      name: "御劲",
      desc: "减少被暴击几率"
    }
  ]
};
const quickLinks = [
  {
    title: "技能详解",
    description: "先掌握血怒、战狂、盾立和关键技能 CD，再谈连招与爆发。",
    href: "/cangyun/skills",
    icon: "⚔",
    badge: "基础必读"
  },
  {
    title: "流派选择",
    description: "对比盾壁生存流、闪刀爆发流、斩刀控制流的定位与容错率。",
    href: "/cangyun/builds",
    icon: "🛡",
    badge: "入门路线"
  },
  {
    title: "PVP 战术",
    description: "围绕 33 抢先手、控链、减疗压制和防守细节展开实战思路。",
    href: "/cangyun/tactics",
    icon: "🎯",
    badge: "实战核心"
  },
  {
    title: "配装指南",
    description: "整理属性优先级、配比建议、套装效果和毕业配装方向。",
    href: "/cangyun/equipment",
    icon: "🧱",
    badge: "收尾补强"
  }
];
const indexData = {
  name,
  tagline,
  position,
  hero,
  intro,
  coreMechanisms,
  stats,
  quickLinks
};
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":false,"aside":false},"headers":[],"relativePath":"cangyun/index.md","filePath":"cangyun/index.md"}');
const __default__ = { name: "cangyun/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: "苍云专区",
        title: unref(indexData).name,
        subtitle: unref(indexData).tagline,
        summary: unref(indexData).intro.description,
        meta: unref(indexData).position,
        badge: unref(indexData).hero.badge,
        note: unref(indexData).hero.note
      }, null, _parent));
      _push(ssrRenderComponent(PageIntro, {
        eyebrow: "阅读顺序",
        title: "先认门派节奏，再进具体栏目",
        summary: "这页只承担苍云门派入口和阅读顺序说明，不再展开详细机制表和属性细节。进入技能、流派、战术、配装四个栏目后，再按专题深入。",
        chips: ["刀盾切换", "战狂爆发", "盾立续免控"]
      }, null, _parent));
      _push(`<h2 id="推荐阅读顺序" tabindex="-1">推荐阅读顺序 <a class="header-anchor" href="#推荐阅读顺序" aria-label="Permalink to &quot;推荐阅读顺序&quot;">​</a></h2>`);
      _push(ssrRenderComponent(QuickNavCards, {
        items: unref(indexData).quickLinks
      }, null, _parent));
      _push(`<h2 id="门派定位" tabindex="-1">门派定位 <a class="header-anchor" href="#门派定位" aria-label="Permalink to &quot;门派定位&quot;">​</a></h2>`);
      _push(ssrRenderComponent(ProsConsCard, {
        pros: unref(indexData).intro.pros,
        cons: unref(indexData).intro.cons
      }, null, _parent));
      _push(`<h2 id="上手关键词" tabindex="-1">上手关键词 <a class="header-anchor" href="#上手关键词" aria-label="Permalink to &quot;上手关键词&quot;">​</a></h2><div class="guide-card-grid"><!--[-->`);
      ssrRenderList(unref(indexData).coreMechanisms, (mech) => {
        _push(`<article class="guide-block"><span class="guide-kicker">核心机制</span><h3>${ssrInterpolate(mech.name)}</h3><p>${ssrInterpolate(mech.desc)}</p></article>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(NoticePanel, {
        title: "无界端阅读提醒",
        tone: "warn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>本攻略面向无界端，不沿用旗舰端的技能系统记忆方式。请始终按 8 选 4 主动技能、四层奇穴和第四层绝招的体系理解苍云配置。</p>`);
          } else {
            return [
              createVNode("p", null, "本攻略面向无界端，不沿用旗舰端的技能系统记忆方式。请始终按 8 选 4 主动技能、四层奇穴和第四层绝招的体系理解苍云配置。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cangyun/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
