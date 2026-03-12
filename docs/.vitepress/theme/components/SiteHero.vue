<template>
  <section class="site-hero">
    <div class="site-hero__panel">
      <span v-if="badge" class="site-hero__badge">{{ badge }}</span>
      <p v-if="eyebrow" class="site-hero__eyebrow">{{ eyebrow }}</p>
      <h1 class="site-hero__title">{{ title }}</h1>
      <p v-if="summary" class="site-hero__summary">{{ summary }}</p>
      <p v-if="note" class="site-hero__note">{{ note }}</p>
      <div v-if="chips?.length" class="guide-pills">
        <span v-for="chip in chips" :key="chip" class="guide-pill">{{ chip }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  badge: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  summary: { type: String, default: '' },
  note: { type: String, default: '' },
  chips: { type: Array, default: () => [] }
})
</script>

<style scoped>
.site-hero {
  position: relative;
  margin: 8px 0 40px;
  padding: 72px 28px 38px;
  border-radius: 28px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.04) 32%, rgba(120, 93, 31, 0.06) 100%),
    linear-gradient(135deg, rgba(243, 232, 216, 0.96) 0%, rgba(223, 207, 177, 0.92) 100%);
  border: 1px solid rgba(120, 93, 31, 0.18);
  box-shadow: var(--shadow-lg);
}

.site-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(120, 104, 84, 0.05) 0 1px, transparent 1px 5px),
    repeating-linear-gradient(90deg, rgba(120, 104, 84, 0.04) 0 1px, transparent 1px 6px);
  opacity: 0.66;
  pointer-events: none;
}

.site-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 20%, rgba(63, 49, 33, 0.12), transparent 24%),
    radial-gradient(circle at 84% 72%, rgba(137, 105, 20, 0.16), transparent 18%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.14), transparent 20%, transparent 80%, rgba(69, 58, 44, 0.05));
  pointer-events: none;
}

.site-hero__panel {
  position: relative;
  max-width: 860px;
  z-index: 1;
}

.site-hero__badge {
  display: inline-flex;
  align-items: center;
  margin-bottom: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(137, 105, 20, 0.1);
  border: 1px solid rgba(137, 105, 20, 0.2);
  color: var(--color-primary-light);
  font-size: 0.84rem;
  letter-spacing: 0.08em;
}

.site-hero__eyebrow {
  margin: 0 0 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: 0.76rem;
}

.site-hero__title {
  margin: 0;
  font-size: clamp(2.8rem, 8vw, 5.6rem);
  line-height: 0.98;
  color: var(--color-ink);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.24);
}

.site-hero__summary {
  max-width: 720px;
  margin: 18px 0 0;
  font-size: 1.08rem;
  color: var(--color-text);
}

.site-hero__note {
  max-width: 620px;
  margin: 14px 0 0;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .site-hero {
    padding: 56px 20px 28px;
    border-radius: 22px;
  }

  .site-hero__title {
    font-size: clamp(2.3rem, 16vw, 4.1rem);
  }
}
</style>
