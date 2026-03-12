<template>
  <div class="skill-card" :class="`skill-type-${skill.type}`">
    <div class="skill-header">
      <h3>{{ skill.name }}</h3>
      <span class="skill-cd">{{ skill.cd }}</span>
    </div>
    <div v-if="skill.desc" class="skill-desc" v-html="skill.desc"></div>
    <div v-if="skill.segments && skill.segments.length" class="skill-segments">
      <div v-for="seg in skill.segments" :key="seg.label" class="segment">
        <span class="label">{{ seg.label }}</span>
        <span class="desc" v-html="seg.desc"></span>
      </div>
    </div>
    <div v-if="skill.specials && skill.specials.length" class="skill-specials">
      <p v-for="(special, i) in skill.specials" :key="i" v-html="special"></p>
    </div>
    <div v-if="skill.special" class="skill-special" v-html="skill.special"></div>
    <div v-if="skill.books && skill.books.length" class="skill-books">
      <h4>秘籍</h4>
      <p v-for="(book, i) in skill.books" :key="i">
        <span v-html="book.text"></span>
        <span v-if="book.bookNote" class="book-note">（{{ book.bookNote }}）</span>
      </p>
    </div>
    <p v-if="skill.tips" class="skill-tips">{{ skill.tips }}</p>
  </div>
</template>

<script setup>
defineProps({
  skill: { type: Object, required: true }
})
</script>

<style scoped>
.skill-card {
  position: relative;
  overflow: hidden;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  border-radius: 22px;
  padding: 24px;
  border: 1px solid var(--sect-frame-color);
  margin-bottom: 16px;
  box-shadow: var(--shadow-md);
}

.skill-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.22;
  pointer-events: none;
}

.skill-card > * {
  position: relative;
  z-index: 1;
}

.skill-header {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.skill-header h3 {
  margin: 0;
  font-size: 1.25rem;
}
.skill-cd {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 250, 242, 0.34);
  border: 1px solid rgba(100, 83, 53, 0.12);
}
.skill-type-shield .skill-header h3 { color: var(--color-secondary); }
.skill-type-blade .skill-header h3 { color: var(--color-blade); }
.skill-type-ultimate .skill-header h3 { color: var(--color-primary); }
.skill-desc {
  margin-bottom: 12px;
  line-height: 1.6;
}
.skill-segments {
  margin-bottom: 12px;
}
.segment {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}
.segment .label {
  color: var(--color-text-muted);
  min-width: 40px;
}
.skill-specials {
  margin-bottom: 12px;
  padding: 12px;
  background: rgba(255, 250, 242, 0.42);
  border-radius: 14px;
  border: 1px solid rgba(100, 83, 53, 0.12);
}
.skill-specials p {
  margin: 4px 0;
  font-size: 0.9rem;
}
.skill-special {
  margin-bottom: 12px;
  padding: 8px 12px;
  background: rgba(255, 250, 242, 0.42);
  border-radius: 14px;
  border: 1px solid rgba(100, 83, 53, 0.12);
  font-size: 0.9rem;
}
.skill-books {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(100, 83, 53, 0.14);
}
.skill-books h4 { margin: 0 0 8px 0; font-size: 1rem; }
.skill-books p { margin: 4px 0; font-size: 0.9rem; }
.book-note { color: var(--color-text-muted); font-size: 0.85rem; }
.skill-tips { margin-top: 12px; color: var(--color-text-muted); font-size: 0.9rem; }

@media (max-width: 768px) {
  .skill-card {
    padding: 18px;
    border-radius: 16px;
  }
}
</style>
