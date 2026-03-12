<script setup>
import equipmentData from '../../data/cangyun/equipment.json'
import PageHero from '../.vitepress/theme/components/PageHero.vue'
import PageIntro from '../.vitepress/theme/components/PageIntro.vue'
import ResponsiveTable from '../.vitepress/theme/components/ResponsiveTable.vue'
import NoticePanel from '../.vitepress/theme/components/NoticePanel.vue'
import EquipmentReferenceCards from '../.vitepress/theme/components/EquipmentReferenceCards.vue'

const statsPriorityColumns = [
  { key: 'rank', label: '优先级' },
  { key: 'name', label: '属性', html: true },
  { key: 'priority', label: '定位' },
  { key: 'desc', label: '说明' }
]

const statsPriorityRows = equipmentData.statsPriority.map((stat) => ({
  rank: stat.rank,
  name: `${stat.icon} ${stat.name}`,
  priority: stat.priority,
  desc: stat.desc
}))

const ratioColumns = [
  { key: 'stat', label: '属性' },
  { key: 'beginner', label: '新手' },
  { key: 'advanced', label: '进阶' },
  { key: 'endgame', label: '毕业' }
]

const buildSetColumns = [
  { key: 'slot', label: '部位' },
  { key: 'name', label: '装备' },
  { key: 'stats', label: '属性' },
  { key: 'gems', label: '五彩石' }
]
</script>

<PageHero
  eyebrow="苍云配装"
  title="配装指南"
  subtitle="属性优先级、旧版参考方案、套装效果和毕业方向"
  summary="无界端苍云配装先看你的实战目标：想在控链里打出战狂斩杀，就要兼顾会心爆发和破防穿透；想先把循环打稳，就优先保证自己能站得住、技能能转得开。"
  meta="配装思路 · 参考方案 · 套装效果 · 毕业方向"
  badge="收尾补强"
  note="如果你还在熟悉控链与解控，优先保证生存属性和技能循环，不必过早追求极限毕业词条。"
/>

<PageIntro
  eyebrow="配装思路"
  title="会心负责上限，破防负责下限"
  summary="会心决定你抓住窗口时能不能把战狂伤害抬到上限，破防决定你面对高御劲、高减伤目标时会不会伤害发虚。先按常见对手和自己的手感选方向，再围绕那套思路微调。"
  :chips="['30破45会', '34会40破', '会心/破防取舍']"
/>

## 配装参考

<EquipmentReferenceCards :items="equipmentData.referenceBuilds" />

## 选择建议

<NoticePanel title="怎么选这两套方案" tone="info">
  <ul>
    <li v-for="(item, index) in equipmentData.advice" :key="index">{{ item }}</li>
  </ul>
</NoticePanel>


<style scoped>
.set-card.recommended {
  border-color: rgba(230, 196, 84, 0.22);
}

.set-card__header {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.set-card__header h3 {
  margin: 0;
}

.set-card__badge {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(201, 162, 39, 0.12);
  color: var(--color-primary-light);
  font-size: 0.78rem;
}
</style>
