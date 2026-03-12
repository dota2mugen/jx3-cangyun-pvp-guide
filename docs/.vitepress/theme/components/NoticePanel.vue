<template>
  <div class="notice-panel" :class="`tone-${tone}`">
    <span class="notice-panel__sect-ornament" aria-hidden="true"></span>
    <div class="notice-panel__header">
      <span class="notice-panel__marker"></span>
      <h3>{{ title }}</h3>
    </div>
    <div class="notice-panel__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  tone: { type: String, default: 'info' }
})
</script>

<style scoped>
.notice-panel {
  position: relative;
  margin: 24px 0;
  padding: 18px 20px;
  border-radius: 20px;
  overflow: hidden;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  border: 1px solid var(--sect-frame-color);
  box-shadow: var(--shadow-md);
}

.notice-panel__sect-ornament {
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.3;
  pointer-events: none;
}

.notice-panel__header,
.notice-panel__body {
  position: relative;
  z-index: 1;
}

.notice-panel__header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.notice-panel__header h3 {
  margin: 0;
  font-size: 1.05rem;
}

.notice-panel__marker {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-info);
  box-shadow: 0 0 18px currentColor;
}

.notice-panel__body {
  margin-top: 12px;
  color: var(--color-text-muted);
}

.tone-info {
  border-color: rgba(85, 127, 174, 0.24);
}

.tone-info .notice-panel__marker {
  color: var(--color-info);
}

.tone-warn {
  border-color: rgba(161, 75, 69, 0.26);
}

.tone-warn .notice-panel__marker {
  color: var(--color-danger);
  background: var(--color-danger);
}

.tone-success {
  border-color: rgba(81, 123, 83, 0.26);
}

.tone-success .notice-panel__marker {
  color: var(--color-success);
  background: var(--color-success);
}
</style>
