<script setup>
import buildsData from '../../data/cangyun/builds.json'
import PageHero from '../.vitepress/theme/components/PageHero.vue'
import PageIntro from '../.vitepress/theme/components/PageIntro.vue'
import QuickNavCards from '../.vitepress/theme/components/QuickNavCards.vue'
import NoticePanel from '../.vitepress/theme/components/NoticePanel.vue'

const buildCards = Object.values(buildsData.builds).map((build) => ({
  title: build.name,
  description: build.description,
  href: `/cangyun/build-detail?id=${build.id}`,
  icon: build.heroIcon,
  badge: build.tag,
  meta: build.recommended ? '适合第一次接触无界端苍云的玩家，优先从这一套开始。' : '更吃熟练度与细节处理，适合已经熟悉基础控链后再切换。',
  tone: build.recommended ? 'recommend' : ''
}))
</script>

<PageHero
  eyebrow="苍云流派"
  title="流派选择"
  subtitle="从容错率、爆发窗口和控制侧重点选择你的配置"
  summary="无界端苍云的流派差异，本质上是你要把技能槽留给盾墙、盾壁、闪刀还是斩刀。不同选择会直接影响解控数量、攒血怒节奏和击杀方式。"
  meta="新手推荐 · 进阶爆发 · 控制压制"
  badge="入门路线"
  note="建议先从盾壁生存流入手，等你熟悉盾立续免控和战狂窗口后，再尝试爆发流与控制流。"
/>

<PageIntro
  eyebrow="选流派的方法"
  title="先看容错，再看输出上限"
  summary="如果你还不稳定，优先选双解控或更高容错的配置；如果已经能顺畅续免控、找击杀点，再考虑把技能槽换成更高爆发或更强控制。"
  :chips="['盾壁生存流', '闪刀爆发流', '斩刀控制流']"
/>

## 流派卡片

<QuickNavCards :items="buildCards" />

<NoticePanel title="如何进入详情页" tone="info">
  <p>每张卡片都会跳到当前路由下的详情页，并通过查询参数加载对应流派。无效参数会自动回退到默认的新手推荐流派。</p>
</NoticePanel>
