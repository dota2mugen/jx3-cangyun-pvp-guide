<template>
  <div class="sect-card-grid">
    <component
      :is="item.status === 'available' ? 'a' : 'div'"
      v-for="item in items"
      :key="item.id"
      :href="item.status === 'available' ? item.path : undefined"
      class="sect-card"
      :class="[`accent-${item.accent}`, `status-${item.status}`]"
    >
      <div class="sect-card__header">
        <p class="sect-card__title">{{ item.name }}</p>
        <span class="sect-card__status">{{ statusMap[item.status] ?? item.status }}</span>
      </div>
      <p class="sect-card__subtitle">{{ item.subtitle }}</p>
      <p class="sect-card__summary">{{ item.summary }}</p>
    </component>
  </div>
</template>

<script setup>
const statusMap = {
  available: '已开放',
  planned: '规划中'
}

defineProps({
  items: { type: Array, default: () => [] }
})
</script>

<style scoped>
.sect-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  margin: 24px 0 36px;
}

.sect-card {
  position: relative;
  display: block;
  padding: 24px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(120, 93, 31, 0.16);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.04) 34%, rgba(120, 93, 31, 0.05) 100%),
    var(--color-bg-card);
  box-shadow: var(--shadow-md);
  transition: transform 0.26s ease, border-color 0.26s ease, box-shadow 0.26s ease;
}

.sect-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(120, 104, 84, 0.05) 0 1px, transparent 1px 5px),
    repeating-linear-gradient(90deg, rgba(120, 104, 84, 0.04) 0 1px, transparent 1px 6px);
  opacity: 0.42;
  pointer-events: none;
}

.sect-card::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0.6;
}

.sect-card:hover {
  transform: translateY(-4px);
  border-color: rgba(120, 93, 31, 0.24);
  box-shadow: var(--shadow-lg);
}

.sect-card.status-planned {
  opacity: 0.82;
}

.sect-card.status-planned:hover {
  transform: none;
}

.sect-card__header,
.sect-card__subtitle,
.sect-card__summary {
  position: relative;
  z-index: 1;
}

.sect-card__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.sect-card__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.9rem;
  color: var(--color-primary);
}

.sect-card__status {
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
  color: var(--color-text-muted);
  font-size: 0.8rem;
}

.sect-card__subtitle {
  margin: 10px 0 0;
  color: var(--color-text-muted);
  letter-spacing: 0.16em;
}

.sect-card__summary {
  margin: 16px 0 0;
  color: var(--color-text);
}

.accent-shield {
  color: var(--color-secondary);
}

.accent-horse {
  color: #b66a36;
}

.accent-sword {
  color: #6c8cb5;
}
</style>
