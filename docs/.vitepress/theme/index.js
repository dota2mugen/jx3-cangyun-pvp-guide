import { h } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const route = useRoute()
    return h(DefaultTheme.Layout, {
      'data-sect': getSectId(route.path)
    })
  }
}

function getSectId(path) {
  if (path === '/' || !path) return ''
  const match = path.match(/^\/(\w+)/)
  const firstSegment = match ? match[1] : ''
  if (firstSegment === 'mechanics') return ''
  return firstSegment
}