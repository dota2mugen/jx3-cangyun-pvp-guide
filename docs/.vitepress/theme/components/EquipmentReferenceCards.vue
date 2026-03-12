<template>
  <div class="equipment-reference-grid">
    <article
      v-for="item in items"
      :key="item.title"
      class="equipment-reference-card"
      :class="item.tone ? `tone-${item.tone}` : ''"
    >
      <button
        type="button"
        class="equipment-reference-card__media"
        :aria-label="`查看${item.shortName || item.title}原图`"
        @click="openPreview(item)"
      >
        <img :src="item.image" :alt="item.imageAlt || item.title" loading="lazy">
        <span class="equipment-reference-card__zoom">点击查看原图</span>
      </button>
      <div class="equipment-reference-card__body">
        <h3>{{ item.title }}</h3>
        <p class="equipment-reference-card__gems">
          <span>五彩石</span>
          <strong>{{ item.gems }}</strong>
        </p>
        <p>{{ item.summary }}</p>
        <p class="equipment-reference-card__detail">{{ item.detail }}</p>
      </div>
    </article>
  </div>

  <Teleport to="body">
    <div
      v-if="previewImage"
      class="equipment-reference-preview"
      role="dialog"
      aria-modal="true"
      :aria-label="`${previewImage.title}原图预览`"
      @click.self="closePreview"
    >
      <button
        type="button"
        class="equipment-reference-preview__close"
        aria-label="关闭原图预览"
        @click="closePreview"
      >
        ×
      </button>
      <figure class="equipment-reference-preview__figure">
        <img :src="previewImage.src" :alt="previewImage.alt">
        <figcaption>{{ previewImage.title }}</figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  items: { type: Array, default: () => [] }
})

const previewImage = ref(null)

function openPreview(item) {
  previewImage.value = {
    src: item.image,
    alt: item.imageAlt || item.title,
    title: item.title
  }
}

function closePreview() {
  previewImage.value = null
}

function handleKeydown(event) {
  if (event.key === 'Escape' && previewImage.value) {
    closePreview()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.equipment-reference-grid {
  display: grid;
  gap: 20px;
  margin: 24px 0;
}

.equipment-reference-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(240px, 360px) minmax(0, 1fr);
  gap: 20px;
  padding: 20px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--sect-frame-color);
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  box-shadow: var(--shadow-md);
}

.equipment-reference-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.2;
  pointer-events: none;
}

.equipment-reference-card > * {
  position: relative;
  z-index: 1;
}

.equipment-reference-card__media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  padding: 16px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(100, 83, 53, 0.14);
  background: rgba(255, 250, 242, 0.42);
  cursor: zoom-in;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.equipment-reference-card__media:hover,
.equipment-reference-card__media:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(201, 162, 39, 0.3);
  box-shadow: 0 18px 40px rgba(52, 39, 20, 0.14);
}

.equipment-reference-card__media:focus-visible {
  outline: 2px solid rgba(201, 162, 39, 0.5);
  outline-offset: 3px;
}

.equipment-reference-card__media img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 360px;
  object-fit: contain;
  object-position: center;
  box-shadow: 0 16px 32px rgba(27, 20, 11, 0.12);
}

.equipment-reference-card__zoom {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(10, 12, 16, 0.74);
  color: rgba(255, 250, 242, 0.92);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

.equipment-reference-card__body h3 {
  margin: 0 0 12px;
}

.equipment-reference-card__gems {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0 0 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 250, 242, 0.42);
  border: 1px solid rgba(100, 83, 53, 0.12);
}

.equipment-reference-card__gems span {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.equipment-reference-card__gems strong {
  color: var(--color-primary);
}

.equipment-reference-card__detail {
  color: var(--color-text-muted);
}

.tone-aggressive {
  border-color: rgba(161, 75, 69, 0.24);
}

.tone-stable {
  border-color: rgba(85, 127, 174, 0.24);
}

.equipment-reference-preview {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 28px 16px;
  background: rgba(10, 12, 16, 0.82);
  backdrop-filter: blur(8px);
}

.equipment-reference-preview__figure {
  position: relative;
  margin: 0;
  display: grid;
  gap: 12px;
  max-width: min(1120px, calc(100vw - 32px));
  max-height: calc(100vh - 56px);
  padding: 18px;
  border-radius: 24px;
  border: 1px solid rgba(255, 250, 242, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.06), rgba(255, 250, 242, 0.02)),
    rgba(10, 12, 16, 0.95);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.32);
}

.equipment-reference-preview__figure img {
  display: block;
  max-width: min(1080px, calc(100vw - 68px));
  max-height: calc(100vh - 150px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
}

.equipment-reference-preview__figure figcaption {
  color: rgba(255, 250, 242, 0.82);
  text-align: center;
}

.equipment-reference-preview__close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 1;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 250, 242, 0.14);
  background: rgba(10, 12, 16, 0.82);
  color: rgba(255, 250, 242, 0.92);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}

@media (max-width: 860px) {
  .equipment-reference-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .equipment-reference-card__media {
    min-height: 180px;
    padding: 12px;
  }

  .equipment-reference-card__media img {
    max-height: 280px;
  }

  .equipment-reference-preview__figure {
    padding: 12px;
  }

  .equipment-reference-preview__figure img {
    max-width: calc(100vw - 56px);
    max-height: calc(100vh - 140px);
  }
}
</style>
