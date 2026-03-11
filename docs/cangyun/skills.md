<script setup>
import skillsData from '../../data/cangyun/skills.json'
import SkillCard from '../.vitepress/theme/components/SkillCard.vue'
import MechanismTable from '../.vitepress/theme/components/MechanismTable.vue'
</script>

# 技能详解

## 核心机制

<MechanismTable
  v-for="mech in skillsData.mechanisms"
  :key="mech.name"
  :title="mech.name"
  :rows="mech.rows"
/>

## 控制机制

<MechanismTable :rows="skillsData.controlMechanism.rows" />

## 盾系技能

<SkillCard v-for="skill in skillsData.shieldSkills" :key="skill.name" :skill="skill" />

## 刀系技能

<SkillCard v-for="skill in skillsData.bladeSkills" :key="skill.name" :skill="skill" />

## 绝招

<SkillCard v-for="skill in skillsData.ultimates" :key="skill.name" :skill="skill" />

## 奇穴选择

<div class="talent-grid">
  <div v-for="talent in skillsData.talents" :key="talent.layer" class="talent-layer">
    <h4>第{{ talent.layer }}</h4>
    <div v-for="opt in talent.options" :key="opt.name" class="talent-option" :class="{ recommend: opt.recommend }">
      <strong>{{ opt.name }}</strong>
      <span>{{ opt.desc }}</span>
      <span v-if="opt.recommend" class="recommend-badge">推荐</span>
      <span v-if="opt.note" class="talent-note">{{ opt.note }}</span>
    </div>
  </div>
</div>

## CD一览表

| 技能 | 基础CD | 秘籍效果 |
|------|--------|----------|
| <template v-for="row in skillsData.cdTable" :key="row.skill">{{ row.skill }} \| {{ row.base }} \| {{ row.withBook }}<br /></template> |

<style scoped>
.talent-grid { display: grid; gap: 24px; }
.talent-layer { background: var(--color-bg-card); padding: 16px; border-radius: 8px; }
.talent-layer h4 { margin: 0 0 12px 0; }
.talent-option {
  padding: 12px;
  background: var(--color-bg-card-alt);
  border-radius: 6px;
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.talent-option.recommend { border-left: 3px solid var(--color-primary); }
.talent-option strong { color: var(--color-primary); }
.recommend-badge {
  background: var(--color-primary);
  color: #000;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}
.talent-note { color: var(--color-text-muted); font-size: 0.85rem; width: 100%; }
</style>