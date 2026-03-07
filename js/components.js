/**
 * 组件模块 - 动态渲染导航栏和页脚
 * 使用方法：在HTML中引入此JS，页面会自动注入导航和页脚
 */
(function() {
    'use strict';
    
    // 获取当前页面的导航高亮项
    function getActiveNavLink() {
        var path = window.location.pathname;
        var filename = path.substring(path.lastIndexOf('/') + 1);
        
        if (filename === '' || filename === 'index.html') return 0;
        if (filename === 'skills.html') return 1;
        if (filename === 'builds.html' || filename === 'build-detail.html') return 2;
        if (filename === 'tactics.html') return 3;
        if (filename === 'equipment.html') return 4;
        return -1;
    }
    
    // 判断是否在pages目录下
    function isInPagesDir() {
        return window.location.pathname.indexOf('/pages/') !== -1;
    }
    
    // 获取相对路径前缀
    function getPathPrefix() {
        return isInPagesDir() ? '../' : '';
    }
    
    // 渲染导航栏
    function renderNav() {
        var prefix = getPathPrefix();
        var activeIndex = getActiveNavLink();
        
        var navLinks = [
            { href: prefix + 'index.html', text: '首页' },
            { href: prefix + 'pages/skills.html', text: '技能详解' },
            { href: prefix + 'pages/builds.html', text: '流派选择' },
            { href: prefix + 'pages/tactics.html', text: 'PVP 战术' },
            { href: prefix + 'pages/equipment.html', text: '配装指南' }
        ];
        
        var linksHtml = navLinks.map(function(link, index) {
            var activeClass = index === activeIndex ? ' active' : '';
            return '<li><a href="' + link.href + '"' + activeClass + '>' + link.text + '</a></li>';
        }).join('');
        
        return '<nav class="main-nav">' +
            '<div class="logo">苍云</div>' +
            '<button class="mobile-nav-toggle">☰</button>' +
            '<ul class="nav-links">' + linksHtml + '</ul>' +
            '</nav>';
    }
    
    // 渲染页脚
    function renderFooter() {
        return '<footer>' +
            '<div class="container">' +
            '<p>剑网三无界端 · 苍云PVP新手攻略</p>' +
            '<p class="disclaimer">本攻略仅供参考，实际游戏内容以官方版本为准</p>' +
            '</div>' +
            '</footer>';
    }
    
    // 渲染页面头部
    function renderPageHeader(title, subtitle) {
        return '<header class="page-header">' +
            '<div class="container">' +
            '<h1>' + title + '</h1>' +
            '<p>' + subtitle + '</p>' +
            '</div>' +
            '</header>';
    }
    
    // 初始化
    function init() {
        var navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.outerHTML = renderNav();
        }
        
        var footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = renderFooter();
        }
    }
    
    function initMobileNavOnce() {
        var toggle = document.querySelector('.mobile-nav-toggle');
        var navLinks = document.querySelector('.nav-links');
        
        if (!toggle || !navLinks) return;
        
        if (toggle.getAttribute('data-nav-initialized') === 'true') return;
        
        toggle.setAttribute('data-nav-initialized', 'true');
        
        toggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        var links = navLinks.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                navLinks.classList.remove('active');
                toggle.textContent = '☰';
            });
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init();
            initMobileNavOnce();
        });
    } else {
        init();
        initMobileNavOnce();
    }
    
    // 暴露到全局
    window.TemplateComponents = {
        renderNav: renderNav,
        renderFooter: renderFooter,
        renderPageHeader: renderPageHeader
    };
})();