---
layout: home
---

# 剑网三无界端PVP攻略

选择你的门派，开始PVP之旅。

<div class="sect-grid">

<a href="/cangyun/" class="sect-card">
  <div class="sect-icon">🛡️</div>
  <h3>苍云</h3>
  <p>玄甲苍云军</p>
  <span class="sect-tag">近战 · 控制 · 减疗</span>
</a>

<div class="sect-card coming-soon">
  <div class="sect-icon">🐎</div>
  <h3>天策</h3>
  <p>东都天策府</p>
  <span class="sect-tag">敬请期待</span>
</div>

</div>

<style>
.sect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 48px;
}
.sect-card {
  background: var(--color-bg-card);
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text);
  transition: transform 0.3s, border-color 0.3s;
}
.sect-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}
.sect-card.coming-soon {
  opacity: 0.6;
  cursor: not-allowed;
}
.sect-icon { font-size: 3rem; margin-bottom: 16px; }
.sect-card h3 { margin: 0 0 8px 0; color: var(--color-primary); }
.sect-card p { margin: 0 0 12px 0; color: var(--color-text-muted); }
.sect-tag {
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-bg-card-alt);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
</style>