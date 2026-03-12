<template>
  <section class="page-intro guide-block">
    <span v-if="eyebrow" class="guide-kicker">{{ eyebrow }}</span>
    <h2 v-if="title" class="page-intro__title">{{ title }}</h2>
    <p v-if="summary" class="page-intro__summary">{{ summary }}</p>
    <div v-if="chips?.length" class="guide-pills">
      <span v-for="chip in chips" :key="chip" class="guide-pill">{{ chip }}</span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, default: '' },
  summary: { type: String, default: '' },
  chips: { type: Array, default: () => [] }
})
</script>

<style scoped>
.page-intro {
  margin: 0 0 24px;
  border-color: var(--sect-frame-color);
}

.page-intro__title {
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--color-ink);
}

.page-intro__summary {
  margin: 12px 0 0;
}
</style>
