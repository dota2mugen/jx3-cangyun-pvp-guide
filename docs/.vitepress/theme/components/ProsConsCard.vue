<template>
  <div class="pros-cons-grid">
    <div v-if="pros && pros.length" class="pros-card">
      <h4>优势</h4>
      <ul>
        <li v-for="(item, i) in pros" :key="i" v-html="item"></li>
      </ul>
    </div>
    <div v-if="cons && cons.length" class="cons-card">
      <h4>劣势</h4>
      <ul>
        <li v-for="(item, i) in cons" :key="i" v-html="item"></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pros: { type: Array, default: () => [] },
  cons: { type: Array, default: () => [] }
})
</script>

<style scoped>
.pros-cons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 24px 0;
}
.pros-card, .cons-card {
  position: relative;
  overflow: hidden;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid var(--sect-frame-color);
  box-shadow: var(--shadow-md);
}

.pros-card::before,
.cons-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.2;
  pointer-events: none;
}

.pros-card > *,
.cons-card > * {
  position: relative;
  z-index: 1;
}

.pros-card { border-left: 3px solid #517b53; }
.cons-card { border-left: 3px solid #a14b45; }
.pros-card h4 { color: #517b53; margin: 0 0 12px 0; }
.cons-card h4 { color: #a14b45; margin: 0 0 12px 0; }
ul { margin: 0; padding-left: 20px; }
li { margin: 8px 0; }

@media (max-width: 768px) {
  .pros-card,
  .cons-card {
    padding: 18px;
    border-radius: 16px;
  }
}
</style>
