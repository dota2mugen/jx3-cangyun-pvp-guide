<script setup>
import tacticsData from '../../data/cangyun/tactics.json'
import MechanismTable from '../.vitepress/theme/components/MechanismTable.vue'
</script>

# PVP战术

## 配置说明

<div class="config-notice">
  <h4>{{ tacticsData.config.title }}</h4>
  <p class="config-main"><strong>{{ tacticsData.config.main }}</strong></p>
  <div class="config-reasons">
    <p><strong>选择原因：</strong></p>
    <ul>
      <li v-for="(reason, i) in tacticsData.config.reasons" :key="i">{{ reason }}</li>
    </ul>
  </div>
</div>

<template v-for="section in tacticsData.sections" :key="section.id">

## {{ section.icon }} {{ section.title }}

<p v-if="section.intro">{{ section.intro }}</p>

<template v-if="section.subsections">
  <template v-for="sub in section.subsections" :key="sub.id">
    ### {{ sub.title }}
    <template v-for="item in sub.content" :key="item.type + item.text">
      <p v-if="item.type === 'paragraph'" v-html="item.text"></p>
      <p v-if="item.type === 'muted'" class="muted" v-html="item.text"></p>
      <component v-if="item.type === 'mechanism'" :is="MechanismTable" :rows="item.rows" />
      <h4 v-if="item.type === 'heading'">{{ item.text }}</h4>
      <ul v-if="item.type === 'list'" :class="{ ordered: item.ordered }">
        <li v-for="(li, i) in item.items" :key="i" v-html="li"></li>
      </ul>
      <div v-if="item.type === 'warning'" class="warning-box">
        <strong>{{ item.title }}</strong>
        <p v-html="item.text"></p>
      </div>
      <div v-if="item.type === 'tips'" class="tips-box">
        <h4>{{ item.title }}</h4>
        <ul>
          <li v-for="(tip, i) in item.items" :key="i" v-html="tip"></li>
        </ul>
      </div>
    </template>
  </template>
</template>

<template v-if="section.configs">
  <div v-for="config in section.configs" :key="config.id" class="config-section">
    <h3>{{ config.name }}（{{ config.fullName }}） <span class="rating">{{ config.rating }}★</span></h3>
    <MechanismTable :rows="[{ label: '建议流派', content: config.build }, { label: '配置定位', content: config.role }]" />
  </div>
</template>

</template>

<style scoped>
.config-notice {
  background: var(--color-bg-card);
  padding: 24px;
  border-radius: 8px;
  border-left: 3px solid var(--color-primary);
  margin-bottom: 24px;
}
.config-notice h4 { margin: 0 0 12px 0; }
.config-main { margin: 0 0 16px 0; }
.config-reasons ul { margin: 8px 0 0 0; padding-left: 20px; }
.muted { color: var(--color-text-muted); font-size: 0.9rem; }
.config-section {
  margin: 24px 0;
  padding: 24px;
  background: var(--color-bg-card);
  border-radius: 8px;
}
.config-section h3 { margin: 0 0 16px 0; }
.rating { color: var(--color-primary); font-size: 0.9rem; }
.warning-box {
  background: rgba(217, 74, 74, 0.1);
  border-left: 3px solid #d94a4a;
  padding: 16px;
  border-radius: 0 8px 8px 0;
  margin: 16px 0;
}
.warning-box strong { color: #d94a4a; }
.warning-box p { margin: 8px 0 0 0; }
.tips-box {
  margin-top: 24px;
  padding: 16px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
  border-left: 3px solid var(--color-secondary);
}
.tips-box h4 { margin: 0 0 12px 0; color: var(--color-secondary); }
.tips-box ul { margin: 0; padding-left: 20px; }
.ordered { list-style: decimal; padding-left: 24px; }
</style>