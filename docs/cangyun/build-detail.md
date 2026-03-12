<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import buildsData from '../../data/cangyun/builds.json'
import PageHero from '../.vitepress/theme/components/PageHero.vue'
import PageIntro from '../.vitepress/theme/components/PageIntro.vue'
import NoticePanel from '../.vitepress/theme/components/NoticePanel.vue'
import BuildSlider from '../.vitepress/theme/components/BuildSlider.vue'
import BuildSwitchNav from '../.vitepress/theme/components/BuildSwitchNav.vue'

const route = useRoute()
const buildOrder = Object.values(buildsData.builds)

const requestedBuildId = computed(() => {
  route.path

  if (typeof window === 'undefined') {
    return 'shield-barrier'
  }

  const params = new URLSearchParams(window.location.search)
  return params.get('id') || 'shield-barrier'
})

const currentBuildId = computed(() => (
  buildsData.builds[requestedBuildId.value] ? requestedBuildId.value : 'shield-barrier'
))

const build = computed(() => buildsData.builds[currentBuildId.value])
const isFallback = computed(() => requestedBuildId.value !== currentBuildId.value)
const buildIndex = computed(() => buildOrder.findIndex((item) => item.id === currentBuildId.value))
const prevBuild = computed(() => (buildIndex.value > 0 ? buildOrder[buildIndex.value - 1] : null))
const nextBuild = computed(() => (
  buildIndex.value >= 0 && buildIndex.value < buildOrder.length - 1
    ? buildOrder[buildIndex.value + 1]
    : null
))
</script>

<PageHero
  eyebrow="苍云流派详情"
  :title="build.name"
  :subtitle="build.description"
  meta="分页讲解 · 技能与秘籍 · 连招与注意事项"
  :badge="build.tag"
  note="详情页按技能与秘籍、奇穴选择、基础循环、爆发循环、注意事项的顺序展开。"
/>

<PageIntro
  eyebrow="阅读方式"
  title="按顺序把一套流派读完整"
  summary="不要只看爆发连招。先确认技能与秘籍配置，再看奇穴，再把基础循环和爆发循环连在一起理解，最后记住注意事项里的风险点。"
  :chips="[build.name, build.tag]"
/>

<BuildSwitchNav
  back-href="/cangyun/builds"
  :prev-build="prevBuild"
  :next-build="nextBuild"
/>

<NoticePanel v-if="isFallback" title="参数已回退" tone="warn">
  <p>当前链接里的流派参数不存在，页面已自动回退到默认的「盾壁生存流」。你仍然可以从流派选择页重新进入其他配置详情。</p>
</NoticePanel>

<BuildSlider v-if="build" :build="build" />

<BuildSwitchNav
  back-href="/cangyun/builds"
  :prev-build="prevBuild"
  :next-build="nextBuild"
/>
