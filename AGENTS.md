# AGENTS.md - 剑网三无界端PVP攻略网站

本文件为AI编程代理提供代码库工作指南。

## 项目概述

VitePress静态站点，展示剑网三无界端全门派PVP新手攻略。使用Vue 3组件化开发，JSON数据驱动，支持多门派扩展。

**技术栈**: VitePress, Vue 3, Markdown, JSON, CSS Variables

**重要**：攻略面向**无界端**，技能系统与旗舰端有本质区别：
- 8选4主动技能 + 4层奇穴（每层2选1）
- 第4层奇穴决定绝招
- 核心机制：战狂（3层血怒触发爆发+减疗）+ 盾立（盾系技能免控）

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

## 文件组织

```
攻略/
├── docs/                        # VitePress文档目录
│   ├── .vitepress/
│   │   ├── config.mjs           # VitePress配置
│   │   └── theme/
│   │       ├── index.js         # 主题入口
│   │       ├── styles/          # 样式文件
│   │       └── components/      # Vue组件
│   ├── index.md                 # 门派选择首页
│   └── cangyun/                 # 苍云门派页面
│       ├── index.md             # 苍云首页
│       ├── skills.md            # 技能详解
│       ├── builds.md            # 流派选择
│       ├── build-detail.md      # 流派详情
│       ├── tactics.md           # PVP战术
│       └── equipment.md         # 配装指南
├── data/
│   └── cangyun/                 # 苍云数据文件
│       ├── index.json           # 门派基础信息
│       ├── skills.json          # 技能数据
│       ├── builds.json          # 流派数据
│       ├── tactics.json         # 战术数据
│       └── equipment.json       # 配装数据
├── package.json
└── AGENTS.md
```

## 代码风格指南

### Vue组件规范

- 使用 `<script setup>` 语法
- Props使用 `defineProps` 定义
- 组件样式使用 `scoped`
- 使用 CSS 变量管理主题色

### Markdown规范

- 使用 Vue 组件时在 `<script setup>` 中导入数据和组件
- 标题层级清晰（h1-h6）
- 重要内容使用 `**强调**`

### CSS规范

- 使用 CSS 变量管理主题色：`--color-{语义}`
- BEM 命名：`.block`, `.block__element`, `.block--modifier`
- 响应式断点：`768px`（移动端分界）

## 设计系统

### 配色

| 变量 | 用途 | 色值 |
|------|------|------|
| `--color-primary` | 主色（金色） | #c9a227 |
| `--color-bg` | 深色背景 | #0a0c10 |
| `--color-text` | 主文字 | #e8e4dc |
| `--color-secondary` | 盾姿态 | #4a90d9 |
| `--color-blade` | 刀姿态 | #d94a4a |

### 字体

- 标题：`Ma Shan Zheng`（马山正书法体）
- 正文：`Noto Serif SC`（思源宋体）
- 字体通过 Google Fonts 加载

## 最佳实践

### 添加新门派

1. 在 `data/` 创建门派数据目录（如 `data/tiance/`）
2. 创建数据文件：`index.json`, `skills.json`, `builds.json` 等
3. 在 `docs/` 创建门派页面目录（如 `docs/tiance/`）
4. 复制苍云页面模板，修改数据导入路径
5. 更新 `.vitepress/config.mjs` 添加侧边栏配置

### 添加新页面

1. 在对应门派目录创建 Markdown 文件
2. 在 `<script setup>` 中导入所需数据和组件
3. 使用现有组件渲染内容
4. 更新 `.vitepress/config.mjs` 添加侧边栏项

### 修改攻略内容

1. 编辑对应 JSON 数据文件
2. Markdown 文件会自动读取更新后的数据

## 组件说明

### SkillCard

显示技能卡片，包含技能名称、CD、描述、秘籍等。

```vue
<SkillCard :skill="skillData" />
```

### MechanismTable

显示机制说明表格。

```vue
<MechanismTable title="机制名" :rows="[{ label: '标签', content: '内容' }]" />
```

### ProsConsCard

显示优势/劣势对比卡片。

```vue
<ProsConsCard :pros="['优势1']" :cons="['劣势1']" />
```

### BuildSlider

流派详情幻灯片组件，支持多页切换。

```vue
<BuildSlider :build="buildData" />
```

## 核心机制要点

### 血怒
- 获取：盾系技能获得1层（最多3层，持续18秒）
- 效果：每层减伤3%+增伤3%
- 消耗：刀系技能消耗1层，回血2%

### 战狂
- 触发：刀系技能消耗3层血怒
- 效果：额外大伤害 + 减疗30%（3秒）
- 核心：PVP爆发关键

### 盾立
- 触发：施展盾系技能获得1秒
- 效果：免控1秒 + 抵御1次伤害
- 核心：PVP生存关键

### 控制减疗
- 基础：控制自带50%减疗
- 叠加：+战狂30% = 80%减疗
- 要点：控制中打出战狂

## 版本信息

- 当前版本：v2.0
- 迁移至VitePress，支持全门派扩展
- 内容仅供参考，实际游戏内容以官方版本为准