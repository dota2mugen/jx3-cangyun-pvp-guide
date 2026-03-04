(function() {
    'use strict';

    var currentSlide = 0;
    var totalSlides = 0;
    var slideContainer = null;
    var slideWrapper = null;
    var dotsContainer = null;
    var prevBtn = null;
    var nextBtn = null;
    var counterEl = null;

    function initSlider() {
        slideContainer = document.querySelector('.slide-container');
        if (!slideContainer) return;
        
        slideWrapper = slideContainer.querySelector('.slide-wrapper');
        dotsContainer = slideContainer.querySelector('.slide-dots');
        prevBtn = slideContainer.querySelector('.slide-prev');
        nextBtn = slideContainer.querySelector('.slide-next');
        counterEl = slideContainer.querySelector('.slide-counter');
        
        var slides = slideWrapper.querySelectorAll('.slide');
        totalSlides = slides.length;
        
        if (totalSlides <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            if (counterEl) counterEl.style.display = 'none';
            return;
        }
        
        createDots();
        updateSlider();
        bindEvents();
        
        if (counterEl) counterEl.textContent = '1 / ' + totalSlides;
    }

    function createDots() {
        if (!dotsContainer) return;
        var html = '';
        for (var i = 0; i < totalSlides; i++) {
            html += '<div class="slide-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></div>';
        }
        dotsContainer.innerHTML = html;
    }

    function updateSlider() {
        if (!slideWrapper) return;
        slideWrapper.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        
        if (prevBtn) prevBtn.disabled = currentSlide === 0;
        if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
        
        if (counterEl) counterEl.textContent = (currentSlide + 1) + ' / ' + totalSlides;
        
        if (dotsContainer) {
            var dots = dotsContainer.querySelectorAll('.slide-dot');
            dots.forEach(function(dot, idx) {
                dot.classList.toggle('active', idx === currentSlide);
            });
        }
    }

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        currentSlide = index;
        updateSlider();
    }

    function bindEvents() {
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                goToSlide(currentSlide - 1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                goToSlide(currentSlide + 1);
            });
        }
        
        if (dotsContainer) {
            dotsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('slide-dot')) {
                    var index = parseInt(e.target.dataset.index);
                    goToSlide(index);
                }
            });
        }
        
        var touchStartX = 0;
        var touchEndX = 0;
        
        if (slideContainer) {
            slideContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            slideContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }
        
        function handleSwipe() {
            var diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goToSlide(currentSlide + 1);
                } else {
                    goToSlide(currentSlide - 1);
                }
            }
        }
    }

    function renderSlideContent(slide) {
        var type = slide.type;
        var content = slide.content;
        var html = '<div class="slide-content">';
        
        switch(type) {
            case 'skills':
                html += renderSkillsSlide(content);
                break;
            case 'talents':
                html += renderTalentsSlide(content);
                break;
            case 'books':
                html += renderBooksSlide(content);
                break;
            case 'combo':
                html += renderComboSlide(content);
                break;
            case 'burst':
                html += renderBurstSlide(content);
                break;
            case 'tips':
                html += renderTipsSlide(content);
                break;
        }
        
        html += '</div>';
        return html;
    }

    function renderSkillsSlide(content) {
        var html = '<div class="slide-skills">';
        content.skills.forEach(function(skill) {
            html += '<div class="slide-skill-card ' + skill.type + '">';
            html += '<span class="slide-skill-name">' + skill.name + '</span>';
            html += '<span class="slide-skill-type">' + (skill.type === 'shield' ? '盾系' : '刀系') + '</span>';
            html += '<span class="slide-skill-desc">' + skill.desc + '</span>';
            html += '</div>';
        });
        html += '</div>';
        
        if (content.ultimate) {
            html += '<div class="slide-ultimate">';
            html += '<div class="slide-ultimate-title">绝招</div>';
            html += '<strong>' + content.ultimate.name + '</strong>：' + content.ultimate.desc;
            html += '</div>';
        }
        
        if (content.note) {
            html += '<p class="slide-note">' + content.note + '</p>';
        }
        
        return html;
    }

    function renderTalentsSlide(content) {
        var html = '<div class="slide-talents">';
        content.talents.forEach(function(t) {
            html += '<div class="slide-talent-item">';
            html += '<span class="talent-layer-tag">' + t.layer + '</span>';
            html += '<div>';
            html += '<span class="talent-pick-name">' + t.pick + '</span>';
            html += '<span class="talent-reason">' + t.reason + '</span>';
            html += '</div>';
            html += '</div>';
        });
        html += '</div>';
        return html;
    }

    function renderBooksSlide(content) {
        var html = '<div class="slide-books">';
        content.books.forEach(function(book) {
            html += '<div class="slide-book-item">';
            html += '<div class="slide-book-skill">' + book.skill + '</div>';
            book.picks.forEach(function(pick) {
                html += '<div class="slide-book-pick">' + pick + '</div>';
            });
            if (book.note) {
                html += '<div class="slide-book-note">' + book.note + '</div>';
            }
            html += '</div>';
        });
        html += '</div>';
        return html;
    }

    function renderComboSlide(content) {
        var html = '<div class="slide-combo">';
        if (content.desc) {
            html += '<p class="slide-combo-desc">' + content.desc + '</p>';
        }
        html += '<div class="slide-combo-steps">';
        content.steps.forEach(function(step, idx) {
            html += '<div class="combo-step-item' + (step.highlight ? ' highlight' : '') + '">';
            html += '<span class="step-order">' + (idx + 1) + '</span>';
            html += '<span class="step-skill">' + step.skill + '</span>';
            html += '<span class="step-effect">' + step.effect + '</span>';
            if (step.key) {
                html += '<span class="step-key">' + step.key + '</span>';
            }
            html += '</div>';
        });
        html += '</div>';
        
        if (content.followUp && content.followUp.length > 0) {
            html += '<div class="slide-combo-follow">';
            html += '<div class="follow-label">后续动作</div>';
            html += '<div class="slide-combo-steps">';
            content.followUp.forEach(function(step, idx) {
                html += '<div class="combo-step-item">';
                html += '<span class="step-order">' + (idx + 1) + '</span>';
                html += '<span class="step-skill">' + step.skill + '</span>';
                html += '<span class="step-effect">' + step.effect + '</span>';
                html += '</div>';
            });
            html += '</div></div>';
        }
        html += '</div>';
        return html;
    }

    function renderBurstSlide(content) {
        var html = '<div class="slide-burst-phases">';
        if (content.desc) {
            html += '<p class="slide-combo-desc" style="margin-bottom: 16px;">' + content.desc + '</p>';
        }
        content.phases.forEach(function(phase) {
            var phaseClass = phase.name === '准备' ? 'prep' : 'burst';
            html += '<div class="burst-phase ' + phaseClass + '">';
            html += '<div class="burst-phase-name">' + phase.name + '阶段</div>';
            html += '<div class="slide-combo-steps" style="padding: 12px;">';
            phase.steps.forEach(function(step, idx) {
                html += '<div class="combo-step-item' + (step.highlight ? ' highlight' : '') + '">';
                html += '<span class="step-order">' + (idx + 1) + '</span>';
                html += '<span class="step-skill">' + step.skill + '</span>';
                html += '<span class="step-effect">' + step.effect + '</span>';
                html += '</div>';
            });
            html += '</div></div>';
        });
        html += '</div>';
        return html;
    }

    function renderTipsSlide(content) {
        var html = '<div class="slide-tips">';
        
        if (content.pros && content.pros.length > 0) {
            html += '<div class="tips-section pros"><h4>✓ 优势</h4>';
            html += '<div class="tips-list">';
            content.pros.forEach(function(p) {
                html += '<div class="tips-list-item">' + p + '</div>';
            });
            html += '</div></div>';
        }
        
        if (content.cons && content.cons.length > 0) {
            html += '<div class="tips-section cons"><h4>✗ 劣势</h4>';
            html += '<div class="tips-list">';
            content.cons.forEach(function(c) {
                html += '<div class="tips-list-item">' + c + '</div>';
            });
            html += '</div></div>';
        }
        
        if (content.tips && content.tips.length > 0) {
            html += '<div class="tips-section tips"><h4>💡 实战要点</h4>';
            html += '<div class="tips-list">';
            content.tips.forEach(function(t) {
                html += '<div class="tips-list-item">' + t + '</div>';
            });
            html += '</div></div>';
        }
        
        html += '</div>';
        return html;
    }

    function renderBuildDetail(build) {
        var html = '';
        
        html += '<div class="build-hero">';
        html += '<div class="build-hero-icon" style="filter: drop-shadow(0 0 20px ' + build.heroColor + ');">' + build.heroIcon + '</div>';
        html += '<h1 class="build-hero-title">' + build.name + '</h1>';
        html += '<span class="build-hero-tag ' + build.tagClass + '">' + build.tag + '</span>';
        html += '<p class="build-hero-desc">' + build.description + '</p>';
        html += '</div>';
        
        html += '<div class="slide-container">';
        html += '<div class="slide-wrapper">';
        
        build.slides.forEach(function(slide, idx) {
            html += '<div class="slide">';
            html += '<div class="slide-header">';
            html += '<h2 class="slide-title">' + slide.title + '</h2>';
            html += '<span class="slide-counter">' + (idx + 1) + ' / ' + build.slides.length + '</span>';
            html += '</div>';
            html += renderSlideContent(slide);
            html += '</div>';
        });
        
        html += '</div>';
        
        html += '<div class="slide-nav">';
        html += '<button class="slide-nav-btn slide-prev" aria-label="上一页">◀</button>';
        html += '<div class="slide-dots"></div>';
        html += '<button class="slide-nav-btn slide-next" aria-label="下一页">▶</button>';
        html += '</div>';
        
        html += '</div>';
        
        return html;
    }

    window.BuildSlider = {
        init: initSlider,
        goToSlide: goToSlide,
        renderSlideContent: renderSlideContent,
        renderBuildDetail: renderBuildDetail
    };
})();