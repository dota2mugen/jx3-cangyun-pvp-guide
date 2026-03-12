import { ref, watch, mergeProps, useSSRContext, computed, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { b as useRoute } from "./Content.DgeV2Xq7.js";
import { b as buildsData } from "./builds.B0J53f9q.js";
import { P as PageHero, a as PageIntro } from "./PageIntro.L3kNnde5.js";
import { N as NoticePanel } from "./NoticePanel.BXSp8naX.js";
import { S as SkillCard } from "./SkillCard.RVJDLOsI.js";
import { P as ProsConsCard } from "./ProsConsCard.gNuT8WJX.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import "@vueuse/core";
const _sfc_main$2 = {
  __name: "BuildSlider",
  __ssrInlineRender: true,
  props: {
    build: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const currentSlide = ref(0);
    watch(
      () => props.build.id,
      () => {
        currentSlide.value = 0;
      }
    );
    function normalizeSkill(skill) {
      if (skill.books || !skill.book) {
        return skill;
      }
      return {
        ...skill,
        books: [
          {
            text: skill.book,
            bookNote: skill.bookNote
          }
        ]
      };
    }
    function normalizePhases(content) {
      var _a;
      if ((_a = content.phases) == null ? void 0 : _a.length) {
        return content.phases;
      }
      return [
        {
          id: "default",
          name: "",
          steps: content.steps || [],
          followUp: content.followUp || []
        }
      ];
    }
    function detectSkillType(step) {
      const skillName = step.skill || "";
      const shieldSkills = ["盾猛", "盾飞", "盾墙", "盾壁", "盾压", "盾舞"];
      const bladeSkills = ["闪刀", "斩刀", "隐刀", "刀"];
      if (shieldSkills.some((item) => skillName.includes(item))) return "shield";
      if (bladeSkills.some((item) => skillName.includes(item))) return "blade";
      return "mix";
    }
    function getParticleClass(currentStep, nextStep) {
      const currentType = detectSkillType(currentStep);
      const nextType = detectSkillType(nextStep);
      if (currentType === "shield" && nextType === "shield") return "particle-shield";
      if (currentType === "blade" && nextType === "blade") return "particle-blade";
      return "particle-mix";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "build-slider" }, _attrs))} data-v-6729a3b4><div class="slider-header" data-v-6729a3b4><h2 data-v-6729a3b4>${ssrInterpolate(__props.build.name)}</h2><span class="${ssrRenderClass([__props.build.tagClass, "build-tag"])}" data-v-6729a3b4>${ssrInterpolate(__props.build.tag)}</span></div><p class="build-desc" data-v-6729a3b4>${ssrInterpolate(__props.build.description)}</p><div class="slider-content" data-v-6729a3b4><!--[-->`);
      ssrRenderList(__props.build.slides, (slide, index) => {
        _push(`<div class="slide" style="${ssrRenderStyle(currentSlide.value === index ? null : { display: "none" })}" data-v-6729a3b4><h3 data-v-6729a3b4>${ssrInterpolate(slide.title)}</h3>`);
        if (slide.type === "skills-books") {
          _push(`<!--[--><div class="skills-grid" data-v-6729a3b4><!--[-->`);
          ssrRenderList(slide.content.skills, (skill) => {
            _push(ssrRenderComponent(SkillCard, {
              key: skill.name,
              skill: normalizeSkill(skill)
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
          if (slide.content.ultimate) {
            _push(`<div class="ultimate-card" data-v-6729a3b4><h4 data-v-6729a3b4>绝招：${ssrInterpolate(slide.content.ultimate.name)}</h4><p data-v-6729a3b4>${ssrInterpolate(slide.content.ultimate.desc)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (slide.content.note) {
            _push(`<p class="slide-note" data-v-6729a3b4>${ssrInterpolate(slide.content.note)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else if (slide.type === "talents") {
          _push(`<div class="talents-list" data-v-6729a3b4><!--[-->`);
          ssrRenderList(slide.content.talents, (talent) => {
            _push(`<div class="talent-item" data-v-6729a3b4><span class="layer" data-v-6729a3b4>${ssrInterpolate(talent.layer)}</span><span class="pick" data-v-6729a3b4>→ ${ssrInterpolate(talent.pick)}</span><span class="reason" data-v-6729a3b4>${ssrInterpolate(talent.reason)}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else if (slide.type === "combo" || slide.type === "burst") {
          _push(`<!--[--><p class="combo-desc" data-v-6729a3b4>${ssrInterpolate(slide.content.desc)}</p><!--[-->`);
          ssrRenderList(normalizePhases(slide.content), (phase) => {
            var _a;
            _push(`<div class="${ssrRenderClass([{ burst: slide.type === "burst" && phase.name }, "phase-block"])}" data-v-6729a3b4>`);
            if (phase.name) {
              _push(`<h4 data-v-6729a3b4>${ssrInterpolate(phase.name)}</h4>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="${ssrRenderClass([{ "animate-play": currentSlide.value === index }, "slide-combo"])}" data-v-6729a3b4><div class="slide-combo-steps" data-v-6729a3b4><!--[-->`);
            ssrRenderList(phase.steps, (step, stepIndex) => {
              _push(`<!--[--><div class="${ssrRenderClass([{ highlight: step.highlight }, "combo-step-item"])}" style="${ssrRenderStyle({ "--delay": `${stepIndex * 0.18}s` })}" data-v-6729a3b4><span class="step-order" data-v-6729a3b4>${ssrInterpolate(stepIndex + 1)}</span><span class="step-skill" data-v-6729a3b4>${ssrInterpolate(step.skill)}</span><span class="step-effect" data-v-6729a3b4>${ssrInterpolate(step.effect)}</span>`);
              if (step.key) {
                _push(`<span class="step-key" data-v-6729a3b4>${ssrInterpolate(step.key)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
              if (stepIndex < phase.steps.length - 1) {
                _push(`<span class="${ssrRenderClass([getParticleClass(step, phase.steps[stepIndex + 1]), "combo-step-arrow"])}" style="${ssrRenderStyle({ "--particle-delay": `${stepIndex * 0.18 + 0.08}s` })}" data-v-6729a3b4> → </span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div>`);
            if ((_a = phase.followUp) == null ? void 0 : _a.length) {
              _push(`<div class="slide-combo-follow" data-v-6729a3b4><div class="follow-label" data-v-6729a3b4>后续动作</div><div class="slide-combo-steps" data-v-6729a3b4><!--[-->`);
              ssrRenderList(phase.followUp, (step, stepIndex) => {
                _push(`<!--[--><div class="combo-step-item follow-up" style="${ssrRenderStyle({ "--delay": `${(phase.steps.length + stepIndex) * 0.18}s` })}" data-v-6729a3b4><span class="step-order" data-v-6729a3b4>${ssrInterpolate(stepIndex + 1)}</span><span class="step-skill" data-v-6729a3b4>${ssrInterpolate(step.skill)}</span><span class="step-effect" data-v-6729a3b4>${ssrInterpolate(step.effect)}</span></div>`);
                if (stepIndex < phase.followUp.length - 1) {
                  _push(`<span class="${ssrRenderClass([getParticleClass(step, phase.followUp[stepIndex + 1]), "combo-step-arrow"])}" style="${ssrRenderStyle({ "--particle-delay": `${(phase.steps.length + stepIndex) * 0.18 + 0.08}s` })}" data-v-6729a3b4> → </span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              });
              _push(`<!--]--></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]--><!--]-->`);
        } else if (slide.type === "tips") {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(ProsConsCard, {
            pros: slide.content.pros,
            cons: slide.content.cons
          }, null, _parent));
          if (slide.content.tips) {
            _push(`<div class="tips-box" data-v-6729a3b4><h4 data-v-6729a3b4>技巧提示</h4><ul data-v-6729a3b4><!--[-->`);
            ssrRenderList(slide.content.tips, (tip, i) => {
              _push(`<li data-v-6729a3b4>${tip ?? ""}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="slider-nav" data-v-6729a3b4><button class="nav-btn prev"${ssrIncludeBooleanAttr(currentSlide.value === 0) ? " disabled" : ""} data-v-6729a3b4>上一页</button><div class="dots" data-v-6729a3b4><!--[-->`);
      ssrRenderList(__props.build.slides, (_, i) => {
        _push(`<span class="${ssrRenderClass([{ active: currentSlide.value === i }, "dot"])}" data-v-6729a3b4></span>`);
      });
      _push(`<!--]--></div><button class="nav-btn next"${ssrIncludeBooleanAttr(currentSlide.value === __props.build.slides.length - 1) ? " disabled" : ""} data-v-6729a3b4>下一页</button></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/BuildSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BuildSlider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6729a3b4"]]);
const _sfc_main$1 = {
  __name: "BuildSwitchNav",
  __ssrInlineRender: true,
  props: {
    backHref: { type: String, default: "/cangyun/builds" },
    prevBuild: { type: Object, default: null },
    nextBuild: { type: Object, default: null }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "build-switch-nav",
        "aria-label": "流派切换"
      }, _attrs))} data-v-b288f0b4><a class="build-switch-nav__back"${ssrRenderAttr("href", __props.backHref)} data-v-b288f0b4>返回流派选择</a><div class="build-switch-nav__pair" data-v-b288f0b4>`);
      if (__props.prevBuild) {
        _push(`<a class="build-switch-nav__item prev"${ssrRenderAttr("href", `/cangyun/build-detail?id=${__props.prevBuild.id}`)} data-v-b288f0b4><span class="build-switch-nav__label" data-v-b288f0b4>上一流派</span><strong data-v-b288f0b4>${ssrInterpolate(__props.prevBuild.name)}</strong></a>`);
      } else {
        _push(`<span class="build-switch-nav__placeholder" data-v-b288f0b4></span>`);
      }
      if (__props.nextBuild) {
        _push(`<a class="build-switch-nav__item next"${ssrRenderAttr("href", `/cangyun/build-detail?id=${__props.nextBuild.id}`)} data-v-b288f0b4><span class="build-switch-nav__label" data-v-b288f0b4>下一流派</span><strong data-v-b288f0b4>${ssrInterpolate(__props.nextBuild.name)}</strong></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/BuildSwitchNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BuildSwitchNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b288f0b4"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cangyun/build-detail.md","filePath":"cangyun/build-detail.md"}');
const __default__ = { name: "cangyun/build-detail.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const buildOrder = Object.values(buildsData.builds);
    const requestedBuildId = computed(() => {
      route.path;
      if (typeof window === "undefined") {
        return "shield-barrier";
      }
      const params = new URLSearchParams(window.location.search);
      return params.get("id") || "shield-barrier";
    });
    const currentBuildId = computed(() => buildsData.builds[requestedBuildId.value] ? requestedBuildId.value : "shield-barrier");
    const build = computed(() => buildsData.builds[currentBuildId.value]);
    const isFallback = computed(() => requestedBuildId.value !== currentBuildId.value);
    const buildIndex = computed(() => buildOrder.findIndex((item) => item.id === currentBuildId.value));
    const prevBuild = computed(() => buildIndex.value > 0 ? buildOrder[buildIndex.value - 1] : null);
    const nextBuild = computed(() => buildIndex.value >= 0 && buildIndex.value < buildOrder.length - 1 ? buildOrder[buildIndex.value + 1] : null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PageHero, {
        eyebrow: "苍云流派详情",
        title: build.value.name,
        subtitle: build.value.description,
        meta: "分页讲解 · 技能与秘籍 · 连招与注意事项",
        badge: build.value.tag,
        note: "详情页按技能与秘籍、奇穴选择、基础循环、爆发循环、注意事项的顺序展开。"
      }, null, _parent));
      _push(ssrRenderComponent(PageIntro, {
        eyebrow: "阅读方式",
        title: "按顺序把一套流派读完整",
        summary: "不要只看爆发连招。先确认技能与秘籍配置，再看奇穴，再把基础循环和爆发循环连在一起理解，最后记住注意事项里的风险点。",
        chips: [build.value.name, build.value.tag]
      }, null, _parent));
      _push(ssrRenderComponent(BuildSwitchNav, {
        "back-href": "/cangyun/builds",
        "prev-build": prevBuild.value,
        "next-build": nextBuild.value
      }, null, _parent));
      if (isFallback.value) {
        _push(ssrRenderComponent(NoticePanel, {
          title: "参数已回退",
          tone: "warn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>当前链接里的流派参数不存在，页面已自动回退到默认的「盾壁生存流」。你仍然可以从流派选择页重新进入其他配置详情。</p>`);
            } else {
              return [
                createVNode("p", null, "当前链接里的流派参数不存在，页面已自动回退到默认的「盾壁生存流」。你仍然可以从流派选择页重新进入其他配置详情。")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (build.value) {
        _push(ssrRenderComponent(BuildSlider, { build: build.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(BuildSwitchNav, {
        "back-href": "/cangyun/builds",
        "prev-build": prevBuild.value,
        "next-build": nextBuild.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cangyun/build-detail.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
