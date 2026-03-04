# AGENTS.md - 剑网三苍云PVP攻略网站

本文件为AI编程代理提供代码库工作指南。

## 项目概述

这是一个静态HTML网站项目，用于展示剑网三无界端苍云门派的PVP新手攻略。项目采用纯HTML/CSS/JavaScript实现，无需构建工具，可直接在浏览器中打开查看。

**重要说明**：本攻略面向**无界端**，技能系统与旗舰端有本质区别：
- 8选4主动技能 + 4层奇穴（每层2选1）
- 第4层奇穴决定绝招
- 核心机制：战狂（3层血怒触发爆发+减疗）+ 盾立（盾系技能免控）

## 目录结构

```
攻略/
├── index.html              # 主页（门派简介、属性优先级、导航）
├── css/
│   ├── style.css           # 全局样式文件
│   └── slide.css           # PPT切换效果样式（流派详情页）
├── js/
│   ├── main.js             # 交互脚本
│   └── build-slider.js     # 流派详情PPT切换逻辑
├── data/
│   ├── build-data.js       # 流派数据（技能配置、奇穴、秘籍、循环）
│   └── skills-data.js      # 技能基础数据（旧版，保留）
├── images/                 # 图片资源目录
├── pages/
│   ├── index.html          # 重定向到根目录index.html
│   ├── skills.html         # 技能详解（核心机制、8技能、绝招、减CD表）
│   ├── builds.html         # 流派选择入口页（4流派卡片+核心机制速查）
│   ├── build-detail.html   # 流派详情页（PPT切换效果）
│   ├── tactics.html        # PVP战术页（待更新）
│   └── equipment.html      # 配装指南页（待更新）
└── 技能信息模板.md          # 技能/秘籍/奇穴信息收集模板
```

## 开发命令

### 本地预览

本项目为纯静态网站，无需构建。直接用浏览器打开 `index.html` 即可预览。

如需本地服务器（推荐，避免跨域问题）：

```bash
# 使用 Python
python -m http.server 8080

# 使用 Node.js (需先安装 http-server)
npx http-server -p 8080

# 使用 VS Code Live Server 插件
# 右键 index.html -> Open with Live Server
```

### 代码检查

```bash
# HTML 验证 (需安装 html-validate)
npx html-validate "**/*.html"

# CSS 检查 (需安装 stylelint)
npx stylelint "css/**/*.css"

# JavaScript 检查 (需安装 eslint)
npx eslint "js/**/*.js"
```

## 代码风格指南

### HTML 规范

- 使用 `lang="zh-CN"` 声明中文页面
- 使用 4 空格缩进
- 语义化标签：使用 `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` 等
- 类名使用小写字母和连字符：`intro-card`, `skill-grid`, `nav-links`
- 保持标签闭合正确，自闭合标签不加斜杠：`<br>` 而非 `<br />`

```html
<!-- 正确示例 -->
<section class="intro-section">
    <div class="container">
        <h2>标题</h2>
        <p>内容</p>
    </div>
</section>
```

### CSS 规范

- 使用 CSS 变量管理主题色和常用值
- 变量命名：`--color-{语义}`, `--font-{用途}`, `--shadow-{大小}`
- 使用 BEM 风格命名：`.block`, `.block__element`, `.block--modifier`
- 避免使用 `!important`，通过提高选择器优先级解决冲突
- 动画优先使用 CSS 实现，复杂交互使用 JavaScript
- 响应式断点统一使用 `768px` 作为移动端分界

```css
/* 变量定义 */
:root {
    --color-primary: #c9a227;
    --font-body: 'Noto Serif SC', serif;
}

/* 组件样式 */
.intro-card {
    background: var(--color-bg-card);
    border-radius: 8px;
    padding: 32px;
}

.intro-card:hover {
    transform: translateY(-4px);
}
```

### JavaScript 规范

- 使用 ES5 语法（避免箭头函数、const/let）以兼容更多浏览器
- 函数命名使用驼峰：`initMobileNav`, `initScrollAnimations`
- 事件处理放在 `DOMContentLoaded` 中初始化
- 每个 DOM 操作前检查元素是否存在
- 避免全局变量污染，使用函数作用域

```javascript
// 正确示例
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initScrollAnimations();
});

function initMobileNav() {
    var toggle = document.querySelector('.mobile-nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}
```

### 文件命名规范

- HTML 文件：小写字母，多个单词用连字符连接：`skills.html`, `tactics.html`
- CSS 文件：`style.css` 作为主样式文件
- JS 文件：`main.js` 作为主脚本文件
- 图片文件：小写字母，连字符分隔：`shield-stance.png`

### 中文内容规范

- 所有面向用户的文本使用简体中文
- 标题使用 `<h1>` 到 `<h6>` 层级分明
- 重要内容使用 `<strong>` 强调
- 保持标点符号使用中文全角标点

## 设计系统

### 配色方案

| 变量 | 用途 | 色值 |
|------|------|------|
| `--color-primary` | 主色调（金色） | #c9a227 |
| `--color-bg-dark` | 深色背景 | #0a0c10 |
| `--color-text` | 主文字色 | #e8e4dc |
| `--color-shield` | 盾姿态色 | #4a90d9 |
| `--color-blade` | 刀姿态色 | #d94a4a |

### 字体

- 标题字体：`Ma Shan Zheng`（马山正书法体）
- 正文字体：`Noto Serif SC`（思源宋体）
- 字体通过 Google Fonts 加载

### 间距系统

- 容器最大宽度：`1200px`
- 内容内边距：`24px`
- 卡片内边距：`32px`
- 栅格间距：`24px`

## 最佳实践

1. **添加新页面时**：
   - 在 `pages/` 目录下创建新 HTML 文件
   - 复制现有页面的导航结构
   - 更新所有页面的导航链接

2. **添加新样式时**：
   - 优先使用 CSS 变量
   - 遵循现有组件命名模式
   - 添加响应式支持

3. **添加新交互时**：
   - 在 `main.js` 中创建初始化函数
   - 在 `DOMContentLoaded` 中调用
   - 确保元素选择器唯一且存在

4. **修改攻略内容时**：
   - 直接编辑对应 HTML 文件
   - 保持表格和列表格式一致
   - 更新版本说明（如有）

## 版本说明

- 当前版本：v2.0
- 内容仅供参考，实际游戏内容以官方版本为准

## 攻略内容进度

| 模块 | 状态 | 说明 |
|------|------|------|
| 门派简介 | ✅ 完成 | 职业定位、属性优先级、导航 |
| 技能详解 | ✅ 完成 | 核心机制、8个主动技能、绝招、减CD表 |
| 流派选择 | ✅ 完成 | 4种流派、PPT切换详情、技能配置、奇穴、秘籍、循环 |
| PVP战术 | ⏳ 待开始 | 对战策略、竞技场/战场 |
| 配装指南 | ⏳ 待开始 | 属性、装备、五彩石 |

## 页面结构说明

### skills.html - 技能详解页
- 一、核心机制：血怒、战狂、盾立、控制机制
- 二、主动技能（8选4）：5盾系+3刀系
- 三、绝招详解：阵云结晦、矢尽兵穷
- 四、技能减绝招CD速查表
- 五、选择流派查看详细配置（引导至 builds.html）

### builds.html - 流派选择入口
- 4流派卡片展示（推荐标识、技能预览、难度标签）
- 核心机制速查区
- 点击卡片跳转至 build-detail.html?id={流派ID}

### build-detail.html - 流派详情页
- URL参数：?id=shield-barrier | shield-wall-burst | shield-wall-control | pure-support
- PPT切换效果（6页幻灯片）：
  1. 技能配置
  2. 奇穴选择
  3. 秘籍配置
  4. 基础循环
  5. 爆发循环
  6. 注意事项
- 支持左右按钮点击、圆点指示器、触摸滑动（移动端）

## 数据文件说明

### data/build-data.js
存储4种流派的完整配置数据，按slide组织：
- shield-barrier：盾壁生存流（新手推荐）
- shield-wall-burst：盾墙爆发流（进阶）
- shield-wall-control：盾墙控制流（进阶）
- pure-support：纯洗脚流（辅助）

### js/build-slider.js
PPT切换逻辑：
- 渲染流派详情HTML
- 切换幻灯片
- 触摸事件处理
- 圆点指示器更新

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

## 流派配置总览

| 流派 | 技能配置 | 定位 | 难度 |
|------|---------|------|------|
| 盾壁生存流 | 盾猛+盾飞+闪刀/斩刀+盾壁 | 新手推荐 | ★☆☆ |
| 盾墙爆发流 | 盾猛+盾飞+闪刀+盾墙 | 极限爆发 | ★★★ |
| 盾墙控制流 | 盾猛+盾飞+斩刀+盾墙 | 控制辅助 | ★★☆ |
| 纯洗脚流 | 盾猛+盾墙+斩刀+盾壁 | 团队辅助 | ★☆☆ |
