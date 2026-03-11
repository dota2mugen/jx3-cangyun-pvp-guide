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
  background: var(--color-bg-card);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--color-border);
}
.pros-card { border-left: 3px solid #4caf50; }
.cons-card { border-left: 3px solid #f44336; }
.pros-card h4 { color: #4caf50; margin: 0 0 12px 0; }
.cons-card h4 { color: #f44336; margin: 0 0 12px 0; }
ul { margin: 0; padding-left: 20px; }
li { margin: 8px 0; }
</style>