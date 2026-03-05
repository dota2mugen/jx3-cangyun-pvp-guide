# AGENTS.md - 剑网三苍云PVP攻略网站

本文件为AI编程代理提供代码库工作指南。

## 项目概述

静态HTML网站，展示剑网三无界端苍云门派PVP新手攻略。纯HTML/CSS/JavaScript实现，**无需构建工具、测试框架或包管理器**。

**重要**：攻略面向**无界端**，技能系统与旗舰端有本质区别：
- 8选4主动技能 + 4层奇穴（每层2选1）
- 第4层奇穴决定绝招
- 核心机制：战狂（3层血怒触发爆发+减疗）+ 盾立（盾系技能免控）

## 开发命令

### 本地预览

```bash
# 直接打开（最简单）
# 浏览器打开 index.html

# 本地服务器（推荐，避免跨域）
python -m http.server 8080
npx http-server -p 8080
```

### 代码检查（可选）

本项目无自动化检查流程，如需验证可手动运行：

```bash
# HTML 验证
npx html-validate "**/*.html"

# CSS 检查
npx stylelint "css/**/*.css"

# JavaScript 检查
npx eslint "js/**/*.js"
```

**注意**：项目未配置 eslint/stylelint，上述命令需全局安装对应工具。

### 构建与测试

```bash
# 无需构建 - 直接编辑 HTML/CSS/JS 文件
# 无需测试 - 无测试框架
# 无需打包 - 静态文件直接部署
```

## 代码风格指南

### HTML 规范

```html
<!-- ✅ 正确：语义化标签 + 4空格缩进 + 中文内容 -->
<section class="intro-section">
    <div class="container">
        <h2>标题</h2>
        <p>内容使用<strong>强调</strong>重点</p>
    </div>
</section>

<!-- ❌ 避免：自闭合标签加斜杠 -->
<br />  <!-- 错误 -->
<br>    <!-- 正确 -->
```

- `lang="zh-CN"` 声明中文页面
- 类名使用小写字母和连字符：`intro-card`, `skill-grid`
- 所有用户文本使用简体中文
- 标题层级清晰（h1-h6）
- 重要内容使用 `<strong>` 强调

### CSS 规范

```css
/* ✅ 正确：CSS变量 + BEM命名 + 4空格缩进 */
:root {
    --color-primary: #c9a227;
    --color-text: #e8e4dc;
}

.intro-card {
    background: var(--color-bg-card);
    border-radius: 8px;
    padding: 32px;
}

.intro-card:hover {
    transform: translateY(-4px);
}

/* ❌ 避免：!important 和深层嵌套 */
.page .section .card .title {
    color: red !important;  /* 错误：优先级过高 */
}
```

- 使用 CSS 变量管理主题色：`--color-{语义}`
- BEM 命名：`.block`, `.block__element`, `.block--modifier`
- 响应式断点：`768px`（移动端分界）
- 动画优先用 CSS，复杂交互用 JavaScript
- 避免使用 `!important`

### JavaScript 规范

```javascript
// ✅ 正确：ES5语法 + DOM存在性检查 + IIFE避免全局污染
(function() {
    'use strict';
    
    var container = document.querySelector('.slide-container');
    if (!container) return;
    
    container.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) {
            handleClick(e.target);
        }
    });
})();

// ✅ 正确：DOMContentLoaded初始化
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initScrollAnimations();
});

// ❌ 避免：ES6+语法（箭头函数、const/let、模板字符串）
const handleEvent = () => { ... }  // 错误：不兼容旧浏览器
let count = 0;                     // 错误：使用 var
const html = `<div>${name}</div>`; // 错误：使用字符串拼接
```

- **必须使用 ES5 语法**（兼容更多浏览器）：
  - 变量声明：`var`（不用 const/let）
  - 函数：`function() {}`（不用箭头函数）
  - 字符串：`'string'` 或 `+` 拼接（不用模板字符串）
- 函数命名：驼峰式 `initMobileNav`, `handleClick`
- DOM 操作前检查元素存在：`if (!element) return;`
- 使用 IIFE 避免全局污染：`(function() { ... })();`
- 事件处理放在 `DOMContentLoaded` 中初始化
- 错误处理：检查返回值，不使用 try-catch

### 文件组织

```
攻略/
├── index.html              # 主页
├── css/
│   ├── style.css           # 全局样式（所有页面共用）
│   └── slide.css           # PPT切换样式（流派详情页）
├── js/
│   ├── main.js             # 全局交互脚本（所有页面）
│   └── build-slider.js     # PPT切换逻辑（流派详情页）
├── data/
│   ├── build-data.js       # 流派配置数据
│   └── skills-data.js      # 技能基础数据（旧版，保留）
└── pages/
    ├── skills.html         # 技能详解页
    ├── builds.html         # 流派选择入口
    ├── build-detail.html   # 流派详情页
    ├── tactics.html        # PVP战术页
    └── equipment.html      # 配装指南页
```

**命名规则**：
- HTML：小写字母+连字符：`skills.html`, `build-detail.html`
- CSS：`style.css`（主样式），功能样式单独文件
- JS：`main.js`（主脚本），功能脚本按功能命名
- 图片：小写字母+连字符：`shield-stance.png`

## 数据文件规范

### data/build-data.js

流派配置数据，全局变量 `BuildData`：

```javascript
var BuildData = {
    builds: {
        'shield-barrier': {
            name: '盾壁生存流',
            tag: '新手推荐',
            tagClass: 'tag-recommend',
            heroIcon: '🛡️',
            slides: [
                {
                    title: '技能配置',
                    type: 'skills',
                    content: { ... }
                }
            ]
        }
    }
};
```

### 数据使用

在 HTML 中引入数据文件：

```html
<script src="../data/build-data.js"></script>
<script src="../js/build-slider.js"></script>
<script>
    // BuildData 已在全局可用
    var build = BuildData.builds['shield-barrier'];
</script>
```

## 设计系统

### 配色

| 变量 | 用途 | 色值 |
|------|------|------|
| `--color-primary` | 主色（金色） | #c9a227 |
| `--color-bg-dark` | 深色背景 | #0a0c10 |
| `--color-text` | 主文字 | #e8e4dc |
| `--color-shield` | 盾姿态 | #4a90d9 |
| `--color-blade` | 刀姿态 | #d94a4a |

### 字体

- 标题：`Ma Shan Zheng`（马山正书法体）
- 正文：`Noto Serif SC`（思源宋体）
- 字体通过 Google Fonts 加载

### 间距

- 容器最大宽度：`1200px`
- 内容内边距：`24px`
- 卡片内边距：`32px`
- 栅格间距：`24px`

## 最佳实践

### 添加新页面

1. 在 `pages/` 创建 HTML 文件
2. 复制现有页面的导航结构
3. 更新所有页面的导航链接（5个页面）

### 添加新样式

1. 优先使用 CSS 变量
2. 添加到 `css/style.css`（通用样式）或对应功能样式文件
3. 遵循 BEM 命名规范
4. 添加响应式支持（`@media (max-width: 768px)`）

### 添加新交互

1. 在 `js/main.js` 创建初始化函数
2. 在 `DOMContentLoaded` 中调用
3. DOM 操作前检查元素存在
4. 使用 ES5 语法

### 修改攻略内容

1. 直接编辑对应 HTML 文件
2. 数据内容编辑 `data/build-data.js`
3. 保持表格和列表格式一致
4. 更新版本说明（如有）

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

## 页面功能说明

### index.html - 主页
- 门派简介、属性优先级、导航入口

### skills.html - 技能详解
- 核心机制、8个主动技能、绝招、减CD表

### builds.html - 流派选择
- 4流派卡片展示（盾壁生存流、盾墙爆发流、盾墙控制流、纯洗脚流）
- 点击跳转至 `build-detail.html?id={流派ID}`

### build-detail.html - 流派详情
- URL参数：`?id=shield-barrier | shield-wall-burst | shield-wall-control | pure-support`
- PPT切换效果（6页：技能、奇穴、秘籍、循环、爆发、注意事项）
- 支持左右按钮、圆点指示器、触摸滑动、键盘方向键

## 版本信息

- 当前版本：v2.0
- 内容仅供参考，实际游戏内容以官方版本为准