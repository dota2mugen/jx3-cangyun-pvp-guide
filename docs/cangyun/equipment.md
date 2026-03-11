<script setup>
import equipmentData from '../../data/cangyun/equipment.json'
</script>

# 配装指南

## 属性优先级

<div class="stats-priority">
  <div v-for="stat in equipmentData.statsPriority" :key="stat.rank" class="stat-row">
    <span class="rank">{{ stat.rank }}</span>
    <span class="icon">{{ stat.icon }}</span>
    <div class="stat-info">
      <strong>{{ stat.name }}</strong>
      <span>{{ stat.desc }}</span>
      <span class="priority-tag">{{ stat.priority }}</span>
    </div>
  </div>
</div>

## 属性配比推荐

| 属性 | 新手 | 进阶 | 毕业 |
|------|------|------|------|
| <template v-for="row in equipmentData.statsRatio" :key="row.stat">{{ row.stat }} \| {{ row.beginner }} \| {{ row.advanced }} \| {{ row.endgame }}<br /></template> |

## 套装效果

<div class="set-effects">
  <div v-for="set in equipmentData.setEffects" :key="set.name" class="set-card" :class="{ recommended: set.recommended }">
    <h4>{{ set.name }} <span v-if="set.recommended" class="rec-badge">推荐</span></h4>
    <div v-for="effect in set.effects" :key="effect.pieces" class="effect">
      <span class="pieces">{{ effect.pieces }}件：</span>
      <span>{{ effect.effect }}</span>
    </div>
    <p class="set-desc">{{ set.desc }}</p>
  </div>
</div>

## 毕业配装方案

<div class="build-sets">
  <div v-for="buildSet in equipmentData.buildSets" :key="buildSet.name" class="build-set">
    <h4>{{ buildSet.name }}</h4>
    <table>
      <thead>
        <tr><th>部位</th><th>装备</th><th>属性</th><th>五彩石</th></tr>
      </thead>
      <tbody>
        <tr v-for="item in buildSet.items" :key="item.slot">
          <td>{{ item.slot }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.stats }}</td>
          <td>{{ item.gems }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## 每日必做

<ul class="daily-tasks">
  <li v-for="(task, i) in equipmentData.dailyTasks" :key="i">{{ task }}</li>
</ul>

<style scoped>
.stats-priority { display: flex; flex-direction: column; gap: 12px; }
.stat-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: var(--color-bg-card);
  border-radius: 8px;
}
.stat-row .rank {
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.stat-row .icon { font-size: 1.5rem; }
.stat-info { display: flex; flex-direction: column; gap: 4px; }
.stat-info strong { color: var(--color-primary); }
.priority-tag {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
.set-effects { display: grid; gap: 16px; margin: 24px 0; }
.set-card {
  background: var(--color-bg-card);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}
.set-card.recommended { border-color: var(--color-primary); }
.set-card h4 { margin: 0 0 12px 0; }
.rec-badge {
  background: var(--color-primary);
  color: #000;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-left: 8px;
}
.effect { margin: 8px 0; }
.pieces { color: var(--color-text-muted); }
.set-desc { margin-top: 12px; color: var(--color-text-muted); font-size: 0.9rem; }
.build-sets { display: flex; flex-direction: column; gap: 24px; }
.build-set {
  background: var(--color-bg-card);
  padding: 16px;
  border-radius: 8px;
}
.build-set h4 { margin: 0 0 16px 0; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 8px; text-align: left; border-bottom: 1px solid var(--color-border); }
th { color: var(--color-text-muted); font-weight: 400; }
.daily-tasks { padding-left: 20px; }
.daily-tasks li { margin: 8px 0; }
</style>