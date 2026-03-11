<template>
  <div class="mechanism-section">
    <h3 v-if="title">{{ title }}</h3>
    <div class="mechanism-detail">
      <div v-for="(row, i) in rows" :key="i" class="mechanism-row">
        <div class="mechanism-label" :class="{ warning: row.isWarning }">{{ row.label }}</div>
        <div class="mechanism-content" :class="{ highlight: row.isHighlight }" v-html="row.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  rows: { type: Array, required: true }
})
</script>

<style scoped>
.mechanism-section { margin: 16px 0; }
.mechanism-section h3 { margin-bottom: 12px; }
.mechanism-detail {
  background: var(--color-bg-card);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  overflow: hidden;
}
.mechanism-row {
  display: flex;
  border-bottom: 1px solid var(--color-border);
}
.mechanism-row:last-child { border-bottom: none; }
.mechanism-label {
  background: var(--color-bg-card-alt);
  padding: 12px 16px;
  min-width: 100px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
.mechanism-label.warning { color: #d94a4a; }
.mechanism-content {
  padding: 12px 16px;
  flex: 1;
}
.mechanism-content.highlight { color: var(--color-primary); }
</style>