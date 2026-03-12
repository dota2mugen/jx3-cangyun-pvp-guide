<script setup>
import tacticsData from '../../data/cangyun/tactics.json'
import PageHero from '../.vitepress/theme/components/PageHero.vue'
import PageIntro from '../.vitepress/theme/components/PageIntro.vue'
import NoticePanel from '../.vitepress/theme/components/NoticePanel.vue'
import TacticsSections from '../.vitepress/theme/components/TacticsSections.vue'
</script>

<PageHero
  eyebrow="苍云战术"
  title="PVP战术"
  subtitle="33 抢先手、控链衔接、减疗压制与防守细节"
  summary="战术页不是背固定连招，而是把先手、击杀点和防守拆成可复用的判断逻辑。你要知道什么时候强开，什么时候拖技能，什么时候切目标。"
  meta="抢先手 · 击杀剧本 · 续免控 · 配置思路"
  badge="实战核心"
  note="这页默认基于盾飞 + 盾墙配置展开。"
/>

<PageIntro
  eyebrow="先看整体"
  title="苍云的战术目标"
  summary="苍云在 33 里靠高频控制、封轻功和战狂减疗压住节奏。打进攻时要抢先手，打防守时要靠盾立和位移续命，然后等下一波控链再反压。"
  :chips="['先手', '控链', '战狂减疗', '续免控']"
/>

<NoticePanel :title="tacticsData.config.title" tone="info">
  <p><strong>{{ tacticsData.config.main }}</strong></p>
  <ul>
    <li v-for="(reason, i) in tacticsData.config.reasons" :key="i">{{ reason }}</li>
  </ul>
</NoticePanel>

<TacticsSections :sections="tacticsData.sections" />
