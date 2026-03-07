function initMobileNav() {
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

function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    var elements = document.querySelectorAll('.intro-card, .skill-card, .stance-card, .nav-card, .qixue-item, .stat-item, .matchup-card, .equipment-item');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '0';
        elements[i].style.transform = 'translateY(20px)';
        elements[i].style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(elements[i]);
    }
}

function initNavHighlight() {
    var nav = document.querySelector('.main-nav');
    if (!nav) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 12, 16, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'linear-gradient(180deg, rgba(10, 12, 16, 0.95) 0%, rgba(10, 12, 16, 0) 100%)';
            nav.style.boxShadow = 'none';
        }
    });
}

function initAll() {
    initMobileNav();
    initSmoothScroll();
    initScrollAnimations();
    initNavHighlight();
    initPageTocHighlight();
    initTacticsPage();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

function initTabs() {
    var buttons = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            
            var allBtns = document.querySelectorAll('[data-tab]');
            for (var j = 0; j < allBtns.length; j++) {
                allBtns[j].classList.remove('active');
            }
            this.classList.add('active');
            
            var allContent = document.querySelectorAll('[data-tab-content]');
            for (var k = 0; k < allContent.length; k++) {
                allContent[k].classList.remove('active');
            }
            document.querySelector('[data-tab-content="' + tabId + '"]').classList.add('active');
        });
    }
}

function initTooltips() {
    var elements = document.querySelectorAll('[data-tooltip]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseenter', function() {
            var text = this.getAttribute('data-tooltip');
            var tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = text;
            document.body.appendChild(tooltip);
            
            var rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + (rect.width - tooltip.offsetWidth) / 2) + 'px';
        });
        
        elements[i].addEventListener('mouseleave', function() {
            var tooltips = document.querySelectorAll('.tooltip');
            for (var j = 0; j < tooltips.length; j++) {
                tooltips[j].remove();
            }
        });
    }
}

function initPageTocHighlight() {
    var tocLinks = document.querySelectorAll('.page-toc .toc-list a');
    var sections = document.querySelectorAll('.content-section');
    
    if (tocLinks.length === 0 || sections.length === 0) {
        return;
    }
    
    var observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -60% 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                for (var i = 0; i < tocLinks.length; i++) {
                    tocLinks[i].classList.remove('active');
                    if (tocLinks[i].getAttribute('href') === '#' + id) {
                        tocLinks[i].classList.add('active');
                    }
                }
            }
        });
    }, observerOptions);
    
    for (var i = 0; i < sections.length; i++) {
        observer.observe(sections[i]);
    }
}

function initTacticsPage() {
    var tacticsContent = document.getElementById('sections-container');
    var tocList = document.getElementById('toc-list');
    var tocToggle = document.getElementById('toc-toggle');
    var tocClose = document.getElementById('toc-close');
    var tacticsToc = document.getElementById('tactics-toc');
    
    if (!tacticsContent || typeof TacticsData === 'undefined') {
        return;
    }
    
    renderConfigNotice();
    renderTacticsContent();
    renderTacticsToc();
    initTacticsTocEvents();
}

function renderConfigNotice() {
    var container = document.getElementById('config-notice');
    if (!container || !TacticsData.config) return;
    
    var html = '<h4>' + TacticsData.config.title + '</h4>' +
        '<p class="config-main"><strong>' + TacticsData.config.main + '</strong></p>' +
        '<div class="config-reasons">' +
        '<p><strong>选择原因：</strong></p><ul>';
    
    TacticsData.config.reasons.forEach(function(reason) {
        html += '<li>' + reason + '</li>';
    });
    
    html += '</ul></div>';
    container.innerHTML = html;
}

function renderTacticsContent() {
    var container = document.getElementById('sections-container');
    if (!container) return;
    
    var html = '';
    
    TacticsData.sections.forEach(function(section) {
        html += '<section class="content-section" id="' + section.id + '">' +
            '<h2>' + section.title + '</h2>';
        
        if (section.subsections) {
            section.subsections.forEach(function(sub) {
                html += renderSubsection(sub);
            });
        } else if (section.intro) {
            html += '<p>' + section.intro + '</p>';
        }
        
        if (section.configs) {
            section.configs.forEach(function(config, index) {
                html += renderConfig(config, index);
            });
        }
        
        html += '</section>';
    });
    
    container.innerHTML = html;
}

function renderSubsection(sub) {
    var html = '<div class="subsection" id="' + sub.id + '">' +
        '<h3>' + sub.title + '</h3>';
    
    if (sub.content) {
        sub.content.forEach(function(item) {
            html += renderContentItem(item);
        });
    }
    
    html += '</div>';
    return html;
}

function renderContentItem(item) {
    var html = '';
    
    switch (item.type) {
        case 'paragraph':
            html = '<p>' + item.text + '</p>';
            break;
        case 'muted':
            html = '<p style="color:var(--color-text-muted);font-size:0.9rem;">' + item.text + '</p>';
            break;
        case 'heading':
            html = '<h' + (item.level || 4) + '>' + item.text + '</h' + (item.level || 4) + '>';
            break;
        case 'list':
            var tag = item.ordered ? 'ol' : 'ul';
            html = '<' + tag + '>';
            item.items.forEach(function(i) {
                html += '<li>' + i + '</li>';
            });
            html += '</' + tag + '>';
            break;
        case 'mechanism':
            html = '<div class="mechanism-detail">';
            item.rows.forEach(function(row) {
                var contentClass = row.isHighlight ? 'style="color:var(--color-primary);"' : '';
                var labelClass = row.isWarning ? 'style="color:#d94a4a;"' : '';
                html += '<div class="mechanism-row">' +
                    '<div class="mechanism-label" ' + labelClass + '>' + row.label + '</div>' +
                    '<div class="mechanism-content" ' + contentClass + '>' + row.content + '</div>' +
                    '</div>';
            });
            html += '</div>';
            break;
        case 'combo':
            var sep = item.separator || '→';
            html = '<div class="combo-flow">';
            item.steps.forEach(function(step, i) {
                if (i > 0) {
                    html += '<span class="combo-arrow">' + sep + '</span>';
                }
                html += '<span>' + step + '</span>';
            });
            html += '</div>';
            break;
        case 'cycleFlow':
            html = '<div class="cycle-flow">';
            item.items.forEach(function(i) {
                html += '<span>' + i + '</span>';
            });
            html += '</div>';
            break;
        case 'tips':
            html = '<div class="tips-box' + (item.isWarning ? '" style="border-color:#d94a4a;' : '') + '">' +
                '<h4' + (item.isWarning ? ' style="color:#d94a4a;' : '') + '>' + item.title + '</h4>';
            if (item.text) {
                html += '<p style="margin:0;">' + item.text + '</p>';
            } else if (item.items) {
                html += '<ul>';
                item.items.forEach(function(i) {
                    html += '<li>' + i + '</li>';
                });
                html += '</ul>';
            }
            html += '</div>';
            break;
        case 'warning':
            html = '<div class="tips-box" style="border-color:#d94a4a;">' +
                '<h4 style="color:#d94a4a;">' + item.title + '</h4>' +
                '<p style="margin:0;">' + item.text + '</p></div>';
            break;
        case 'skillCards':
            html = '<div class="skill-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">';
            item.cards.forEach(function(card, i) {
                html += '<div class="skill-card">' +
                    '<div class="skill-card-header">' +
                    '<div class="skill-icon">' + (i + 1) + '</div>' +
                    '<h4>' + card.title + '</h4></div><ul>';
                card.items.forEach(function(i) {
                    html += '<li>' + i + '</li>';
                });
                html += '</ul></div>';
            });
            html += '</div>';
            break;
        case 'highlight':
            html = '<p style="margin-top:12px;color:var(--color-primary);">' + item.text + '</p>';
            break;
    }
    
    return html;
}

function renderConfig(config, index) {
    var html = '<div class="config-section" id="config-' + config.id + '"' +
        (index > 0 ? ' style="border-top:1px solid var(--color-border);padding-top:32px;margin-top:32px;"' : '') + '>' +
        '<h3>配置' + (index + 1) + '：' + config.name + '（' + config.fullName + '）' +
        ' <span class="config-rating" title="推荐指数">' + config.rating + '★</span></h3>' +
        '<div class="mechanism-detail">' +
        '<div class="mechanism-row"><div class="mechanism-label">建议流派</div>' +
        '<div class="mechanism-content"><p><strong>' + config.build + '</strong></p></div></div>' +
        '<div class="mechanism-row"><div class="mechanism-label">配置定位</div>' +
        '<div class="mechanism-content"><p>' + config.role + '</p></div></div>' +
        '</div>';
    
    if (config.sections) {
        config.sections.forEach(function(section) {
            html += '<h4' + (section.isWarning ? ' style="color:#d94a4a;"' : '') + '>' + section.title + '</h4>';
            if (section.content) {
                section.content.forEach(function(item) {
                    html += renderContentItem(item);
                });
            }
        });
    }
    
    html += '</div>';
    return html;
}

function renderTacticsToc() {
    var tocList = document.getElementById('toc-list');
    if (!tocList) return;
    
    var html = '';
    
    TacticsData.sections.forEach(function(section) {
        html += '<li class="toc-section">' +
            '<a class="toc-section-title" href="#' + section.id + '">' +
            '<span class="toc-section-icon">' + section.icon + '</span>' +
            '<span>' + section.title + '</span></a>';
        
        if (section.subsections && section.subsections.length > 0) {
            html += '<ul class="toc-subsection">';
            section.subsections.forEach(function(sub) {
                html += '<li><a href="#' + sub.id + '">' + sub.title + '</a></li>';
            });
            html += '</ul>';
        } else if (section.configs && section.configs.length > 0) {
            html += '<ul class="toc-configs-list">';
            section.configs.forEach(function(config) {
                html += '<li><a href="#config-' + config.id + '">' +
                    '<span>' + config.name + '</span>' +
                    '<span class="toc-rating">' + config.rating + '★</span></a></li>';
            });
            html += '</ul>';
        }
        
        html += '</li>';
    });
    
    tocList.innerHTML = html;
}

function initTacticsTocEvents() {
    var tocToggle = document.getElementById('toc-toggle');
    var tocClose = document.getElementById('toc-close');
    var tacticsToc = document.getElementById('tactics-toc');
    var tocList = document.getElementById('toc-list');
    
    if (tocToggle && tacticsToc) {
        tocToggle.addEventListener('click', function() {
            tacticsToc.classList.add('active');
        });
    }
    
    if (tocClose && tacticsToc) {
        tocClose.addEventListener('click', function() {
            tacticsToc.classList.remove('active');
        });
    }
    
    if (tocList) {
        tocList.addEventListener('click', function(e) {
            var link = e.target.closest('a');
            if (link) {
                e.preventDefault();
                var targetId = link.getAttribute('href').substring(1);
                var target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (tacticsToc) {
                        tacticsToc.classList.remove('active');
                    }
                }
            }
        });
    }
    
    initTocScrollHighlight();
}

function initTocScrollHighlight() {
    var tocLinks = document.querySelectorAll('.toc-list a');
    if (tocLinks.length === 0) return;
    
    var observerOptions = {
        threshold: 0.2,
        rootMargin: '-100px 0px -60% 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                var configId = 'config-' + id;
                
                tocLinks.forEach(function(link) {
                    link.classList.remove('active');
                    var href = link.getAttribute('href');
                    if (href === '#' + id || href === '#' + configId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    TacticsData.sections.forEach(function(section) {
        var el = document.getElementById(section.id);
        if (el) observer.observe(el);
        
        if (section.subsections) {
            section.subsections.forEach(function(sub) {
                var subEl = document.getElementById(sub.id);
                if (subEl) observer.observe(subEl);
            });
        }
        
        if (section.configs) {
            section.configs.forEach(function(config) {
                var configEl = document.getElementById('config-' + config.id);
                if (configEl) observer.observe(configEl);
            });
        }
    });
}