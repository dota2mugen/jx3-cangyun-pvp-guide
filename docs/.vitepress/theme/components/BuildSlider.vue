<template>
  <div class="build-slider">
    <div class="slider-header">
      <h2>{{ build.name }}</h2>
      <span class="build-tag" :class="build.tagClass">{{ build.tag }}</span>
    </div>
    <p class="build-desc">{{ build.description }}</p>

    <div class="slider-content">
      <div v-for="(slide, index) in build.slides" :key="index" class="slide" v-show="currentSlide === index">
        <h3>{{ slide.title }}</h3>

        <template v-if="slide.type === 'skills-books'">
          <div class="skills-grid">
            <SkillCard v-for="skill in slide.content.skills" :key="skill.name" :skill="normalizeSkill(skill)" />
          </div>
          <div v-if="slide.content.ultimate" class="ultimate-card">
            <h4>绝招：{{ slide.content.ultimate.name }}</h4>
            <p>{{ slide.content.ultimate.desc }}</p>
          </div>
          <p v-if="slide.content.note" class="slide-note">{{ slide.content.note }}</p>
        </template>

        <template v-else-if="slide.type === 'talents'">
          <div class="talents-list">
            <div v-for="talent in slide.content.talents" :key="talent.layer" class="talent-item">
              <span class="layer">{{ talent.layer }}</span>
              <span class="pick">→ {{ talent.pick }}</span>
              <span class="reason">{{ talent.reason }}</span>
            </div>
          </div>
        </template>

        <template v-else-if="slide.type === 'combo' || slide.type === 'burst'">
          <p class="combo-desc">{{ slide.content.desc }}</p>
          <div
            v-for="phase in normalizePhases(slide.content)"
            :key="phase.name || phase.id"
            class="phase-block"
            :class="{ burst: slide.type === 'burst' && phase.name }"
          >
            <h4 v-if="phase.name">{{ phase.name }}</h4>
            <div class="slide-combo" :class="{ 'animate-play': currentSlide === index }">
              <div class="slide-combo-steps">
                <template v-for="(step, stepIndex) in phase.steps" :key="`${phase.name}-${stepIndex}`">
                  <div
                    class="combo-step-item"
                    :class="{ highlight: step.highlight }"
                    :style="{ '--delay': `${stepIndex * 0.18}s` }"
                  >
                    <span class="step-order">{{ stepIndex + 1 }}</span>
                    <span class="step-skill">{{ step.skill }}</span>
                    <span class="step-effect">{{ step.effect }}</span>
                    <span v-if="step.key" class="step-key">{{ step.key }}</span>
                  </div>
                  <span
                    v-if="stepIndex < phase.steps.length - 1"
                    class="combo-step-arrow"
                    :class="getParticleClass(step, phase.steps[stepIndex + 1])"
                    :style="{ '--particle-delay': `${stepIndex * 0.18 + 0.08}s` }"
                  >
                    →
                  </span>
                </template>
              </div>

              <div v-if="phase.followUp?.length" class="slide-combo-follow">
                <div class="follow-label">后续动作</div>
                <div class="slide-combo-steps">
                  <template v-for="(step, stepIndex) in phase.followUp" :key="`follow-${phase.name}-${stepIndex}`">
                    <div
                      class="combo-step-item follow-up"
                      :style="{ '--delay': `${(phase.steps.length + stepIndex) * 0.18}s` }"
                    >
                      <span class="step-order">{{ stepIndex + 1 }}</span>
                      <span class="step-skill">{{ step.skill }}</span>
                      <span class="step-effect">{{ step.effect }}</span>
                    </div>
                    <span
                      v-if="stepIndex < phase.followUp.length - 1"
                      class="combo-step-arrow"
                      :class="getParticleClass(step, phase.followUp[stepIndex + 1])"
                      :style="{ '--particle-delay': `${(phase.steps.length + stepIndex) * 0.18 + 0.08}s` }"
                    >
                      →
                    </span>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="slide.type === 'tips'">
          <ProsConsCard :pros="slide.content.pros" :cons="slide.content.cons" />
          <div v-if="slide.content.tips" class="tips-box">
            <h4>技巧提示</h4>
            <ul>
              <li v-for="(tip, i) in slide.content.tips" :key="i" v-html="tip"></li>
            </ul>
          </div>
        </template>
      </div>
    </div>

    <div class="slider-nav">
      <button class="nav-btn prev" @click="prevSlide" :disabled="currentSlide === 0">上一页</button>
      <div class="dots">
        <span v-for="(_, i) in build.slides" :key="i" class="dot" :class="{ active: currentSlide === i }" @click="currentSlide = i"></span>
      </div>
      <button class="nav-btn next" @click="nextSlide" :disabled="currentSlide === build.slides.length - 1">下一页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import SkillCard from './SkillCard.vue'
import ProsConsCard from './ProsConsCard.vue'

const props = defineProps({
  build: { type: Object, required: true }
})

const currentSlide = ref(0)

watch(
  () => props.build.id,
  () => {
    currentSlide.value = 0
  }
)

function prevSlide() {
  if (currentSlide.value > 0) currentSlide.value--
}

function nextSlide() {
  if (currentSlide.value < props.build.slides.length - 1) currentSlide.value++
}

function normalizeSkill(skill) {
  if (skill.books || !skill.book) {
    return skill
  }

  return {
    ...skill,
    books: [
      {
        text: skill.book,
        bookNote: skill.bookNote
      }
    ]
  }
}

function normalizePhases(content) {
  if (content.phases?.length) {
    return content.phases
  }

  return [
    {
      id: 'default',
      name: '',
      steps: content.steps || [],
      followUp: content.followUp || []
    }
  ]
}

function detectSkillType(step) {
  const skillName = step.skill || ''
  const shieldSkills = ['盾猛', '盾飞', '盾墙', '盾壁', '盾压', '盾舞']
  const bladeSkills = ['闪刀', '斩刀', '隐刀', '刀']

  if (shieldSkills.some((item) => skillName.includes(item))) return 'shield'
  if (bladeSkills.some((item) => skillName.includes(item))) return 'blade'
  return 'mix'
}

function getParticleClass(currentStep, nextStep) {
  const currentType = detectSkillType(currentStep)
  const nextType = detectSkillType(nextStep)

  if (currentType === 'shield' && nextType === 'shield') return 'particle-shield'
  if (currentType === 'blade' && nextType === 'blade') return 'particle-blade'
  return 'particle-mix'
}
</script>

<style scoped>
@keyframes comboStepIn {
  0% {
    opacity: 0;
    transform: translateX(-24px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes comboStepHighlight {
  0% {
    box-shadow: 0 0 0 rgba(137, 105, 20, 0);
    border-color: rgba(100, 83, 53, 0.12);
  }

  35% {
    box-shadow: 0 0 24px rgba(137, 105, 20, 0.24);
    border-color: rgba(137, 105, 20, 0.36);
  }

  100% {
    box-shadow: 0 0 0 rgba(137, 105, 20, 0);
    border-color: rgba(100, 83, 53, 0.12);
  }
}

@keyframes comboPulse {
  0%,
  100% {
    box-shadow: 0 0 10px rgba(161, 75, 69, 0.2);
  }

  50% {
    box-shadow: 0 0 18px rgba(161, 75, 69, 0.38), 0 0 28px rgba(137, 105, 20, 0.24);
  }
}

@keyframes arrowFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes particleFlow {
  0% {
    transform: translateX(-35%);
    opacity: 0;
  }

  45% {
    opacity: 1;
  }

  100% {
    transform: translateX(35%);
    opacity: 0;
  }
}

.build-slider {
  position: relative;
  overflow: hidden;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  border-radius: 24px;
  padding: 32px;
  border: 1px solid var(--sect-frame-color);
  box-shadow: var(--shadow-lg);
}

.build-slider::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.22;
  pointer-events: none;
}

.build-slider > * {
  position: relative;
  z-index: 1;
}

.slider-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.slider-header h2 {
  margin: 0;
}

.build-tag {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.875rem;
}

.build-tag.beginner {
  background: #4caf50;
  color: #fff;
}

.build-tag.advanced {
  background: #ff9800;
  color: #fff;
}

.build-tag.support {
  background: #2196f3;
  color: #fff;
}

.build-desc {
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.ultimate-card {
  margin-top: 24px;
  padding: 16px;
  background: rgba(255, 250, 242, 0.42);
  border-radius: 16px;
  border-left: 3px solid var(--color-primary);
  border-top: 1px solid rgba(100, 83, 53, 0.12);
}

.ultimate-card h4 {
  margin: 0 0 8px;
}

.slide-note {
  margin-top: 16px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.talents-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.talent-item {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: rgba(255, 250, 242, 0.42);
  border-radius: 14px;
  border: 1px solid rgba(100, 83, 53, 0.12);
}

.talent-item .layer {
  color: var(--color-text-muted);
  min-width: 60px;
}

.talent-item .pick {
  color: var(--color-primary);
  font-weight: 600;
}

.talent-item .reason {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.combo-desc {
  margin-bottom: 14px;
}

.phase-block {
  margin-bottom: 24px;
}

.phase-block h4 {
  margin: 0 0 12px;
  color: var(--color-secondary);
}

.slide-combo {
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 250, 242, 0.34);
  border: 1px solid rgba(100, 83, 53, 0.12);
}

.phase-block.burst .slide-combo {
  border-color: rgba(161, 75, 69, 0.16);
}

.slide-combo-steps {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
}

.combo-step-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px;
  padding: 8px 12px;
  border-radius: 14px;
  background: rgba(255, 250, 242, 0.8);
  border: 1px solid rgba(100, 83, 53, 0.12);
  opacity: 0;
  transform: translateX(-24px);
}

.slide-combo.animate-play .combo-step-item {
  animation:
    comboStepIn 0.45s ease-out forwards,
    comboStepHighlight 1.1s ease-out forwards;
  animation-delay: var(--delay, 0s), var(--delay, 0s);
}

.combo-step-item.highlight {
  background: linear-gradient(135deg, rgba(161, 75, 69, 0.14) 0%, rgba(137, 105, 20, 0.14) 100%);
  border-color: rgba(161, 75, 69, 0.3);
}

.slide-combo.animate-play .combo-step-item.highlight {
  animation:
    comboStepIn 0.45s ease-out forwards,
    comboPulse 1.4s ease-in-out infinite;
  animation-delay: var(--delay, 0s), calc(var(--delay, 0s) + 0.45s);
}

.combo-step-item.follow-up {
  background: rgba(246, 238, 224, 0.78);
}

.combo-step-arrow {
  position: relative;
  margin: 0 2px;
  color: var(--color-primary);
  opacity: 0;
}

.slide-combo.animate-play .combo-step-arrow {
  animation: arrowFadeIn 0.25s ease-out forwards;
  animation-delay: var(--particle-delay, 0.08s);
}

.combo-step-arrow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 12%;
  width: 76%;
  height: 2px;
  border-radius: 999px;
  transform: translateY(-50%);
  opacity: 0;
}

.slide-combo.animate-play .combo-step-arrow::before {
  opacity: 1;
  animation: particleFlow 1.2s ease-in-out infinite;
  animation-delay: var(--particle-delay, 0.08s);
}

.combo-step-arrow.particle-shield::before {
  background: linear-gradient(90deg, rgba(85, 127, 174, 0), rgba(85, 127, 174, 0.9), rgba(85, 127, 174, 0));
}

.combo-step-arrow.particle-blade::before {
  background: linear-gradient(90deg, rgba(161, 75, 69, 0), rgba(161, 75, 69, 0.9), rgba(161, 75, 69, 0));
}

.combo-step-arrow.particle-mix::before {
  background: linear-gradient(90deg, rgba(85, 127, 174, 0), rgba(137, 105, 20, 0.92), rgba(161, 75, 69, 0));
}

.step-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(137, 105, 20, 0.12);
  color: var(--color-primary);
  font-size: 0.8rem;
}

.step-skill {
  font-weight: 600;
  color: var(--color-ink);
}

.step-effect {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.step-key {
  font-size: 0.75rem;
  color: var(--color-primary);
}

.slide-combo-follow {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed rgba(100, 83, 53, 0.16);
}

.follow-label {
  margin-bottom: 10px;
  color: var(--color-text-muted);
  font-size: 0.84rem;
  letter-spacing: 0.08em;
}

.tips-box {
  margin-top: 24px;
  padding: 16px;
  background: rgba(255, 250, 242, 0.42);
  border-radius: 16px;
  border-left: 3px solid var(--color-secondary);
  border-top: 1px solid rgba(100, 83, 53, 0.12);
}

.tips-box h4 {
  margin: 0 0 12px;
  color: var(--color-secondary);
}

.tips-box ul {
  margin: 0;
  padding-left: 20px;
}

.tips-box li {
  margin: 8px 0;
}

.slider-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(100, 83, 53, 0.14);
}

.nav-btn {
  padding: 8px 16px;
  background: rgba(255, 250, 242, 0.42);
  border: 1px solid rgba(100, 83, 53, 0.14);
  border-radius: 999px;
  color: var(--color-text);
  cursor: pointer;
}

.nav-btn:hover:not(:disabled) {
  background: rgba(137, 105, 20, 0.08);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(100, 83, 53, 0.2);
  cursor: pointer;
}

.dot.active {
  background: var(--color-primary);
}

@media (max-width: 768px) {
  .build-slider {
    padding: 20px;
    border-radius: 18px;
  }

  .combo-step-item {
    width: 100%;
    margin: 4px 0;
  }

  .combo-step-arrow {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 4px 0;
  }

  .slider-nav {
    gap: 12px;
    flex-wrap: wrap;
  }
}
</style>
