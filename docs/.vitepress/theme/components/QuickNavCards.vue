<template>
  <div class="quick-nav-grid">
    <component
      :is="item.disabled ? 'div' : 'a'"
      v-for="item in items"
      :key="item.title"
      :href="item.disabled ? undefined : item.href"
      class="quick-nav-card"
      :class="[item.disabled ? 'is-disabled' : '', item.tone ? `tone-${item.tone}` : '']"
    >
      <span class="quick-nav-card__sect-ornament" aria-hidden="true"></span>
      <div class="quick-nav-card__top">
        <span v-if="item.icon" class="quick-nav-card__icon">{{ item.icon }}</span>
        <span v-if="item.badge" class="quick-nav-card__badge">{{ item.badge }}</span>
      </div>
      <h3>{{ item.title }}</h3>
      <p class="quick-nav-card__desc">{{ item.description }}</p>
      <p v-if="item.meta" class="quick-nav-card__meta" v-html="item.meta"></p>
    </component>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
})
</script>

<style scoped>
.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin: 24px 0;
}

.quick-nav-card {
  position: relative;
  display: block;
  min-height: 100%;
  padding: 22px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--sect-frame-color);
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  box-shadow: var(--shadow-md);
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.quick-nav-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -18%;
  width: 38%;
  height: 100%;
  background: var(--sect-blade);
  opacity: 0.18;
  mix-blend-mode: screen;
  pointer-events: none;
}

.quick-nav-card:hover {
  transform: translateY(-4px);
  border-color: rgba(120, 93, 31, 0.28);
  box-shadow: var(--shadow-lg);
}

.quick-nav-card.is-disabled {
  opacity: 0.7;
  cursor: default;
}

.quick-nav-card.is-disabled:hover {
  transform: none;
}

.quick-nav-card.tone-recommend {
  border-color: rgba(137, 105, 20, 0.28);
}

.quick-nav-card__sect-ornament {
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.45;
  pointer-events: none;
}

.quick-nav-card__top,
.quick-nav-card h3,
.quick-nav-card__desc,
.quick-nav-card__meta {
  position: relative;
  z-index: 1;
}

.quick-nav-card__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 14px;
}

.quick-nav-card__icon {
  font-size: 1.6rem;
  line-height: 1;
}

.quick-nav-card__badge {
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--sect-badge-bg);
  border: 1px solid var(--sect-badge-border);
  color: var(--color-primary-light);
  font-size: 0.8rem;
}

.quick-nav-card h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-ink);
}

.quick-nav-card__desc {
  margin: 10px 0 0;
  color: var(--color-text);
}

.quick-nav-card__meta {
  margin: 12px 0 0;
  color: var(--color-text-muted);
  font-size: 0.92rem;
}
</style>
