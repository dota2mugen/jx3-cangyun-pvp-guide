<template>
  <div class="tactics-sections">
    <section v-for="section in sections" :key="section.id" class="tactics-section">
      <h2>{{ section.icon }} {{ section.title }}</h2>
      <p v-if="section.intro">{{ section.intro }}</p>

      <template v-if="section.subsections">
        <article v-for="sub in section.subsections" :key="sub.id" class="tactics-subsection">
          <h3>{{ sub.title }}</h3>

          <template v-for="(item, itemIndex) in sub.content" :key="`${item.type}-${itemIndex}`">
            <p v-if="item.type === 'paragraph'" v-html="item.text"></p>
            <p v-else-if="item.type === 'muted'" class="guide-muted" v-html="item.text"></p>
            <MechanismTable v-else-if="item.type === 'mechanism'" :rows="item.rows" />
            <h4 v-else-if="item.type === 'heading'">{{ item.text }}</h4>
            <ol v-else-if="item.type === 'list' && item.ordered">
              <li v-for="(li, i) in item.items" :key="i" v-html="li"></li>
            </ol>
            <ul v-else-if="item.type === 'list'">
              <li v-for="(li, i) in item.items" :key="i" v-html="li"></li>
            </ul>
            <NoticePanel v-else-if="item.type === 'warning'" :title="item.title" tone="warn">
              <p v-html="item.text"></p>
            </NoticePanel>
            <NoticePanel v-else-if="item.type === 'tips'" :title="item.title" tone="success">
              <ul>
                <li v-for="(tip, i) in item.items" :key="i" v-html="tip"></li>
              </ul>
            </NoticePanel>
            <div v-else-if="item.type === 'combo'" class="guide-phase-list">
              <div v-for="(step, i) in item.steps" :key="i" class="guide-phase-step">
                <span class="guide-phase-index">{{ i + 1 }}</span>
                <span v-html="step"></span>
              </div>
            </div>
            <div v-else-if="item.type === 'skillCards'" class="guide-card-grid">
              <div v-for="card in item.cards" :key="card.title" class="guide-block">
                <h4>{{ card.title }}</h4>
                <ul>
                  <li v-for="(cardItem, i) in card.items" :key="i" v-html="cardItem"></li>
                </ul>
              </div>
            </div>
          </template>
        </article>
      </template>

      <ResponsiveTable
        v-if="section.configs"
        caption="不同双 DPS 配置下，苍云的定位和推荐流派会发生明显变化。"
        :columns="configColumns"
        :rows="section.configs"
      />
    </section>
  </div>
</template>

<script setup>
import MechanismTable from './MechanismTable.vue'
import NoticePanel from './NoticePanel.vue'
import ResponsiveTable from './ResponsiveTable.vue'

const configColumns = [
  { key: 'name', label: '配置' },
  { key: 'rating', label: '强度' },
  { key: 'build', label: '建议流派', html: true },
  { key: 'role', label: '定位', html: true }
]

defineProps({
  sections: { type: Array, default: () => [] }
})
</script>

<style scoped>
.tactics-section + .tactics-section {
  margin-top: 12px;
}

.tactics-subsection + .tactics-subsection {
  margin-top: 22px;
}
</style>
