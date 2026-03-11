<script setup>
import buildsData from '../../data/cangyun/builds.json'
</script>

# 流派选择

选择适合你的流派，点击查看详细配置。

<div class="builds-grid">
  <a
    v-for="(build, id) in buildsData.builds"
    :key="id"
    :href="`/cangyun/build-detail?id=${id}`"
    class="build-card"
    :class="{ recommended: build.recommended }"
  >
    <div class="build-icon">{{ build.heroIcon }}</div>
    <h3>{{ build.name }}</h3>
    <span class="build-tag" :class="build.tagClass">{{ build.tag }}</span>
    <p class="build-desc">{{ build.description }}</p>
  </a>
</div>

<style scoped>
.builds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}
.build-card {
  background: var(--color-bg-card);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text);
  transition: transform 0.3s, border-color 0.3s;
}
.build-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}
.build-card.recommended { border-color: var(--color-primary); }
.build-icon { font-size: 2.5rem; margin-bottom: 12px; }
.build-card h3 { margin: 0 0 8px 0; color: var(--color-primary); }
.build-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 12px;
}
.build-tag.beginner { background: #4caf50; color: #fff; }
.build-tag.advanced { background: #ff9800; color: #fff; }
.build-tag.support { background: #2196f3; color: #fff; }
.build-desc { color: var(--color-text-muted); font-size: 0.9rem; margin: 0; }
</style>