# 剑网三攻略网站全门派扩展设计文档

**版本：** v1.0  
**日期：** 2026-03-11  
**状态：** 待审批

---

## 1. 项目背景

### 1.1 当前状态

剑网三无界端苍云PVP攻略网站，纯静态HTML实现，包含：
- 首页（门派简介）
- 技能详解页
- 流派选择页 + 流派详情页（PPT切换）
- PVP战术页
- 配装指南页

数据通过JS变量（`BuildData`, `SkillsData`）驱动，组件通过`components.js`动态渲染。

### 1.2 目标

将单门派攻略站扩展为全门派攻略站，支持：
- 逐步添加新门派（下一个：天策）
- 非开发人员可贡献内容
- 各门派独特视觉风格
- 门派专属交互组件
- PVP通用机制页面

---

## 2. 技术选型

### 2.1 选择方案：VitePress

**原因：**
1. **Markdown友好**：非开发者只需编辑Markdown和JSON
2. **Vue组件支持**：支持门派专属交互组件
3. **主题系统**：方便实现各门派独特配色
4. **零配置构建**：开箱即用的静态站点生成
5. **按需加载数据**：页面只加载当前所需JSON

### 2.2 技术栈

| 技术 | 用途 |
|------|------|
| VitePress | 静态站点生成框架 |
| Vue 3 | 组件化开发 |
| Markdown | 页面内容编写 |
| JSON | 门派数据存储 |
| CSS变量 | 主题配色系统 |

---

## 3. 项目结构

```
攻略/
├── docs/                          # VitePress内容目录
│   ├── index.md                   # 门派选择首页
│   ├── mechanics.md               # PVP通用机制页
│   ├── cangyun/                   # 苍云专区
│   │   ├── index.md               # 苍云首页
│   │   ├── skills.md              # 技能详解
│   │   ├── builds.md              # 流派选择
│   │   ├── build-detail.md        # 流派详情
│   │   ├── tactics.md             # PVP战术
│   │   └── equipment.md           # 配装指南
│   └── tiance/                    # 天策专区
│       └── ...
├── data/                          # 门派数据
│   ├── cangyun/
│   │   ├── index.json             # 门派基础信息
│   │   ├── skills.json            # 技能数据
│   │   ├── builds.json            # 流派配置
│   │   ├── tactics.json           # PVP战术
│   │   └── equipment.json         # 配装数据
│   ├── tiance/
│   │   └── ...
│   └── shared/
│       └── mechanisms.json        # 通用PVP机制
├── .vitepress/
│   ├── config.js                  # VitePress配置
│   └── theme/                     # 自定义主题
│       ├── index.js               # 主题入口
│       ├── styles/
│       │   ├── vars.css           # CSS变量（门派配色）
│       │   └── custom.css         # 自定义样式
│       └── components/            # 通用组件
│           ├── SkillCard.vue
│           ├── BuildSlider.vue
│           ├── MechanismTable.vue
│           ├── ProsConsCard.vue
│           └── sect/              # 门派专属组件
│               ├── cangyun/
│               │   └── ShieldBladeToggle.vue
│               └── tiance/
│                   └── MountChargeMeter.vue
├── package.json
└── README.md
```

---

## 4. 数据结构

### 4.1 门派数据文件拆分

每个门派数据拆分为5个JSON文件，按需加载：

| 文件 | 内容 | 预估大小 |
|------|------|----------|
| `index.json` | 门派名称、定位、主题色、简介 | ~50行 |
| `skills.json` | 技能列表、奇穴、绝招、秘籍 | ~200行 |
| `builds.json` | 各流派配置、循环、爆发 | ~300行 |
| `tactics.json` | 33战术、配置应对 | ~150行 |
| `equipment.json` | 配装推荐、属性优先级 | ~100行 |

### 4.2 数据模型定义

#### index.json（门派基础信息）

```json
{
  "id": "cangyun",
  "name": "苍云",
  "fullName": "玄甲苍云军",
  "tagline": "攻防一体，盾刀双绝",
  "position": "近战 · 控制 · 减疗",
  "theme": {
    "primaryColor": "#c9a227",
    "secondaryColor": "#4a90d9",
    "accentColor": "#d94a4a"
  },
  "intro": {
    "description": "苍云是刀盾切换的近战门派...",
    "pros": ["控制多", "位移技能多", "能持续压制治疗"],
    "cons": ["减伤少", "怕缴械封外", "伤害一般"]
  },
  "coreMechanisms": [
    { "name": "战狂", "desc": "三层血怒触发爆发+减疗" },
    { "name": "盾立", "desc": "盾系技能免控1秒" }
  ]
}
```

#### skills.json（技能数据）

```json
{
  "mechanisms": [
    {
      "name": "血怒",
      "rows": [
        { "label": "获取", "content": "施展盾系技能获得1层..." },
        { "label": "效果", "content": "每层减伤3%+增伤3%" }
      ]
    }
  ],
  "shieldSkills": [
    {
      "name": "盾猛",
      "cd": "CD 18秒",
      "segments": [...],
      "books": [...]
    }
  ],
  "bladeSkills": [...],
  "talents": [...],
  "ultimates": [...]
}
```

#### builds.json（流派数据）

```json
{
  "builds": {
    "shield-barrier": {
      "id": "shield-barrier",
      "name": "盾壁生存流",
      "tag": "新手推荐",
      "description": "盾壁提供解控+护盾+免控...",
      "slides": [...]
    }
  }
}
```

---

## 5. 主题与配色系统

### 5.1 CSS变量设计

```css
/* .vitepress/theme/styles/vars.css */

/* 全局基础变量 */
:root {
  --color-bg: #0a0c10;
  --color-bg-card: #151820;
  --color-text: #e8e4dc;
  --color-text-muted: #9a9590;
  --color-border: #2a2e38;
  --color-primary: #c9a227;
}

/* 苍云主题 */
[data-sect="cangyun"] {
  --color-primary: #c9a227;
  --color-secondary: #4a90d9;
  --color-accent: #d94a4a;
  --hero-gradient: linear-gradient(135deg, #1a1c22 0%, #0d1117 100%);
}

/* 天策主题 */
[data-sect="tiance"] {
  --color-primary: #c0392b;
  --color-secondary: #e67e22;
  --color-accent: #3498db;
  --hero-gradient: linear-gradient(135deg, #1a1412 0%, #0d0a09 100%);
}
```

### 5.2 主题注入逻辑

```javascript
// .vitepress/theme/index.js
import { h, watch } from 'vue'
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
  const match = path.match(/^\/(\w+)/)
  return match && match[1] !== 'mechanics' ? match[1] : ''
}
```

---

## 6. 组件设计

### 6.1 通用组件

| 组件 | 功能 | 使用页面 |
|------|------|----------|
| `SkillCard.vue` | 技能卡片，展示技能信息、CD、秘籍 | skills.md |
| `BuildSlider.vue` | 流派详情幻灯片，PPT切换效果 | build-detail.md |
| `MechanismTable.vue` | 机制表格，展示核心机制 | skills.md, mechanics.md |
| `ProsConsCard.vue` | 优劣势卡片 | 门派首页 |
| `TalentSelect.vue` | 奇穴选择展示 | skills.md |
| `ComboDisplay.vue` | 连招展示 | build-detail.md |

### 6.2 门派专属组件

各门派可创建独特交互组件：

```
components/sect/
├── cangyun/
│   └── ShieldBladeToggle.vue    # 盾刀状态切换示意
├── tiance/
│   └── MountChargeMeter.vue     # 马上/下马状态条
└── qixiu/
    └── DanceStackDisplay.vue    # 剑舞层数展示
```

### 6.3 组件示例

```vue
<!-- SkillCard.vue -->
<template>
  <div class="skill-card" :class="[`skill-type-${skill.type}`]">
    <div class="skill-header">
      <h3>{{ skill.name }}</h3>
      <span class="skill-cd">{{ skill.cd }}</span>
    </div>
    <div class="skill-segments">
      <div v-for="seg in skill.segments" class="segment">
        <span class="label">{{ seg.label }}</span>
        <span class="desc">{{ seg.desc }}</span>
      </div>
    </div>
    <div v-if="skill.books" class="skill-books">
      <h4>秘籍</h4>
      <p v-for="book in skill.books" v-html="book.text"></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skill: { type: Object, required: true }
})
</script>
```

---

## 7. 路由与导航

### 7.1 URL结构

| 页面 | URL |
|------|-----|
| 门派选择首页 | `/` |
| PVP通用机制 | `/mechanics` |
| 苍云首页 | `/cangyun/` |
| 苍云技能详解 | `/cangyun/skills` |
| 苍云流派选择 | `/cangyun/builds` |
| 苍云流派详情 | `/cangyun/build-detail?id=xxx` |
| 天策首页 | `/tiance/` |

### 7.2 导航结构

```
┌─────────────────────────────────────────────┐
│  [门派选择]  苍云  天策                      │  ← 顶级导航
├─────────────────────────────────────────────┤
│  首页  技能详解  流派选择  PVP战术  配装指南  │  ← 门派内导航（侧边栏）
└─────────────────────────────────────────────┘
```

### 7.3 VitePress配置

```javascript
// .vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '剑网三无界端PVP攻略',
  description: '剑网三无界端全门派PVP新手攻略',
  
  themeConfig: {
    nav: [
      { text: '门派选择', link: '/' },
      { text: '通用机制', link: '/mechanics' }
    ],
    
    sidebar: {
      '/cangyun/': [
        { text: '苍云', items: [
          { text: '首页', link: '/cangyun/' },
          { text: '技能详解', link: '/cangyun/skills' },
          { text: '流派选择', link: '/cangyun/builds' },
          { text: 'PVP战术', link: '/cangyun/tactics' },
          { text: '配装指南', link: '/cangyun/equipment' }
        ]}
      ],
      '/tiance/': [
        { text: '天策', items: [
          { text: '首页', link: '/tiance/' },
          { text: '技能详解', link: '/tiance/skills' },
          { text: '流派选择', link: '/tiance/builds' },
          { text: 'PVP战术', link: '/tiance/tactics' },
          { text: '配装指南', link: '/tiance/equipment' }
        ]}
      ]
    }
  }
})
```

---

## 8. 添加新门派流程

### 8.1 步骤清单

| 步骤 | 操作 | 文件/位置 |
|------|------|-----------|
| 1 | 复制门派数据模板 | `data/{sect}/` |
| 2 | 修改门派基础信息 | `data/{sect}/index.json` |
| 3 | 填写技能数据 | `data/{sect}/skills.json` |
| 4 | 填写流派数据 | `data/{sect}/builds.json` |
| 5 | 填写战术数据（可选） | `data/{sect}/tactics.json` |
| 6 | 填写配装数据（可选） | `data/{sect}/equipment.json` |
| 7 | 复制页面目录 | `docs/{sect}/` |
| 8 | 添加主题配色 | `.vitepress/theme/styles/vars.css` |
| 9 | 更新导航配置 | `.vitepress/config.js` |
| 10 | 添加专属组件（可选） | `components/sect/{sect}/` |

### 8.2 面向非开发者的说明

贡献者需要掌握：
- **Markdown基础**：编写页面内容
- **JSON编辑**：填写门派数据
- **文件操作**：复制目录、修改文件

无需掌握：
- Vue组件开发
- CSS样式编写
- 构建配置

---

## 9. 迁移计划

### 9.1 迁移阶段

| 阶段 | 任务 | 预估工时 |
|------|------|----------|
| 1 | 初始化VitePress项目 | 0.5天 |
| 2 | 抽取苍云数据到JSON | 1天 |
| 3 | 创建通用Vue组件 | 1.5天 |
| 4 | 迁移CSS到主题样式 | 0.5天 |
| 5 | 重建苍云Markdown页面 | 1天 |
| 6 | 创建门派选择首页 | 0.5天 |
| 7 | 创建PVP通用机制页 | 0.5天 |
| 8 | 测试与修复 | 0.5天 |

**总计：约6天**

### 9.2 文件迁移映射

| 原文件 | 新位置 |
|--------|--------|
| `index.html` | `docs/cangyun/index.md` |
| `pages/skills.html` | `docs/cangyun/skills.md` |
| `pages/builds.html` | `docs/cangyun/builds.md` |
| `pages/build-detail.html` | `docs/cangyun/build-detail.md` |
| `pages/tactics.html` | `docs/cangyun/tactics.md` |
| `pages/equipment.html` | `docs/cangyun/equipment.md` |
| `data/build-data.js` | `data/cangyun/builds.json` |
| `data/skills-data.js` | `data/cangyun/skills.json` |
| `css/style.css` | `.vitepress/theme/styles/custom.css` |
| `js/components.js` | Vue组件拆分 |

---

## 10. 风险与缓解

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| VitePress学习曲线 | 延迟 | 提前阅读官方文档，预留缓冲时间 |
| 组件迁移遗漏 | 功能缺失 | 对照原页面功能清单逐项检查 |
| 数据转换错误 | 内容丢失 | 保留原文件，迁移后对比验证 |
| 样式兼容问题 | 视觉差异 | 使用CSS变量统一管理，逐页对比 |

---

## 11. 后续扩展

### 11.1 近期计划

- 完成苍云迁移
- 添加天策门派

### 11.2 远期规划

- 更多门派逐步添加
- 移动端适配优化
- 搜索功能增强
- 可能的国际化支持