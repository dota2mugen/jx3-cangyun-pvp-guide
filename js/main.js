document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScroll();
    initScrollAnimations();
    initNavHighlight();
    initPageTocHighlight();
});

function initMobileNav() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                toggle.textContent = '☰';
            });
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.intro-card, .skill-card, .stance-card, .nav-card, .qixue-item, .stat-item, .matchup-card, .equipment-item').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

function initNavHighlight() {
    const nav = document.querySelector('.main-nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(10, 12, 16, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'linear-gradient(180deg, rgba(10, 12, 16, 0.95) 0%, rgba(10, 12, 16, 0) 100%)';
            nav.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

function initTabs() {
    document.querySelectorAll('[data-tab]').forEach(function(button) {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            document.querySelectorAll('[data-tab]').forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            document.querySelectorAll('[data-tab-content]').forEach(function(content) {
                content.classList.remove('active');
            });
            document.querySelector('[data-tab-content="' + tabId + '"]').classList.add('active');
        });
    });
}

function initTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            const text = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = text;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + (rect.width - tooltip.offsetWidth) / 2) + 'px';
        });
        
        el.addEventListener('mouseleave', function() {
            document.querySelectorAll('.tooltip').forEach(function(t) {
                t.remove();
            });
        });
    });
}

function initPageTocHighlight() {
    const tocLinks = document.querySelectorAll('.page-toc .toc-list a');
    const sections = document.querySelectorAll('.content-section');
    
    if (tocLinks.length === 0 || sections.length === 0) {
        return;
    }
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -60% 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                tocLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(function(section) {
        observer.observe(section);
    });
}