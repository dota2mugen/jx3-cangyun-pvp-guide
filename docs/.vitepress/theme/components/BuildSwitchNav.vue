<template>
  <nav class="build-switch-nav" aria-label="流派切换">
    <a class="build-switch-nav__back" :href="backHref" @click.prevent="go(backHref)">返回流派选择</a>
    <div class="build-switch-nav__pair">
      <a
        v-if="prevBuild"
        class="build-switch-nav__item prev"
        :href="`/cangyun/build-detail?id=${prevBuild.id}`"
        @click.prevent="go(`/cangyun/build-detail?id=${prevBuild.id}`)"
      >
        <span class="build-switch-nav__label">上一流派</span>
        <strong>{{ prevBuild.name }}</strong>
      </a>
      <span v-else class="build-switch-nav__placeholder"></span>
      <a
        v-if="nextBuild"
        class="build-switch-nav__item next"
        :href="`/cangyun/build-detail?id=${nextBuild.id}`"
        @click.prevent="go(`/cangyun/build-detail?id=${nextBuild.id}`)"
      >
        <span class="build-switch-nav__label">下一流派</span>
        <strong>{{ nextBuild.name }}</strong>
      </a>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  backHref: { type: String, default: '/cangyun/builds' },
  prevBuild: { type: Object, default: null },
  nextBuild: { type: Object, default: null }
})

function go(target) {
  if (typeof window !== 'undefined') {
    window.location.assign(target)
  }
}
</script>

<style scoped>
.build-switch-nav {
  display: grid;
  gap: 16px;
  margin: 24px 0;
}

.build-switch-nav__back,
.build-switch-nav__item {
  position: relative;
  display: block;
  padding: 14px 18px;
  border-radius: 18px;
  border: 1px solid var(--sect-frame-color);
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  box-shadow: var(--shadow-sm);
}

.build-switch-nav__back {
  width: fit-content;
  color: var(--color-text);
}

.build-switch-nav__pair {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.build-switch-nav__label {
  display: block;
  margin-bottom: 6px;
  color: var(--color-text-muted);
  font-size: 0.82rem;
}

.build-switch-nav__item strong {
  color: var(--color-ink);
}

.build-switch-nav__item.prev {
  text-align: left;
}

.build-switch-nav__item.next {
  text-align: right;
}

.build-switch-nav__placeholder {
  display: block;
}

@media (max-width: 768px) {
  .build-switch-nav__pair {
    grid-template-columns: 1fr;
  }
}
</style>
