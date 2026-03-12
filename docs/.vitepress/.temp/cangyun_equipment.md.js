import { ref, onMounted, onBeforeUnmount, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as PageHero, a as PageIntro } from "./PageIntro.L3kNnde5.js";
import "./ResponsiveTable.VGUd9ruq.js";
import { N as NoticePanel } from "./NoticePanel.BXSp8naX.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const thinking = [
  "苍云的主要伤害来源是战狂，而战狂的伤害高度依赖会心触发。",
  "但在 PVP 环境里，对手的御劲会明显压低暴击收益，所以配装不能只堆会心。",
  "更稳妥的思路是在会心和破防之间做权衡：会心负责上限，破防负责下限。"
];
const referenceBuilds = [
  {
    title: "方案一：30破45会",
    shortName: "30破45会",
    image: "/equipment/cangyun-30po45hui.png",
    imageAlt: "30破45会配装方案",
    gems: "会心 + 会效 + 攻击",
    summary: "会心率达到 45%，配合会效五彩石最大化暴击伤害。适合追求瞬间爆发的打法，对低御劲目标压制更强。",
    detail: "面对高御劲目标时，纯会心流的收益会被明显稀释，因此更适合打脆皮或御劲较低的目标。",
    tone: "aggressive"
  },
  {
    title: "方案二：34会40破",
    shortName: "34会40破",
    image: "/equipment/cangyun-34hui40po.png",
    imageAlt: "34会40破配装方案",
    gems: "会心 + 破防 + 攻击",
    summary: "破防达到 40%，能更稳定地穿透高御劲和高减伤目标。虽然会心略低，但整体伤害曲线更平稳。",
    detail: "更适合对面奶妈或防御属性偏高的阵容，避免爆发完全吃脸。",
    tone: "stable"
  }
];
const advice = [
  "30破45会：偏向进攻，追求瞬间爆发，适合对手御劲较低的场合。",
  "34会40破：偏向稳定，穿透有保障，适合对手防御较高的场合。"
];
const statsPriority = [
  {
    rank: 1,
    name: "攻击力",
    desc: "提升所有技能伤害",
    priority: "最高优先级",
    icon: "⚔"
  },
  {
    rank: 2,
    name: "会心",
    desc: "提高暴击率",
    priority: "高优先级",
    icon: "🎯"
  },
  {
    rank: 3,
    name: "会效",
    desc: "提高暴击伤害",
    priority: "高优先级",
    icon: "🔟"
  },
  {
    rank: 4,
    name: "破防",
    desc: "穿透敌方防御",
    priority: "中等优先级",
    icon: "🛡"
  },
  {
    rank: 5,
    name: "御劲",
    desc: "减少被暴击几率",
    priority: "生存属性",
    icon: "🪖"
  },
  {
    rank: 6,
    name: "体质",
    desc: "增加生命值上限",
    priority: "生存属性",
    icon: "💪"
  }
];
const statsRatio = [
  {
    stat: "攻击力",
    beginner: "优先堆叠",
    advanced: "持续提升",
    endgame: "最大化"
  },
  {
    stat: "会心",
    beginner: "30%左右",
    advanced: "35%-40%",
    endgame: "40%-45%"
  },
  {
    stat: "会效",
    beginner: "150%+",
    advanced: "180%+",
    endgame: "200%+"
  },
  {
    stat: "破防",
    beginner: "适度",
    advanced: "200+",
    endgame: "300+"
  },
  {
    stat: "御劲",
    beginner: "100+",
    advanced: "150+",
    endgame: "200+"
  }
];
const setEffects = [
  {
    name: "玄甲套装",
    effects: [
      {
        pieces: 2,
        effect: "攻击力+5%"
      },
      {
        pieces: 4,
        effect: "盾墙减伤效果+5%"
      },
      {
        pieces: 6,
        effect: "权门伤害+10%，怒气获取+10%"
      }
    ],
    recommended: true,
    desc: "偏向输出，适合进攻型打法。"
  },
  {
    name: "苍云战甲",
    effects: [
      {
        pieces: 2,
        effect: "生命值+10%"
      },
      {
        pieces: 4,
        effect: "御劲+50"
      },
      {
        pieces: 6,
        effect: "受击时20%几率获得护盾"
      }
    ],
    recommended: false,
    desc: "偏向生存，适合防守型打法。"
  }
];
const buildSets = [
  {
    name: "爆发输出型",
    items: [
      {
        slot: "武器",
        name: "玄铁重剑·枭",
        stats: "攻击力 + 会心%",
        gems: "红石攻击 + 黄石会心"
      },
      {
        slot: "头盔",
        name: "玄甲战盔",
        stats: "会心% + 会效%",
        gems: "黄石会心 + 黄石会效"
      },
      {
        slot: "护甲",
        name: "玄甲战铠",
        stats: "攻击力 + 体质",
        gems: "蓝石体质 + 红石攻击"
      },
      {
        slot: "护手",
        name: "玄甲护手",
        stats: "破防 + 会心%",
        gems: "红石破防 + 黄石会心"
      },
      {
        slot: "腰带",
        name: "玄甲腰带",
        stats: "御劲 + 生命%",
        gems: "蓝石御劲 + 蓝石体质"
      },
      {
        slot: "护腿",
        name: "玄甲战裤",
        stats: "会效% + 攻击力",
        gems: "黄石会效 + 红石攻击"
      },
      {
        slot: "战靴",
        name: "玄甲战靴",
        stats: "身法 + 御劲",
        gems: "紫石身法 + 蓝石御劲"
      }
    ]
  },
  {
    name: "生存坦克型",
    items: [
      {
        slot: "武器",
        name: "苍云重剑",
        stats: "攻击力 + 御劲",
        gems: "红石攻击 + 蓝石御劲"
      },
      {
        slot: "头盔",
        name: "苍云战盔",
        stats: "生命% + 御劲",
        gems: "蓝石体质 + 蓝石御劲"
      },
      {
        slot: "护甲",
        name: "苍云战铠",
        stats: "生命% + 体质",
        gems: "蓝石体质 + 蓝石体质"
      },
      {
        slot: "护手",
        name: "苍云护手",
        stats: "御劲 + 生命%",
        gems: "蓝石御劲 + 蓝石体质"
      },
      {
        slot: "腰带",
        name: "苍云腰带",
        stats: "御劲 + 体质",
        gems: "蓝石御劲 + 蓝石体质"
      },
      {
        slot: "护腿",
        name: "苍云战裤",
        stats: "生命% + 御劲",
        gems: "蓝石体质 + 蓝石御劲"
      },
      {
        slot: "战靴",
        name: "苍云战靴",
        stats: "身法 + 御劲",
        gems: "紫石身法 + 蓝石御劲"
      }
    ]
  }
];
const dailyTasks = [
  "完成日常任务获取基础资源",
  "参与竞技场获取竞技积分",
  "挑战可通关的副本获取装备",
  "查看交易行是否有性价比高的装备",
  "参与限时活动获取额外奖励"
];
const equipmentData = {
  thinking,
  referenceBuilds,
  advice,
  statsPriority,
  statsRatio,
  setEffects,
  buildSets,
  dailyTasks
};
const _sfc_main$1 = {
  __name: "EquipmentReferenceCards",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, default: () => [] }
  },
  setup(__props) {
    const previewImage = ref(null);
    function closePreview() {
      previewImage.value = null;
    }
    function handleKeydown(event) {
      if (event.key === "Escape" && previewImage.value) {
        closePreview();
      }
    }
    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeydown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="equipment-reference-grid" data-v-953cbd19><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<article class="${ssrRenderClass([item.tone ? `tone-${item.tone}` : "", "equipment-reference-card"])}" data-v-953cbd19><button type="button" class="equipment-reference-card__media"${ssrRenderAttr("aria-label", `查看${item.shortName || item.title}原图`)} data-v-953cbd19><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.imageAlt || item.title)} loading="lazy" data-v-953cbd19><span class="equipment-reference-card__zoom" data-v-953cbd19>点击查看原图</span></button><div class="equipment-reference-card__body" data-v-953cbd19><h3 data-v-953cbd19>${ssrInterpolate(item.title)}</h3><p class="equipment-reference-card__gems" data-v-953cbd19><span data-v-953cbd19>五彩石</span><strong data-v-953cbd19>${ssrInterpolate(item.gems)}</strong></p><p data-v-953cbd19>${ssrInterpolate(item.summary)}</p><p class="equipment-reference-card__detail" data-v-953cbd19>${ssrInterpolate(item.detail)}</p></div></article>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (previewImage.value) {
          _push2(`<div class="equipment-reference-preview" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", `${previewImage.value.title}原图预览`)} data-v-953cbd19><button type="button" class="equipment-reference-preview__close" aria-label="关闭原图预览" data-v-953cbd19> × </button><figure class="equipment-reference-preview__figure" data-v-953cbd19><img${ssrRenderAttr("src", previewImage.value.src)}${ssrRenderAttr("alt", previewImage.value.alt)} data-v-953cbd19><figcaption data-v-953cbd19>${ssrInterpolate(previewImage.value.title)}</figcaption></figure></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/EquipmentReferenceCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EquipmentReferenceCards = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-953cbd19"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cangyun/equipment.md","filePath":"cangyun/equipment.md"}');
const __default__ = { name: "cangyun/equipment.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    equipmentData.statsPriority.map((stat) => ({
      rank: stat.rank,
      name: `${stat.icon} ${stat.name}`,
      priority: stat.priority,
      desc: stat.desc
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6973814c>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: "苍云配装",
        title: "配装指南",
        subtitle: "属性优先级、旧版参考方案、套装效果和毕业方向",
        summary: "无界端苍云配装先看你的实战目标：想在控链里打出战狂斩杀，就要兼顾会心爆发和破防穿透；想先把循环打稳，就优先保证自己能站得住、技能能转得开。",
        meta: "配装思路 · 参考方案 · 套装效果 · 毕业方向",
        badge: "收尾补强",
        note: "如果你还在熟悉控链与解控，优先保证生存属性和技能循环，不必过早追求极限毕业词条。"
      }, null, _parent));
      _push(ssrRenderComponent(PageIntro, {
        eyebrow: "配装思路",
        title: "会心负责上限，破防负责下限",
        summary: "会心决定你抓住窗口时能不能把战狂伤害抬到上限，破防决定你面对高御劲、高减伤目标时会不会伤害发虚。先按常见对手和自己的手感选方向，再围绕那套思路微调。",
        chips: ["30破45会", "34会40破", "会心/破防取舍"]
      }, null, _parent));
      _push(`<h2 id="配装参考" tabindex="-1" data-v-6973814c>配装参考 <a class="header-anchor" href="#配装参考" aria-label="Permalink to &quot;配装参考&quot;" data-v-6973814c>​</a></h2>`);
      _push(ssrRenderComponent(EquipmentReferenceCards, {
        items: unref(equipmentData).referenceBuilds
      }, null, _parent));
      _push(`<h2 id="选择建议" tabindex="-1" data-v-6973814c>选择建议 <a class="header-anchor" href="#选择建议" aria-label="Permalink to &quot;选择建议&quot;" data-v-6973814c>​</a></h2>`);
      _push(ssrRenderComponent(NoticePanel, {
        title: "怎么选这两套方案",
        tone: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul data-v-6973814c${_scopeId}><!--[-->`);
            ssrRenderList(unref(equipmentData).advice, (item, index) => {
              _push2(`<li data-v-6973814c${_scopeId}>${ssrInterpolate(item)}</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(equipmentData).advice, (item, index) => {
                  return openBlock(), createBlock("li", { key: index }, toDisplayString(item), 1);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cangyun/equipment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const equipment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6973814c"]]);
export {
  __pageData,
  equipment as default
};
