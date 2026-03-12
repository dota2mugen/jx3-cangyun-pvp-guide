import { useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { P as PageHero, a as PageIntro } from "./PageIntro.L3kNnde5.js";
import { N as NoticePanel } from "./NoticePanel.BXSp8naX.js";
import { S as SkillCard } from "./SkillCard.RVJDLOsI.js";
import { M as MechanismTable } from "./MechanismTable.Cq2PI_aZ.js";
import { R as ResponsiveTable } from "./ResponsiveTable.VGUd9ruq.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const mechanisms = [
  {
    name: "血怒",
    rows: [
      {
        label: "获取",
        content: "施展<strong>盾系技能</strong>获得1层血怒（最多3层，持续18秒）"
      },
      {
        label: "效果",
        content: "每层：受到的伤害降低3%，造成的伤害提高3%"
      },
      {
        label: "消耗",
        content: "施展<strong>刀系技能</strong>消耗1层血怒，回复2%气血"
      }
    ]
  },
  {
    name: "战狂（第三层奇穴）",
    rows: [
      {
        label: "触发",
        content: "刀系技能消耗<strong>3层血怒</strong>时触发"
      },
      {
        label: "效果",
        content: "额外造成一次大伤害 + 敌方减疗30%（持续3秒）"
      }
    ]
  },
  {
    name: "盾立（第一层奇穴-镇关）",
    rows: [
      {
        label: "触发",
        content: "施展<strong>盾系技能</strong>获得1秒盾立"
      },
      {
        label: "效果",
        content: "免控1秒 + 抵御1次伤害（PVP核心）"
      }
    ]
  }
];
const controlMechanism = {
  rows: [
    {
      label: "控制等级",
      content: "<strong>击倒</strong>（高级控制）> <strong>眩晕</strong>（低级控制）<br>高级控制可覆盖低级控制，低级控制打在高级控制<strong>过程中</strong>不生效"
    },
    {
      label: "控制减疗",
      content: "定身、眩晕、击倒类控制自带<strong>50%减疗</strong><br>与战狂减疗叠加 = <strong>80%减疗</strong>（控制中吃战狂）"
    },
    {
      label: "递减规则",
      content: "同类控制（除击倒外）10秒内：第1次正常持续时间，第2次持续时间减半，第3次不生效"
    }
  ]
};
const shieldSkills = [
  {
    name: "盾猛",
    type: "shield",
    cd: "CD 18秒",
    segments: [
      {
        label: "1段",
        desc: "20尺突进 + 击倒3秒 + 获得1层血怒 + 减绝招CD 3秒"
      },
      {
        label: "2段",
        desc: "轻功沉默3秒 + 获得1层血怒"
      }
    ],
    books: [
      {
        text: "<strong>核心推荐</strong>：刀系技能每消耗一层血怒，降低本招式3秒调息"
      },
      {
        text: "不再使命中目标倒地，命中时将其击退并眩晕3秒"
      }
    ],
    tips: "盾墙形态下有独立CD的盾猛1段，可额外获得1层血怒"
  },
  {
    name: "盾飞",
    type: "shield",
    cd: "CD 15秒",
    segments: [
      {
        label: "1段",
        desc: "扔出盾牌形成盾阵 + 切换擎刀状态（增伤15%）+ 获得1层血怒"
      },
      {
        label: "2段",
        desc: "收回盾牌 + 退出擎刀状态 + 敌方控制效果（眩晕或击退）"
      }
    ],
    specials: [
      "擎刀状态：禁用盾系技能，普攻变为<strong>隐刀</strong>（10尺位移+20%减伤1秒）",
      "盾阵控制：敌方在盾阵内时，自身距离盾阵10尺内则眩晕敌方1秒，10尺外则击退敌方",
      "<strong>2段无公CD</strong>：盾飞2段收回盾牌后可立即使用其他技能（如盾墙）"
    ],
    tips: "2段无公CD，所以盾飞2段后可立即盾墙，避免擎刀状态下无法使用盾舞和独立盾猛",
    books: [
      {
        text: "<strong>常规推荐</strong>：调息增加5秒，清除刀系招式调息时间"
      },
      {
        text: "内功沉默2秒（看情况可带）"
      }
    ]
  },
  {
    name: "盾墙",
    type: "shield",
    cd: "CD 35秒",
    segments: [
      {
        label: "1段",
        desc: "进入盾墙姿态（持续30秒）+ 获得1层血怒 + 减绝招CD 4秒"
      },
      {
        label: "2段",
        desc: "提前结束盾墙姿态，根据剩余时间返还调息"
      }
    ],
    specials: [
      "禁用刀系技能，移速降低60%，伤害降低50%，免控",
      "普攻替换为<strong>盾舞</strong>（盾系技能，使用获得1层血怒）",
      "可用独立CD的<strong>盾猛1段</strong>（额外减绝招CD 3秒 + 1层血怒）"
    ],
    books: [
      {
        text: "<strong>常规推荐</strong>：盾墙姿态每被攻击3次，获得1秒盾立"
      },
      {
        text: "盾墙姿态期间，自身8尺范围内队友免控+减伤35%（带盾壁时可带）"
      }
    ]
  },
  {
    name: "盾壁",
    type: "shield",
    cd: "CD 30秒",
    desc: "获得气血值上限30%的护盾（持续4秒）+ 解控 + 护盾存在期间免控 + 获得1层血怒 + 减绝招CD 4秒",
    tips: "被封外缴械时不可释放",
    books: [
      {
        text: "<strong>常规推荐</strong>：护盾化解伤害额外提高10%，持续时间延长1秒"
      },
      {
        text: "周围队友同时获得气血值最大值15%的护盾（带盾墙时可带）"
      }
    ]
  },
  {
    name: "断马催城",
    type: "shield",
    cd: "CD 20秒",
    desc: "6尺眩晕敌方5秒 + 驱散一个增益 + 获得1层血怒 + 减绝招CD 3秒",
    books: [
      {
        text: "<strong>常规推荐</strong>：恢复自身气血最大值的20%"
      },
      {
        text: "被命中目标造成的伤害降低15%，持续5秒"
      }
    ]
  }
];
const bladeSkills = [
  {
    name: "闪刀",
    type: "blade",
    cd: "CD 10秒",
    segments: [
      {
        label: "1段",
        desc: "15尺位移伤害技能 + 消耗1层血怒（回血2%）"
      },
      {
        label: "2段",
        desc: "对敌方造成持续流血（16秒）+ 消耗1层血怒（回血2%）"
      }
    ],
    tips: "3层血怒时使用触发<strong>战狂</strong>：额外大伤害 + 减疗30%（3秒）",
    books: [
      {
        text: "<strong>核心推荐</strong>：增伤15%，持续12秒"
      },
      {
        text: "命中流血目标回血5%"
      }
    ]
  },
  {
    name: "斩刀",
    type: "blade",
    cd: "CD 10秒",
    desc: "20尺位移伤害技能 + 击落下马 + 减速50%（3秒）+ 消耗1层血怒 + 减绝招CD 1秒",
    books: [
      {
        text: "<strong>核心推荐</strong>：3秒眩晕，并使得下次施展刀系技能返还其调息时间"
      },
      {
        text: "附加流血，持续16秒"
      }
    ]
  },
  {
    name: "绝刀",
    type: "blade",
    cd: "CD 8秒",
    desc: "6尺伤害技能 + 目标气血值低于50%时伤害提高50% + 消耗1层血怒 + 减绝招CD 1秒",
    books: [
      {
        text: "<strong>核心推荐</strong>：目标气血值低于50%时，伤害再额外提高50%"
      },
      {
        text: "目标每有一层流血，额外造成一次小伤害"
      }
    ]
  }
];
const ultimates = [
  {
    name: "阵云结晦",
    type: "ultimate",
    cd: "CD 60秒（套装-8秒）",
    segments: [
      {
        label: "1段",
        desc: "6尺轻功沉默3秒 + 免控2秒"
      },
      {
        label: "2段",
        desc: "6尺轻功沉默3秒 + 免控2秒"
      },
      {
        label: "3段",
        desc: "20尺突进 + 轻功沉默3秒 + 免控2秒 + 获得3层血怒"
      }
    ],
    special: "每段命中目标使自身10秒内增伤15%（效果覆盖，不可叠加）",
    tips: "连续封轻功+免控+追击+增伤+获得3层血怒，PVP首选绝招"
  },
  {
    name: "矢尽兵穷",
    type: "ultimate",
    cd: "CD 60秒（套装-8秒）",
    desc: "立刻获得3层血怒，2秒后生成决斗场，离开决斗场的敌方造成伤害降低60%（持续12秒）",
    special: "决斗场范围内额外减疗10%（持续12秒）"
  }
];
const talents = [
  {
    layer: "第一层",
    options: [
      {
        name: "血狱",
        desc: "会心提高5%，流血最高可叠加3层",
        recommend: false
      },
      {
        name: "镇关",
        desc: "施展盾系招式获得1秒盾立（免控1秒+抵御1次伤害）",
        recommend: true,
        note: "PVP核心奇穴，提供稳定免控"
      }
    ]
  },
  {
    layer: "第二层",
    options: [
      {
        name: "睥睨",
        desc: "攻击气血值百分比低于自身的目标后，自身增伤10%，持续5秒",
        recommend: true,
        note: "实战更容易触发"
      },
      {
        name: "陷阵",
        desc: "每次添加流血，会心会效提高6%（持续15秒，最多叠加2层）",
        recommend: false
      }
    ]
  },
  {
    layer: "第三层",
    options: [
      {
        name: "碎甲",
        desc: "血怒不再降低受到的伤害，伤害效果提升至5%，持续时间延长至25秒，刀系招式不再消耗血怒",
        recommend: false
      },
      {
        name: "战狂",
        desc: "刀系消耗3层血怒，额外造成一次大伤害，并使敌方减疗30%（持续3秒）",
        recommend: true,
        note: "PVP核心奇穴，爆发+减疗"
      }
    ]
  },
  {
    layer: "第四层",
    options: [
      {
        name: "矢尽兵穷",
        desc: "解锁绝招「矢尽兵穷」",
        recommend: false
      },
      {
        name: "阵云结晦",
        desc: "解锁绝招「阵云结晦」",
        recommend: true,
        note: "多段封轻功+免控+增伤+额外血怒"
      }
    ]
  }
];
const cdTable = [
  {
    skill: "盾猛",
    base: "18秒",
    withBook: "3秒（战狂触发）"
  },
  {
    skill: "盾飞",
    base: "15秒",
    withBook: "0秒（重置刀系）"
  },
  {
    skill: "闪刀",
    base: "10秒",
    withBook: "0秒（盾飞重置）"
  },
  {
    skill: "盾墙",
    base: "35秒",
    withBook: "4秒（每段减CD）"
  },
  {
    skill: "斩刀",
    base: "10秒",
    withBook: "1秒"
  },
  {
    skill: "绝刀",
    base: "8秒",
    withBook: "1秒"
  },
  {
    skill: "盾壁",
    base: "30秒",
    withBook: "4秒"
  },
  {
    skill: "断马催城",
    base: "20秒",
    withBook: "3秒"
  }
];
const skillsData = {
  mechanisms,
  controlMechanism,
  shieldSkills,
  bladeSkills,
  ultimates,
  talents,
  cdTable
};
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cangyun/skills.md","filePath":"cangyun/skills.md"}');
const __default__ = { name: "cangyun/skills.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const cdColumns = [
      { key: "skill", label: "技能" },
      { key: "base", label: "基础 CD" },
      { key: "withBook", label: "秘籍或联动效果" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3e76eaa9>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: "苍云技能",
        title: "技能详解",
        subtitle: "8 选 4 主动技能、四层奇穴与绝招选择",
        summary: "这页先解决三个问题：血怒怎么攒、战狂怎么打、盾立怎么续。理解这三件事后，再去背具体技能和 CD 才有意义。",
        meta: "技能机制 · 奇穴选择 · CD 管理",
        badge: "基础必读",
        note: "推荐先读核心机制，再看盾系与刀系技能，最后回头确认奇穴与 CD 表。"
      }, null, _parent));
      _push(ssrRenderComponent(PageIntro, {
        eyebrow: "先看这一段",
        title: "苍云的 PVP 节奏",
        summary: "盾系技能让你活下来并攒出血怒，刀系技能负责把血怒转成爆发和减疗。控制链里打出战狂，才是苍云真正的压制点。",
        chips: ["血怒", "战狂", "盾立", "控制减疗"]
      }, null, _parent));
      _push(`<h2 id="核心机制" tabindex="-1" data-v-3e76eaa9>核心机制 <a class="header-anchor" href="#核心机制" aria-label="Permalink to &quot;核心机制&quot;" data-v-3e76eaa9>​</a></h2><!--[-->`);
      ssrRenderList(unref(skillsData).mechanisms, (mech) => {
        _push(ssrRenderComponent(MechanismTable, {
          key: mech.name,
          title: mech.name,
          rows: mech.rows
        }, null, _parent));
      });
      _push(`<!--]--><h2 id="控制机制" tabindex="-1" data-v-3e76eaa9>控制机制 <a class="header-anchor" href="#控制机制" aria-label="Permalink to &quot;控制机制&quot;" data-v-3e76eaa9>​</a></h2>`);
      _push(ssrRenderComponent(MechanismTable, {
        title: "控制与减疗",
        rows: unref(skillsData).controlMechanism.rows
      }, null, _parent));
      _push(`<h2 id="盾系技能" tabindex="-1" data-v-3e76eaa9>盾系技能 <a class="header-anchor" href="#盾系技能" aria-label="Permalink to &quot;盾系技能&quot;" data-v-3e76eaa9>​</a></h2><!--[-->`);
      ssrRenderList(unref(skillsData).shieldSkills, (skill) => {
        _push(ssrRenderComponent(SkillCard, {
          key: skill.name,
          skill
        }, null, _parent));
      });
      _push(`<!--]--><h2 id="刀系技能" tabindex="-1" data-v-3e76eaa9>刀系技能 <a class="header-anchor" href="#刀系技能" aria-label="Permalink to &quot;刀系技能&quot;" data-v-3e76eaa9>​</a></h2><!--[-->`);
      ssrRenderList(unref(skillsData).bladeSkills, (skill) => {
        _push(ssrRenderComponent(SkillCard, {
          key: skill.name,
          skill
        }, null, _parent));
      });
      _push(`<!--]--><h2 id="绝招" tabindex="-1" data-v-3e76eaa9>绝招 <a class="header-anchor" href="#绝招" aria-label="Permalink to &quot;绝招&quot;" data-v-3e76eaa9>​</a></h2><!--[-->`);
      ssrRenderList(unref(skillsData).ultimates, (skill) => {
        _push(ssrRenderComponent(SkillCard, {
          key: skill.name,
          skill
        }, null, _parent));
      });
      _push(`<!--]--><h2 id="奇穴选择" tabindex="-1" data-v-3e76eaa9>奇穴选择 <a class="header-anchor" href="#奇穴选择" aria-label="Permalink to &quot;奇穴选择&quot;" data-v-3e76eaa9>​</a></h2><div class="talent-grid" data-v-3e76eaa9><!--[-->`);
      ssrRenderList(unref(skillsData).talents, (talent) => {
        _push(`<div class="talent-layer" data-v-3e76eaa9><p class="guide-kicker" data-v-3e76eaa9>${ssrInterpolate(talent.layer)}</p><!--[-->`);
        ssrRenderList(talent.options, (opt) => {
          _push(`<div class="${ssrRenderClass([{ recommend: opt.recommend }, "talent-option"])}" data-v-3e76eaa9><div class="talent-option__header" data-v-3e76eaa9><strong data-v-3e76eaa9>${ssrInterpolate(opt.name)}</strong>`);
          if (opt.recommend) {
            _push(`<span class="recommend-badge" data-v-3e76eaa9>推荐</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p data-v-3e76eaa9>${ssrInterpolate(opt.desc)}</p>`);
          if (opt.note) {
            _push(`<p class="talent-note" data-v-3e76eaa9>${ssrInterpolate(opt.note)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><h2 id="cd一览表" tabindex="-1" data-v-3e76eaa9>CD一览表 <a class="header-anchor" href="#cd一览表" aria-label="Permalink to &quot;CD一览表&quot;" data-v-3e76eaa9>​</a></h2>`);
      _push(ssrRenderComponent(ResponsiveTable, {
        caption: "移动端会保留横向滚动，不再使用 Markdown 表格模板拼接。",
        columns: cdColumns,
        rows: unref(skillsData).cdTable
      }, null, _parent));
      _push(ssrRenderComponent(NoticePanel, {
        title: "练习重点",
        tone: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-3e76eaa9${_scopeId}>如果只背一个实战原则，就记住“控制中打战狂”。控制自带 50% 减疗，战狂再叠 30%，能在短窗口里形成 80% 减疗压制。</p>`);
          } else {
            return [
              createVNode("p", null, "如果只背一个实战原则，就记住“控制中打战狂”。控制自带 50% 减疗，战狂再叠 30%，能在短窗口里形成 80% 减疗压制。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cangyun/skills.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skills = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e76eaa9"]]);
export {
  __pageData,
  skills as default
};
