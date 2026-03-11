<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vitepress'
import buildsData from '../../data/cangyun/builds.json'
import BuildSlider from '../.vitepress/theme/components/BuildSlider.vue'

const route = useRoute()
const buildId = computed(() => {
  if (typeof window === 'undefined') return 'shield-barrier'
  const params = new URLSearchParams(window.location.search)
  return params.get('id') || 'shield-barrier'
})

const build = computed(() => buildsData.builds[buildId.value] || buildsData.builds['shield-barrier'])
</script>

# 流派详情

<BuildSlider v-if="build" :build="build" />