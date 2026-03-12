<script setup>
import skillsData from '../../data/cangyun/skills.json'
import PageHero from '../.vitepress/theme/components/PageHero.vue'
import PageIntro from '../.vitepress/theme/components/PageIntro.vue'
import NoticePanel from '../.vitepress/theme/components/NoticePanel.vue'
import SkillCard from '../.vitepress/theme/components/SkillCard.vue'
import MechanismTable from '../.vitepress/theme/components/MechanismTable.vue'
import ResponsiveTable from '../.vitepress/theme/components/ResponsiveTable.vue'

const cdColumns = [
  { key: 'skill', label: '技能' },
  { key: 'base', label: '基础 CD' },
  { key: 'withBook', label: '秘籍或联动效果' }
]
</script>

<PageHero
  eyebrow="苍云技能"
  title="技能详解"
  subtitle="8 选 4 主动技能、四层奇穴与绝招选择"
  summary="这页先解决三个问题：血怒怎么攒、战狂怎么打、盾立怎么续。理解这三件事后，再去背具体技能和 CD 才有意义。"
  meta="技能机制 · 奇穴选择 · CD 管理"
  badge="基础必读"
  note="推荐先读核心机制，再看盾系与刀系技能，最后回头确认奇穴与 CD 表。"
/>

<PageIntro
  eyebrow="先看这一段"
  title="苍云的 PVP 节奏"
  summary="盾系技能让你活下来并攒出血怒，刀系技能负责把血怒转成爆发和减疗。控制链里打出战狂，才是苍云真正的压制点。"
  :chips="['血怒', '战狂', '盾立', '控制减疗']"
/>

## 核心机制

<MechanismTable
  v-for="mech in skillsData.mechanisms"
  :key="mech.name"
  :title="mech.name"
  :rows="mech.rows"
/>

## 控制机制

<MechanismTable title="控制与减疗" :rows="skillsData.controlMechanism.rows" />

## 盾系技能

<SkillCard v-for="skill in skillsData.shieldSkills" :key="skill.name" :skill="skill" />

## 刀系技能

<SkillCard v-for="skill in skillsData.bladeSkills" :key="skill.name" :skill="skill" />

## 绝招

<SkillCard v-for="skill in skillsData.ultimates" :key="skill.name" :skill="skill" />

## 奇穴选择

<div class="talent-grid">
  <div v-for="talent in skillsData.talents" :key="talent.layer" class="talent-layer">
    <p class="guide-kicker">{{ talent.layer }}</p>
    <div v-for="opt in talent.options" :key="opt.name" class="talent-option" :class="{ recommend: opt.recommend }">
      <div class="talent-option__header">
        <strong>{{ opt.name }}</strong>
        <span v-if="opt.recommend" class="recommend-badge">推荐</span>
      </div>
      <p>{{ opt.desc }}</p>
      <p v-if="opt.note" class="talent-note">{{ opt.note }}</p>
    </div>
  </div>
</div>

## CD一览表

<ResponsiveTable
  caption="移动端会保留横向滚动，不再使用 Markdown 表格模板拼接。"
  :columns="cdColumns"
  :rows="skillsData.cdTable"
/>

<NoticePanel title="练习重点" tone="info">
  <p>如果只背一个实战原则，就记住“控制中打战狂”。控制自带 50% 减疗，战狂再叠 30%，能在短窗口里形成 80% 减疗压制。</p>
</NoticePanel>

<style scoped>
.talent-grid {
  display: grid;
  gap: 18px;
  margin-top: 24px;
}

.talent-layer {
  padding: 22px;
  border-radius: 18px;
  border: 1px solid var(--color-border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent),
    var(--color-bg-card);
}

.talent-option {
  margin-top: 12px;
  padding: 16px;
  background: var(--color-bg-card-alt);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.talent-option.recommend {
  border-color: rgba(230, 196, 84, 0.2);
  box-shadow: inset 0 0 0 1px rgba(230, 196, 84, 0.08);
}

.talent-option__header {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.talent-option__header strong {
  color: var(--color-primary-light);
}

.talent-option p {
  margin: 10px 0 0;
}

.recommend-badge {
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(201, 162, 39, 0.12);
  color: var(--color-primary-light);
  font-size: 0.76rem;
}

.talent-note {
  color: var(--color-text-muted);
}
</style>
