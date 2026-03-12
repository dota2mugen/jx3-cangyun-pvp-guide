<template>
  <section class="page-hero">
    <div class="page-hero__sect-ornament" aria-hidden="true"></div>
    <div class="page-hero__sect-shield" aria-hidden="true"></div>
    <div class="page-hero__sect-blade" aria-hidden="true"></div>
    <div class="page-hero__content">
      <p v-if="eyebrow" class="page-hero__eyebrow">{{ eyebrow }}</p>
      <div class="page-hero__header">
        <h1>{{ title }}</h1>
        <span v-if="badge" class="page-hero__badge">{{ badge }}</span>
      </div>
      <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
      <p v-if="summary" class="page-hero__summary">{{ summary }}</p>
      <div v-if="meta || note" class="page-hero__meta">
        <span v-if="meta" class="page-hero__meta-chip">{{ meta }}</span>
        <span v-if="note" class="page-hero__note">{{ note }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  summary: { type: String, default: '' },
  meta: { type: String, default: '' },
  badge: { type: String, default: '' },
  note: { type: String, default: '' }
})
</script>

<style scoped>
@keyframes heroBladeSweep {
  0% {
    transform: translateX(-170%) skewX(-18deg);
    opacity: 0;
  }

  12% {
    opacity: 0.32;
  }

  24% {
    transform: translateX(210%) skewX(-18deg);
    opacity: 0;
  }

  100% {
    transform: translateX(210%) skewX(-18deg);
    opacity: 0;
  }
}

.page-hero {
  position: relative;
  margin: 8px 0 28px;
  padding: 36px 30px 28px;
  border-radius: 26px;
  overflow: hidden;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02)),
    var(--hero-gradient);
  border: 1px solid var(--sect-frame-color);
  box-shadow: var(--shadow-lg);
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 20%, rgba(63, 49, 33, 0.12), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.14), transparent 24%, transparent 84%, rgba(69, 58, 44, 0.06));
  pointer-events: none;
}

.page-hero__sect-ornament,
.page-hero__sect-shield,
.page-hero__sect-blade {
  position: absolute;
  pointer-events: none;
}

.page-hero__sect-ornament {
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.62;
}

.page-hero__sect-shield {
  inset: auto 16px 18px auto;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  border: 2px solid var(--sect-shield-rim);
  background: var(--sect-shield);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
}

.page-hero__sect-blade {
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: var(--sect-blade);
  mix-blend-mode: screen;
  opacity: 0.3;
  animation: heroBladeSweep 8.6s ease-in-out infinite;
}

.page-hero__content {
  position: relative;
  z-index: 1;
}

.page-hero__eyebrow {
  margin: 0 0 8px;
  color: var(--color-text-muted);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  font-size: 0.76rem;
}

.page-hero__header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.page-hero__header h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--color-ink);
  text-shadow: 0 4px 16px rgba(255, 255, 255, 0.18);
}

.page-hero__badge {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--sect-badge-border);
  background: var(--sect-badge-bg);
  color: var(--color-primary-light);
  font-size: 0.85rem;
}

.page-hero__subtitle {
  margin: 8px 0 0;
  font-size: 1.05rem;
  color: var(--color-text);
}

.page-hero__summary {
  margin: 14px 0 0;
  max-width: 760px;
  color: var(--color-text);
}

.page-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
}

.page-hero__meta-chip {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(100, 83, 53, 0.14);
  background: rgba(255, 250, 242, 0.36);
  color: var(--color-text-muted);
}

.page-hero__note {
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .page-hero {
    padding: 24px 18px 22px;
    border-radius: 18px;
  }

  .page-hero__sect-shield {
    width: 84px;
    height: 84px;
  }
}
</style>
