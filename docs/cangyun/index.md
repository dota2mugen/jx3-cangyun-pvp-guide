<script setup>
import indexData from '../../data/cangyun/index.json'
import ProsConsCard from '../.vitepress/theme/components/ProsConsCard.vue'
import MechanismTable from '../.vitepress/theme/components/MechanismTable.vue'
</script>

# {{ indexData.name }}

{{ indexData.tagline }}

<span class="position-tag">{{ indexData.position }}</span>

## 门派简介

{{ indexData.intro.description }}

<ProsConsCard :pros="indexData.intro.pros" :cons="indexData.intro.cons" />

## 核心机制

<MechanismTable
  v-for="mech in indexData.coreMechanisms"
  :key="mech.name"
  :title="mech.name"
  :rows="[{ label: '效果', content: mech.desc }]"
/>

## 属性优先级

<div class="stats-list">
  <div v-for="stat in indexData.stats.priority" :key="stat.name" class="stat-item">
    <strong>{{ stat.name }}</strong>
    <span>{{ stat.desc }}</span>
  </div>
</div>

<style scoped>
.position-tag {
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-bg-card-alt);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}
.stats-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.stat-item {
  padding: 12px;
  background: var(--color-bg-card);
  border-radius: 8px;
}
.stat-item strong { color: var(--color-primary); margin-right: 12px; }
</style>