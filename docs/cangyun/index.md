---
sidebar: false
aside: false
---

<script setup>
import indexData from '../../data/cangyun/index.json'
import PageHero from '../.vitepress/theme/components/PageHero.vue'
import PageIntro from '../.vitepress/theme/components/PageIntro.vue'
import QuickNavCards from '../.vitepress/theme/components/QuickNavCards.vue'
import ProsConsCard from '../.vitepress/theme/components/ProsConsCard.vue'
import NoticePanel from '../.vitepress/theme/components/NoticePanel.vue'
</script>

<PageHero
  eyebrow="苍云专区"
  :title="indexData.name"
  :subtitle="indexData.tagline"
  :summary="indexData.intro.description"
  :meta="indexData.position"
  :badge="indexData.hero.badge"
  :note="indexData.hero.note"
/>

<PageIntro
  eyebrow="阅读顺序"
  title="先认门派节奏，再进具体栏目"
  summary="这页只承担苍云门派入口和阅读顺序说明，不再展开详细机制表和属性细节。进入技能、流派、战术、配装四个栏目后，再按专题深入。"
  :chips="['刀盾切换', '战狂爆发', '盾立续免控']"
/>

## 推荐阅读顺序

<QuickNavCards :items="indexData.quickLinks" />

## 门派定位

<ProsConsCard :pros="indexData.intro.pros" :cons="indexData.intro.cons" />

## 上手关键词

<div class="guide-card-grid">
  <article v-for="mech in indexData.coreMechanisms" :key="mech.name" class="guide-block">
    <span class="guide-kicker">核心机制</span>
    <h3>{{ mech.name }}</h3>
    <p>{{ mech.desc }}</p>
  </article>
</div>

<NoticePanel title="无界端阅读提醒" tone="warn">
  <p>本攻略面向无界端，不沿用旗舰端的技能系统记忆方式。请始终按 8 选 4 主动技能、四层奇穴和第四层绝招的体系理解苍云配置。</p>
</NoticePanel>
