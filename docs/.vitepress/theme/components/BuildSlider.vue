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
            <SkillCard v-for="skill in slide.content.skills" :key="skill.name" :skill="skill" />
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
          <div v-for="phase in slide.content.phases || [{ name: '', steps: slide.content.steps }]" :key="phase.name" class="phase-block">
            <h4 v-if="phase.name">{{ phase.name }}</h4>
            <div class="combo-steps">
              <template v-for="(step, i) in phase.steps" :key="i">
                <div class="step" :class="{ highlight: step.highlight }">
                  <span class="skill">{{ step.skill }}</span>
                  <span class="effect">{{ step.effect }}</span>
                  <span v-if="step.key" class="key">{{ step.key }}</span>
                </div>
                <span v-if="i < phase.steps.length - 1" class="arrow">→</span>
              </template>
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
import { ref } from 'vue'
import SkillCard from './SkillCard.vue'
import ProsConsCard from './ProsConsCard.vue'

const props = defineProps({
  build: { type: Object, required: true }
})

const currentSlide = ref(0)

function prevSlide() {
  if (currentSlide.value > 0) currentSlide.value--
}

function nextSlide() {
  if (currentSlide.value < props.build.slides.length - 1) currentSlide.value++
}
</script>

<style scoped>
.build-slider {
  background: var(--color-bg-card);
  border-radius: 12px;
  padding: 32px;
  border: 1px solid var(--color-border);
}
.slider-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.slider-header h2 { margin: 0; }
.build-tag {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
}
.build-tag.beginner { background: #4caf50; color: #fff; }
.build-tag.advanced { background: #ff9800; color: #fff; }
.build-tag.support { background: #2196f3; color: #fff; }
.build-desc { color: var(--color-text-muted); margin-bottom: 24px; }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.ultimate-card {
  margin-top: 24px;
  padding: 16px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
  border-left: 3px solid var(--color-primary);
}
.ultimate-card h4 { margin: 0 0 8px 0; }
.slide-note { margin-top: 16px; color: var(--color-text-muted); font-size: 0.9rem; }
.talents-list { display: flex; flex-direction: column; gap: 12px; }
.talent-item {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
}
.talent-item .layer { color: var(--color-text-muted); min-width: 60px; }
.talent-item .pick { color: var(--color-primary); font-weight: 600; }
.talent-item .reason { color: var(--color-text-muted); font-size: 0.9rem; }
.combo-desc { margin-bottom: 16px; }
.phase-block { margin-bottom: 24px; }
.phase-block h4 { margin: 0 0 12px 0; color: var(--color-secondary); }
.combo-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.step {
  background: var(--color-bg-card-alt);
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step.highlight {
  border: 1px solid var(--color-primary);
  background: rgba(201, 162, 39, 0.1);
}
.step .skill { font-weight: 600; }
.step .effect { font-size: 0.85rem; color: var(--color-text-muted); }
.step .key { font-size: 0.75rem; color: var(--color-primary); }
.arrow { color: var(--color-text-muted); }
.tips-box {
  margin-top: 24px;
  padding: 16px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
  border-left: 3px solid var(--color-secondary);
}
.tips-box h4 { margin: 0 0 12px 0; color: var(--color-secondary); }
.tips-box ul { margin: 0; padding-left: 20px; }
.tips-box li { margin: 8px 0; }
.slider-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}
.nav-btn {
  padding: 8px 16px;
  background: var(--color-bg-card-alt);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text);
  cursor: pointer;
}
.nav-btn:hover:not(:disabled) { background: var(--color-border); }
.nav-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.dots { display: flex; gap: 8px; }
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-border);
  cursor: pointer;
}
.dot.active { background: var(--color-primary); }
</style>