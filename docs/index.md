<script setup>
import siteSections from '../data/site-sections.json'
import SiteHero from './.vitepress/theme/components/SiteHero.vue'
import SectCardGrid from './.vitepress/theme/components/SectCardGrid.vue'
import NoticePanel from './.vitepress/theme/components/NoticePanel.vue'
</script>

<SiteHero
  badge="Phase 1 · 苍云现站收口"
  eyebrow="JX3 · 无界端 PVP"
  title="剑网三无界端PVP攻略"
  summary="保留多门派扩展骨架，优先把苍云专区打磨成可持续扩展的攻略基座。当前站点聚焦新手入门、33 实战和无界端特有的 8 选 4 + 四层奇穴体系。"
  note="当前已开放苍云专区。通用机制页与天策专区保留在后续阶段接入，不再通过死链占位。"
  :chips="['深色金属主题', '苍云军武气质', '多门派扩展预留']"
/>

## 门派入口

<SectCardGrid :items="siteSections" />

<NoticePanel title="当前阶段说明" tone="success">
  <p>Phase 1 聚焦苍云现站收口：统一首页、门派首页、子页骨架和响应式表格。未落地页面不再挂到主导航，后续阶段再补通用机制与天策专区。</p>
</NoticePanel>
