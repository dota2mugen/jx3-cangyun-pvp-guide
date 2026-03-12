<template>
  <div class="mechanism-section">
    <h3 v-if="title" class="mechanism-title">
      <span class="mechanism-title__sect-ornament" aria-hidden="true"></span>
      <span>{{ title }}</span>
    </h3>
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
.mechanism-section {
  margin: 16px 0;
}

.mechanism-title {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0 0 12px;
  padding: 0 0 0 18px;
  color: var(--color-ink);
}

.mechanism-title__sect-ornament {
  position: absolute;
  inset: 50% auto auto 0;
  width: 10px;
  height: 34px;
  border-radius: 999px;
  transform: translateY(-50%);
  background:
    linear-gradient(180deg, var(--color-primary), var(--color-secondary));
  box-shadow: 0 0 18px var(--sect-glow);
}

.mechanism-detail {
  position: relative;
  overflow: hidden;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  border-radius: 20px;
  border: 1px solid var(--sect-frame-color);
  box-shadow: var(--shadow-md);
}

.mechanism-detail::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.28;
  pointer-events: none;
}

.mechanism-row {
  position: relative;
  display: flex;
  border-bottom: 1px solid rgba(100, 83, 53, 0.14);
}

.mechanism-row:last-child {
  border-bottom: none;
}

.mechanism-label,
.mechanism-content {
  position: relative;
  z-index: 1;
}

.mechanism-label {
  background: rgba(233, 222, 204, 0.72);
  padding: 12px 16px;
  min-width: 110px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.mechanism-label.warning {
  color: var(--color-danger);
}

.mechanism-content {
  padding: 12px 16px;
  flex: 1;
}

.mechanism-content.highlight {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .mechanism-row {
    display: block;
  }

  .mechanism-label {
    min-width: 0;
    border-bottom: 1px solid rgba(100, 83, 53, 0.12);
  }
}
</style>
