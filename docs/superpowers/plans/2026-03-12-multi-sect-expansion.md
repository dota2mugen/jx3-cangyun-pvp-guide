# 剑网三攻略网站全门派扩展实施计划

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将单门派(苍云)纯静态HTML攻略站迁移至VitePress，支持全门派扩展。

**Architecture:** VitePress静态站点生成 + Vue3组件化 + JSON数据驱动 + CSS变量主题系统。数据按门派拆分为5个JSON文件按需加载，组件复用于各门派页面。

**Tech Stack:** VitePress, Vue 3, Markdown, JSON, CSS Variables

---

## Chunk 1: 项目初始化与目录结构

### Task 1: 初始化VitePress项目

**Files:**
- Create: `package.json`
- Create: `.vitepress/config.js`
- Create: `.gitignore`

- [ ] **Step 1: 创建package.json**

```json
{
  "name": "jx3-pvp-guide",
  "version": "2.0.0",
  "description": "剑网三无界端全门派PVP攻略",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.5.0"
  }
}
```

- [ ] **Step 2: 创建VitePress基础配置**

```javascript
// .vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '剑网三无界端PVP攻略',
  description: '剑网三无界端全门派PVP新手攻略',
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;600&display=swap', rel: 'stylesheet' }]
  ],
  
  themeConfig: {
    nav: [
      { text: '门派选择', link: '/' },
      { text: '通用机制', link: '/mechanics' }
    ],
    
    sidebar: {
      '/cangyun/': [
        {
          text: '苍云',
          items: [
            { text: '首页', link: '/cangyun/' },
            { text: '技能详解', link: '/cangyun/skills' },
            { text: '流派选择', link: '/cangyun/builds' },
            { text: 'PVP战术', link: '/cangyun/tactics' },
            { text: '配装指南', link: '/cangyun/equipment' }
          ]
        }
      ]
    },
    
    footer: {
      message: '攻略内容仅供参考，实际游戏内容以官方版本为准',
      copyright: '剑网三无界端PVP攻略 v2.0'
    }
  }
})
```

- [ ] **Step 3: 创建.gitignore**

```
node_modules/
.vitepress/dist/
.vitepress/cache/
```

- [ ] **Step 4: 创建docs目录结构**

Run: `mkdir -p docs/.vitepress/theme/styles docs/.vitepress/theme/components/sect/cangyun docs/cangyun data/cangyun data/shared`

Expected: 目录创建成功

- [ ] **Step 5: 安装依赖**

Run: `npm install`

Expected: 安装成功

- [ ] **Step 6: Commit**

```bash
git add package.json .gitignore .vitepress/
git commit -m "feat: init vitepress project"
```

---

### Task 2: 创建主题入口文件

**Files:**
- Create: `docs/.vitepress/theme/index.js`
- Create: `docs/.vitepress/theme/styles/vars.css`
- Create: `docs/.vitepress/theme/styles/custom.css`

- [ ] **Step 1: 创建主题入口**

```javascript
// docs/.vitepress/theme/index.js
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
```

- [ ] **Step 2: 创建CSS变量文件**

```css
/* docs/.vitepress/theme/styles/vars.css */

:root {
  --color-bg: #0a0c10;
  --color-bg-card: #151820;
  --color-bg-card-alt: #1a1e28;
  --color-text: #e8e4dc;
  --color-text-muted: #9a9590;
  --color-border: #2a2e38;
  --color-primary: #c9a227;
  --color-primary-light: #e6c454;
  --color-accent: #8b4513;
  --color-secondary: #4a90d9;
  --color-blade: #d94a4a;
  
  --font-display: 'Ma Shan Zheng', 'STKaiti', 'KaiTi', serif;
  --font-body: 'Noto Serif SC', 'SimSun', serif;
  
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.5);
}

[data-sect="cangyun"] {
  --color-primary: #c9a227;
  --color-secondary: #4a90d9;
  --color-accent: #d94a4a;
  --hero-gradient: linear-gradient(135deg, #1a1c22 0%, #0d1117 100%);
}

[data-sect="tiance"] {
  --color-primary: #c0392b;
  --color-secondary: #e67e22;
  --color-accent: #3498db;
  --hero-gradient: linear-gradient(135deg, #1a1412 0%, #0d0a09 100%);
}
```

- [ ] **Step 3: 创建自定义样式文件**

```css
/* docs/.vitepress/theme/styles/custom.css */

:root {
  --vp-c-bg: var(--color-bg);
  --vp-c-bg-elv: var(--color-bg-card);
  --vp-c-text-1: var(--color-text);
  --vp-c-text-2: var(--color-text-muted);
  --vp-c-border: var(--color-border);
  --vp-c-brand-1: var(--color-primary);
  --vp-c-brand-2: var(--color-primary-light);
  --vp-font-family-base: var(--font-body);
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.8;
}

h1, h2, h3 { font-family: var(--font-display); color: var(--color-primary); }

a { color: var(--color-primary); text-decoration: none; }
a:hover { color: var(--color-primary-light); }
```

- [ ] **Step 4: 验证主题加载**

Run: `npm run docs:dev`

Expected: 服务启动，无报错

- [ ] **Step 5: Commit**

```bash
git add docs/.vitepress/theme/
git commit -m "feat: add theme entry and css variables"
```

---

## Chunk 2: 数据迁移

### Task 3: 迁移门派基础信息数据

**Files:**
- Create: `data/cangyun/index.json`

- [ ] **Step 1: 创建门派基础信息JSON**

（从原项目数据提取，创建JSON文件）

- [ ] **Step 2: 验证JSON格式**

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('data/cangyun/index.json', 'utf8')).name)"`

Expected: 输出 "苍云"

- [ ] **Step 3: Commit**

```bash
git add data/cangyun/index.json
git commit -m "feat: add cangyun base info data"
```

---

### Task 4: 迁移技能数据

**Files:**
- Create: `data/cangyun/skills.json`

- [ ] **Step 1: 创建技能JSON文件**

（从 `data/skills-data.js` 转换为JSON格式）

- [ ] **Step 2: 验证JSON格式**

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('data/cangyun/skills.json', 'utf8')).shieldSkills[0].name)"`

Expected: 输出 "盾猛"

- [ ] **Step 3: Commit**

```bash
git add data/cangyun/skills.json
git commit -m "feat: add cangyun skills data"
```

---

### Task 5: 迁移流派数据

**Files:**
- Create: `data/cangyun/builds.json`

- [ ] **Step 1: 创建流派JSON文件**

（从 `data/build-data.js` 转换为JSON格式，包含完整slides数据）

- [ ] **Step 2: 验证JSON格式**

Run: `node -e "console.log(Object.keys(JSON.parse(require('fs').readFileSync('data/cangyun/builds.json', 'utf8')).builds))"`

Expected: 输出 ['shield-barrier', 'shield-wall-burst', 'shield-wall-control', 'pure-support']

- [ ] **Step 3: Commit**

```bash
git add data/cangyun/builds.json
git commit -m "feat: add cangyun builds data"
```

---

### Task 6: 迁移战术数据

**Files:**
- Create: `data/cangyun/tactics.json`

- [ ] **Step 1: 创建战术JSON文件**

（从 `data/tactics-data.js` 转换为JSON格式）

- [ ] **Step 2: 验证JSON格式**

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('data/cangyun/tactics.json', 'utf8')).config.title)"`

Expected: 输出 "本攻略基于以下配置"

- [ ] **Step 3: Commit**

```bash
git add data/cangyun/tactics.json
git commit -m "feat: add cangyun tactics data"
```

---

### Task 7: 迁移配装数据

**Files:**
- Create: `data/cangyun/equipment.json`

- [ ] **Step 1: 创建配装JSON文件**

（从 `data/equipment-data.js` 转换为JSON格式）

- [ ] **Step 2: 验证JSON格式**

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('data/cangyun/equipment.json', 'utf8')).statsPriority[0].name)"`

Expected: 输出 "攻击力"

- [ ] **Step 3: Commit**

```bash
git add data/cangyun/equipment.json
git commit -m "feat: add cangyun equipment data"
```

---

## Chunk 3: Vue组件开发

### Task 8: 创建SkillCard组件

**Files:**
- Create: `docs/.vitepress/theme/components/SkillCard.vue`

- [ ] **Step 1: 创建SkillCard.vue**

```vue
<!-- docs/.vitepress/theme/components/SkillCard.vue -->
<template>
  <div class="skill-card" :class="`skill-type-${skill.type}`">
    <div class="skill-header">
      <h3>{{ skill.name }}</h3>
      <span class="skill-cd">{{ skill.cd }}</span>
    </div>
    <div class="skill-segments">
      <div v-for="seg in skill.segments" :key="seg.label" class="segment">
        <span class="label">{{ seg.label }}</span>
        <span class="desc" v-html="seg.desc"></span>
      </div>
    </div>
    <div v-if="skill.books && skill.books.length" class="skill-books">
      <h4>秘籍</h4>
      <p v-for="(book, i) in skill.books" :key="i">
        <span v-html="book.text"></span>
        <span v-if="book.note" class="book-note">（{{ book.note }}）</span>
      </p>
    </div>
    <p v-if="skill.tips" class="skill-tips">{{ skill.tips }}</p>
  </div>
</template>

<script setup>
defineProps({
  skill: { type: Object, required: true }
})
</script>

<style scoped>
.skill-card {
  background: var(--color-bg-card);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--color-border);
  margin-bottom: 16px;
}
.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.skill-header h3 {
  margin: 0;
  font-size: 1.25rem;
}
.skill-cd {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
.skill-type-shield .skill-header h3 { color: var(--color-secondary); }
.skill-type-blade .skill-header h3 { color: var(--color-blade); }
.skill-type-ultimate .skill-header h3 { color: var(--color-primary); }
.segment {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}
.segment .label {
  color: var(--color-text-muted);
  min-width: 40px;
}
.skill-books {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}
.skill-books h4 { margin: 0 0 8px 0; font-size: 1rem; }
.skill-books p { margin: 4px 0; font-size: 0.9rem; }
.book-note { color: var(--color-text-muted); font-size: 0.85rem; }
.skill-tips { margin-top: 12px; color: var(--color-text-muted); font-size: 0.9rem; }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/.vitepress/theme/components/SkillCard.vue
git commit -m "feat: add SkillCard component"
```

---

### Task 9: 创建MechanismTable组件

**Files:**
- Create: `docs/.vitepress/theme/components/MechanismTable.vue`

- [ ] **Step 1: 创建MechanismTable.vue**

```vue
<!-- docs/.vitepress/theme/components/MechanismTable.vue -->
<template>
  <div class="mechanism-section">
    <h3 v-if="title">{{ title }}</h3>
    <div class="mechanism-detail">
      <div v-for="(row, i) in rows" :key="i" class="mechanism-row">
        <div class="mechanism-label" :class="{ warning: row.isWarning }">{{ row.label }}</div>
        <div class="mechanism-content" :class="{ highlight: row.isHighlight }" v-html="row.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  rows: { type: Array, required: true }
})
</script>

<style scoped>
.mechanism-section { margin: 16px 0; }
.mechanism-section h3 { margin-bottom: 12px; }
.mechanism-detail {
  background: var(--color-bg-card);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  overflow: hidden;
}
.mechanism-row {
  display: flex;
  border-bottom: 1px solid var(--color-border);
}
.mechanism-row:last-child { border-bottom: none; }
.mechanism-label {
  background: var(--color-bg-card-alt);
  padding: 12px 16px;
  min-width: 100px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
.mechanism-label.warning { color: #d94a4a; }
.mechanism-content {
  padding: 12px 16px;
  flex: 1;
}
.mechanism-content.highlight { color: var(--color-primary); }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/.vitepress/theme/components/MechanismTable.vue
git commit -m "feat: add MechanismTable component"
```

---

### Task 10: 创建ProsConsCard组件

**Files:**
- Create: `docs/.vitepress/theme/components/ProsConsCard.vue`

- [ ] **Step 1: 创建ProsConsCard.vue**

```vue
<!-- docs/.vitepress/theme/components/ProsConsCard.vue -->
<template>
  <div class="pros-cons-grid">
    <div v-if="pros && pros.length" class="pros-card">
      <h4>优势</h4>
      <ul>
        <li v-for="(item, i) in pros" :key="i" v-html="item"></li>
      </ul>
    </div>
    <div v-if="cons && cons.length" class="cons-card">
      <h4>劣势</h4>
      <ul>
        <li v-for="(item, i) in cons" :key="i" v-html="item"></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pros: { type: Array, default: () => [] },
  cons: { type: Array, default: () => [] }
})
</script>

<style scoped>
.pros-cons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 24px 0;
}
.pros-card, .cons-card {
  background: var(--color-bg-card);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--color-border);
}
.pros-card { border-left: 3px solid #4caf50; }
.cons-card { border-left: 3px solid #f44336; }
.pros-card h4 { color: #4caf50; margin: 0 0 12px 0; }
.cons-card h4 { color: #f44336; margin: 0 0 12px 0; }
ul { margin: 0; padding-left: 20px; }
li { margin: 8px 0; }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/.vitepress/theme/components/ProsConsCard.vue
git commit -m "feat: add ProsConsCard component"
```

---

### Task 11: 创建BuildSlider组件

**Files:**
- Create: `docs/.vitepress/theme/components/BuildSlider.vue`

- [ ] **Step 1: 创建BuildSlider.vue**

```vue
<!-- docs/.vitepress/theme/components/BuildSlider.vue -->
<template>
  <div class="build-slider">
    <div class="slider-header">
      <h2>{{ build.name }}</h2>
      <span class="build-tag" :class="build.tagClass">{{ build.tag }}</span>
    </div>
    <p class="build-desc">{{ build.description }}</p>
    
    <div class="slider-content">
      <div v-for="(slide, index) in build.slides" :key="index" class="slide" v-show="currentSlide === index">
        <h3>{{ slide.title }}</h3>
        
        <!-- 技能与秘籍 -->
        <template v-if="slide.type === 'skills-books'">
          <div class="skills-grid">
            <SkillCard v-for="skill in slide.content.skills" :key="skill.name" :skill="skill" />
          </div>
          <div v-if="slide.content.ultimate" class="ultimate-card">
            <h4>绝招：{{ slide.content.ultimate.name }}</h4>
            <p>{{ slide.content.ultimate.desc }}</p>
          </div>
          <p v-if="slide.content.note" class="slide-note">{{ slide.content.note }}</p>
        </template>
        
        <!-- 奇穴 -->
        <template v-else-if="slide.type === 'talents'">
          <div class="talents-list">
            <div v-for="talent in slide.content.talents" :key="talent.layer" class="talent-item">
              <span class="layer">{{ talent.layer }}</span>
              <span class="pick">→ {{ talent.pick }}</span>
              <span class="reason">{{ talent.reason }}</span>
            </div>
          </div>
        </template>
        
        <!-- 循环 -->
        <template v-else-if="slide.type === 'combo' || slide.type === 'burst'">
          <p class="combo-desc">{{ slide.content.desc }}</p>
          <div v-for="phase in slide.content.phases || [{ name: '', steps: slide.content.steps }]" :key="phase.name" class="phase-block">
            <h4 v-if="phase.name">{{ phase.name }}</h4>
            <div class="combo-steps">
              <template v-for="(step, i) in phase.steps" :key="i">
                <div class="step" :class="{ highlight: step.highlight }">
                  <span class="skill">{{ step.skill }}</span>
                  <span class="effect">{{ step.effect }}</span>
                  <span v-if="step.key" class="key">{{ step.key }}</span>
                </div>
                <span v-if="i < phase.steps.length - 1" class="arrow">→</span>
              </template>
            </div>
          </div>
        </template>
        
        <!-- 注意事项 -->
        <template v-else-if="slide.type === 'tips'">
          <ProsConsCard :pros="slide.content.pros" :cons="slide.content.cons" />
          <div v-if="slide.content.tips" class="tips-box">
            <h4>技巧提示</h4>
            <ul>
              <li v-for="(tip, i) in slide.content.tips" :key="i" v-html="tip"></li>
            </ul>
          </div>
        </template>
      </div>
    </div>
    
    <div class="slider-nav">
      <button class="nav-btn prev" @click="prevSlide" :disabled="currentSlide === 0">上一页</button>
      <div class="dots">
        <span v-for="(_, i) in build.slides" :key="i" class="dot" :class="{ active: currentSlide === i }" @click="currentSlide = i"></span>
      </div>
      <button class="nav-btn next" @click="nextSlide" :disabled="currentSlide === build.slides.length - 1">下一页</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SkillCard from './SkillCard.vue'
import ProsConsCard from './ProsConsCard.vue'

const props = defineProps({
  build: { type: Object, required: true }
})

const currentSlide = ref(0)

function prevSlide() {
  if (currentSlide.value > 0) currentSlide.value--
}

function nextSlide() {
  if (currentSlide.value < props.build.slides.length - 1) currentSlide.value++
}
</script>

<style scoped>
.build-slider {
  background: var(--color-bg-card);
  border-radius: 12px;
  padding: 32px;
  border: 1px solid var(--color-border);
}
.slider-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.slider-header h2 { margin: 0; }
.build-tag {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
}
.build-tag.beginner { background: #4caf50; color: #fff; }
.build-tag.advanced { background: #ff9800; color: #fff; }
.build-tag.support { background: #2196f3; color: #fff; }
.build-desc { color: var(--color-text-muted); margin-bottom: 24px; }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.ultimate-card {
  margin-top: 24px;
  padding: 16px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
  border-left: 3px solid var(--color-primary);
}
.talents-list { display: flex; flex-direction: column; gap: 12px; }
.talent-item {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
}
.talent-item .layer { color: var(--color-text-muted); min-width: 60px; }
.talent-item .pick { color: var(--color-primary); font-weight: 600; }
.talent-item .reason { color: var(--color-text-muted); font-size: 0.9rem; }
.combo-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.step {
  background: var(--color-bg-card-alt);
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step.highlight {
  border: 1px solid var(--color-primary);
  background: rgba(201, 162, 39, 0.1);
}
.step .skill { font-weight: 600; }
.step .effect { font-size: 0.85rem; color: var(--color-text-muted); }
.step .key { font-size: 0.75rem; color: var(--color-primary); }
.arrow { color: var(--color-text-muted); }
.tips-box {
  margin-top: 24px;
  padding: 16px;
  background: var(--color-bg-card-alt);
  border-radius: 8px;
  border-left: 3px solid var(--color-secondary);
}
.tips-box h4 { margin: 0 0 12px 0; color: var(--color-secondary); }
.slider-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}
.nav-btn {
  padding: 8px 16px;
  background: var(--color-bg-card-alt);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text);
  cursor: pointer;
}
.nav-btn:hover:not(:disabled) { background: var(--color-border); }
.nav-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.dots { display: flex; gap: 8px; }
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-border);
  cursor: pointer;
}
.dot.active { background: var(--color-primary); }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/.vitepress/theme/components/BuildSlider.vue
git commit -m "feat: add BuildSlider component"
```

---

## Chunk 4: 页面迁移

### Task 12: 创建门派选择首页

**Files:**
- Create: `docs/index.md`

- [ ] **Step 1: 创建首页Markdown**

```markdown
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
```

- [ ] **Step 2: 验证首页**

Run: `npm run docs:dev`

Expected: 访问 http://localhost:5173 显示门派选择页面

- [ ] **Step 3: Commit**

```bash
git add docs/index.md
git commit -m "feat: add sect selection homepage"
```

---

### Task 13: 创建苍云首页

**Files:**
- Create: `docs/cangyun/index.md`

- [ ] **Step 1: 创建苍云首页Markdown**

```markdown
<script setup>
import indexData from '../../data/cangyun/index.json'
import ProsConsCard from '../.vitepress/theme/components/ProsConsCard.vue'
import MechanismTable from '../.vitepress/theme/components/MechanismTable.vue'
</script>

# {{ indexData.name }}

{{ indexData.tagline }}

<span class="position-tag">{{ indexData.position }}</span>

## 门派简介

{{ indexData.intro.description }}

<ProsConsCard :pros="indexData.intro.pros" :cons="indexData.intro.cons" />

## 核心机制

<MechanismTable
  v-for="mech in indexData.coreMechanisms"
  :key="mech.name"
  :title="mech.name"
  :rows="[{ label: '效果', content: mech.desc }]"
/>

## 属性优先级

<div class="stats-list">
  <div v-for="stat in indexData.stats.priority" :key="stat.name" class="stat-item">
    <strong>{{ stat.name }}</strong>
    <span>{{ stat.desc }}</span>
  </div>
</div>

<style scoped>
.position-tag {
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-bg-card-alt);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}
.stats-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.stat-item {
  padding: 12px;
  background: var(--color-bg-card);
  border-radius: 8px;
}
.stat-item strong { color: var(--color-primary); margin-right: 12px; }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/cangyun/index.md
git commit -m "feat: add cangyun homepage"
```

---

### Task 14: 创建技能详解页

**Files:**
- Create: `docs/cangyun/skills.md`

- [ ] **Step 1: 创建技能详解页Markdown**

```markdown
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

## 盾系技能

<SkillCard v-for="skill in skillsData.shieldSkills" :key="skill.name" :skill="skill" />

## 刀系技能

<SkillCard v-for="skill in skillsData.bladeSkills" :key="skill.name" :skill="skill" />

## 绝招

<SkillCard v-for="skill in skillsData.ultimates" :key="skill.name" :skill="skill" />

## 奇穴选择

<div class="talent-grid">
  <div v-for="talent in skillsData.talents" :key="talent.layer" class="talent-layer">
    <h4>第{{ talent.layer }}层</h4>
    <div v-for="opt in talent.options" :key="opt.name" class="talent-option" :class="{ recommend: opt.recommend }">
      <strong>{{ opt.name }}</strong>
      <span>{{ opt.desc }}</span>
      <span v-if="opt.recommend" class="recommend-badge">推荐</span>
    </div>
  </div>
</div>

## CD一览表

| 技能 | 基础CD | 秘籍效果 |
|------|--------|----------|
| <span v-for="row in skillsData.cdTable" :key="row.skill">{{ row.skill }} | {{ row.base }} | {{ row.withBook }} |</span>

<style scoped>
.talent-grid { display: grid; gap: 24px; }
.talent-layer { background: var(--color-bg-card); padding: 16px; border-radius: 8px; }
.talent-layer h4 { margin: 0 0 12px 0; }
.talent-option {
  padding: 12px;
  background: var(--color-bg-card-alt);
  border-radius: 6px;
  margin-bottom: 8px;
}
.talent-option.recommend { border-left: 3px solid var(--color-primary); }
.recommend-badge {
  background: var(--color-primary);
  color: #000;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-left: 8px;
}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/cangyun/skills.md
git commit -m "feat: add cangyun skills page"
```

---

### Task 15: 创建流派选择页

**Files:**
- Create: `docs/cangyun/builds.md`

- [ ] **Step 1: 创建流派选择页Markdown**

```markdown
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
```

- [ ] **Step 2: Commit**

```bash
git add docs/cangyun/builds.md
git commit -m "feat: add cangyun builds page"
```

---

### Task 16: 创建流派详情页

**Files:**
- Create: `docs/cangyun/build-detail.md`

- [ ] **Step 1: 创建流派详情页Markdown**

```markdown
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vitepress'
import buildsData from '../../data/cangyun/builds.json'
import BuildSlider from '../.vitepress/theme/components/BuildSlider.vue'

const route = useRoute()
const buildId = computed(() => {
  const params = new URLSearchParams(route.search)
  return params.get('id') || 'shield-barrier'
})

const build = computed(() => buildsData.builds[buildId.value] || buildsData.builds['shield-barrier'])
</script>

# 流派详情

<BuildSlider v-if="build" :build="build" />
```

- [ ] **Step 2: Commit**

```bash
git add docs/cangyun/build-detail.md
git commit -m "feat: add cangyun build detail page"
```

---

### Task 17: 创建PVP战术页

**Files:**
- Create: `docs/cangyun/tactics.md`

- [ ] **Step 1: 创建PVP战术页Markdown**

```markdown
<script setup>
import tacticsData from '../../data/cangyun/tactics.json'
import MechanismTable from '../.vitepress/theme/components/MechanismTable.vue'
</script>

# PVP战术

## 配置说明

<div class="config-notice">
  <h4>{{ tacticsData.config.title }}</h4>
  <p class="config-main"><strong>{{ tacticsData.config.main }}</strong></p>
  <div class="config-reasons">
    <p><strong>选择原因：</strong></p>
    <ul>
      <li v-for="(reason, i) in tacticsData.config.reasons" :key="i">{{ reason }}</li>
    </ul>
  </div>
</div>

<template v-for="section in tacticsData.sections" :key="section.id">

## {{ section.icon }} {{ section.title }}

<p v-if="section.intro">{{ section.intro }}</p>

<template v-if="section.subsections">
  <template v-for="sub in section.subsections" :key="sub.id">
    ### {{ sub.title }}
    <template v-for="item in sub.content" :key="item.type + item.text">
      <p v-if="item.type === 'paragraph'" v-html="item.text"></p>
      <p v-if="item.type === 'muted'" class="muted" v-html="item.text"></p>
      <component v-if="item.type === 'mechanism'" :is="MechanismTable" :rows="item.rows" />
    </template>
  </template>
</template>

<template v-if="section.configs">
  <div v-for="config in section.configs" :key="config.id" class="config-section">
    <h3>{{ config.name }}（{{ config.fullName }}） <span class="rating">{{ config.rating }}★</span></h3>
    <MechaismTable :rows="[{ label: '建议流派', content: config.build }, { label: '配置定位', content: config.role }]" />
  </div>
</template>

</template>

<style scoped>
.config-notice {
  background: var(--color-bg-card);
  padding: 24px;
  border-radius: 8px;
  border-left: 3px solid var(--color-primary);
  margin-bottom: 24px;
}
.config-notice h4 { margin: 0 0 12px 0; }
.config-main { margin: 0 0 16px 0; }
.config-reasons ul { margin: 8px 0 0 0; padding-left: 20px; }
.muted { color: var(--color-text-muted); font-size: 0.9rem; }
.config-section {
  margin: 24px 0;
  padding: 24px;
  background: var(--color-bg-card);
  border-radius: 8px;
}
.config-section h3 { margin: 0 0 16px 0; }
.rating { color: var(--color-primary); font-size: 0.9rem; }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add docs/cangyun/tactics.md
git commit -m "feat: add cangyun tactics page"
```

---

### Task 18: 创建配装指南页

**Files:**
- Create: `docs/cangyun/equipment.md`

- [ ] **Step 1: 创建配装指南页Markdown**

```markdown
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
| <span v-for="row in equipmentData.statsRatio" :key="row.stat">{{ row.stat }} | {{ row.beginner }} | {{ row.advanced }} | {{ row.endgame }} |</span>

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
```

- [ ] **Step 2: Commit**

```bash
git add docs/cangyun/equipment.md
git commit -m "feat: add cangyun equipment page"
```

---

## Chunk 5: 最终验证与清理

### Task 19: 全面测试

**Files:**
- Modify: 各配置文件

- [ ] **Step 1: 构建生产版本**

Run: `npm run docs:build`

Expected: 构建成功，无报错

- [ ] **Step 2: 预览构建结果**

Run: `npm run docs:preview`

Expected: 预览服务启动，所有页面可访问

- [ ] **Step 3: 验证所有页面功能**

手动检查清单：
- [ ] 门派选择首页：卡片点击正常跳转
- [ ] 苍云首页：数据正常加载
- [ ] 技能详解页：技能卡片正常显示
- [ ] 流派选择页：卡片点击跳转正确
- [ ] 流派详情页：PPT切换功能正常
- [ ] PVP战术页：内容正确渲染
- [ ] 配装指南页：表格正常显示

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: complete vitepress migration"
```

---

### Task 20: 更新AGENTS.md

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: 更新AGENTS.md开发命令**

将原有的静态HTML命令替换为VitePress命令：

```markdown
## 开发命令

### 本地预览

```bash
# 开发模式
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 代码检查

```bash
# 无需单独检查，VitePress构建时会检查
```
```

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs: update AGENTS.md for vitepress"
```

---

### Task 21: 清理旧文件

**Files:**
- Delete: 原HTML文件和数据文件（迁移完成后）

- [ ] **Step 1: 确认迁移完成**

确保所有功能在新版本中正常工作

- [ ] **Step 2: 创建备份分支**

Run: `git checkout -b backup/pre-vitepress && git checkout main`

Expected: 备份分支创建成功

- [ ] **Step 3: 删除旧文件**

```bash
rm -rf index.html pages/ css/ js/ data/*.js
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove legacy html files after migration"
```

---

## 执行顺序总结

1. **Chunk 1**: 项目初始化 (Task 1-2)
2. **Chunk 2**: 数据迁移 (Task 3-7)
3. **Chunk 3**: Vue组件开发 (Task 8-11)
4. **Chunk 4**: 页面迁移 (Task 12-18)
5. **Chunk 5**: 验证清理 (Task 19-21)

每完成一个Chunk后进行commit，确保进度可追溯。