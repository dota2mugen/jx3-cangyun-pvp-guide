(function() {
    'use strict';

    function renderMechanisms(container, data) {
        var html = '';
        data.forEach(function(mech) {
            html += '<h3>' + mech.name + '</h3>';
            html += '<div class="mechanism-detail">';
            mech.rows.forEach(function(row, idx) {
                html += '<div class="mechanism-row">';
                html += '<div class="mechanism-label">' + row.label + '</div>';
                html += '<div class="mechanism-content"><p>' + row.content + '</p></div>';
                html += '</div>';
            });
            html += '</div>';
        });
        container.innerHTML = html;
    }

    function renderControlMechanism(container, data) {
        var html = '<h3>控制机制（无界端通用）</h3>';
        html += '<div class="mechanism-detail">';
        data.rows.forEach(function(row) {
            html += '<div class="mechanism-row">';
            html += '<div class="mechanism-label">' + row.label + '</div>';
            html += '<div class="mechanism-content"><p>' + row.content + '</p></div>';
            html += '</div>';
        });
        html += '</div>';
        container.innerHTML = html;
    }

    function renderCycleFlow(container, flowText) {
        var html = '<h3>战狂良性循环</h3>';
        html += '<div class="mechanism-detail">';
        html += '<p style="margin-bottom: 12px;">携带<strong>盾猛秘籍</strong>时，战狂触发会减少盾猛9秒CD。触发越多，盾猛CD越快，盾猛又减大招CD，大招送的3血怒又可以触发更多战狂，形成闭环：</p>';
        html += '<div class="cycle-flow">';
        var parts = flowText.split(' → ');
        parts.forEach(function(part) {
            html += '<span>' + part + '</span> → ';
        });
        html = html.slice(0, -4);
        html += '</div>';
        html += '<p style="margin-top: 12px;"><strong>实战运用</strong>：闪1→大3→闪2连续两次战狂，直接减掉盾猛18秒CD（≈重置），后续可立即衔接盾猛1-2段继续控制链。</p>';
        html += '<p><strong>盾墙流派优势</strong>：因战狂触发频率更高（3次战狂），CD循环效果最明显。</p>';
        html += '</div>';
        container.innerHTML = html;
    }

    function renderSkillCard(skill, isShield) {
        var html = '<div class="skill-detail-card' + (skill.isUltimate ? ' ultimate-card' : '') + '">';
        html += '<div class="skill-header">';
        html += '<h4>' + skill.name + '</h4>';
        if (skill.tag) {
            html += '<span class="skill-tag ' + (isShield ? 'shield' : 'blade') + '">' + skill.tag + '</span>';
        } else if (skill.isUltimate) {
            html += '<span class="skill-tag ultimate">绝招</span>';
        } else {
            html += '<span class="skill-tag ' + (isShield ? 'shield' : 'blade') + '">' + (isShield ? '盾系' : '刀系') + '</span>';
        }
        html += '<span class="skill-cd">' + skill.cd + '</span>';
        html += '</div>';

        if (skill.desc) {
            html += '<div class="skill-desc-full"><p>' + skill.desc + '</p></div>';
        }

        if (skill.segments) {
            html += '<div class="skill-segments">';
            skill.segments.forEach(function(seg) {
                html += '<div class="segment">';
                html += '<span class="seg-label">' + seg.label + '</span>';
                html += '<p>' + seg.desc + '</p>';
                html += '</div>';
            });
            html += '</div>';
        }

        if (skill.specials) {
            html += '<div class="skill-special"><h5>特殊机制</h5><ul>';
            skill.specials.forEach(function(s) {
                html += '<li>' + s + '</li>';
            });
            html += '</ul></div>';
        }

        if (skill.special) {
            html += '<div class="skill-special"><h5>特殊机制</h5><p>' + skill.special + '</p></div>';
        }

        if (skill.note) {
            html += '<div class="skill-note"><p>' + skill.note + '</p></div>';
        }

        if (skill.books) {
            html += '<div class="skill-book"><h5>秘籍选择</h5><ul>';
            skill.books.forEach(function(b) {
                html += '<li>' + b.text + '</li>';
            });
            html += '</ul></div>';
        }

        html += '</div>';
        return html;
    }

    function renderShieldSkills(container, skills) {
        var html = '';
        skills.forEach(function(skill) {
            html += renderSkillCard(skill, true);
        });
        container.innerHTML = html;
    }

    function renderBladeSkills(container, skills) {
        var html = '';
        skills.forEach(function(skill) {
            html += renderSkillCard(skill, false);
        });
        container.innerHTML = html;
    }

    function renderUltimates(container, ultimates) {
        var html = '';
        ultimates.forEach(function(ult) {
            html += renderSkillCard(ult, false);
        });
        container.innerHTML = html;
    }

    function renderLightnessSkill(container, skill) {
        var html = renderSkillCard(skill, false);
        container.innerHTML = html;
    }

    function renderTalents(container, talents) {
        var html = '<div class="talent-grid">';
        talents.forEach(function(layer) {
            html += '<div class="talent-layer">';
            html += '<h3>' + layer.layer + '</h3>';
            html += '<div class="talent-options">';
            layer.options.forEach(function(opt) {
                html += '<div class="talent-option' + (opt.recommended ? ' recommended' : '') + '">';
                html += '<h4>' + opt.name;
                if (opt.recommended) {
                    html += ' <span class="recommend-tag">推荐</span>';
                }
                html += '</h4>';
                html += '<p>' + opt.desc + '</p>';
                if (opt.note) {
                    html += '<p class="talent-note">' + opt.note + '</p>';
                }
                html += '</div>';
            });
            html += '</div></div>';
        });
        html += '</div>';
        container.innerHTML = html;
    }

    function renderBuilds(container, builds) {
        var html = '<div class="build-comparison">';
        builds.forEach(function(build, idx) {
            if (idx === 2) {
                html += '</div><div class="build-comparison" style="margin-top: 24px;">';
            }
            html += '<div class="build-card' + (build.recommended ? ' recommended' : '') + '">';
            html += '<div class="build-header">';
            html += '<h3>' + build.name + '</h3>';
            html += '<span class="build-tag ' + build.tagClass + '">' + build.tag + '</span>';
            html += '</div>';
            html += '<div class="build-content">';
            html += '<div class="build-skills"><h4>技能配置</h4>';
            html += '<div class="skill-list-compact">';
            build.skills.forEach(function(s) {
                html += '<div class="skill-row">';
                html += '<span class="skill-name">' + s.name + '</span>';
                html += '<span class="skill-type-tag ' + s.type + '">' + (s.type === 'shield' ? '盾系' : '刀系') + '</span>';
                html += '</div>';
            });
            html += '</div>';
            html += '<p class="build-note">' + build.note + '</p>';
            html += '</div>';
            html += '<div class="build-pros"><h4>优势</h4><ul>';
            build.pros.forEach(function(p) {
                html += '<li>' + p + '</li>';
            });
            html += '</ul></div>';
            html += '<div class="build-cons"><h4>劣势</h4><ul>';
            build.cons.forEach(function(c) {
                html += '<li>' + c + '</li>';
            });
            html += '</ul></div>';
            html += '</div></div>';
        });
        html += '</div>';
        container.innerHTML = html;
    }

    function renderCompareTable(container, data) {
        var html = '<div class="build-detail"><h3>流派选择指南</h3>';
        html += '<h4>斩刀 vs 闪刀选择（适用于盾壁流）</h4>';
        html += '<div class="compare-table">';
        html += '<div class="compare-row header">';
        data.headers.forEach(function(h) {
            html += '<div class="compare-cell">' + h + '</div>';
        });
        html += '</div>';
        data.rows.forEach(function(row) {
            html += '<div class="compare-row">';
            html += '<div class="compare-cell">' + row.label + '</div>';
            row.values.forEach(function(v, idx) {
                var isHighlight = row.highlight === idx;
                html += '<div class="compare-cell' + (isHighlight ? ' highlight-good' : '') + '">' + v + '</div>';
            });
            html += '</div>';
        });
        html += '</div></div>';
        container.innerHTML = html;
    }

    function renderComboSteps(steps) {
        var html = '';
        steps.forEach(function(step) {
            html += '<div class="combo-step' + (step.highlight ? ' highlight' : '') + '">';
            html += '<div class="step-num">' + step.num + '</div>';
            html += '<div class="step-content">';
            html += '<span class="skill-name">' + step.skill + '</span>';
            html += '<span class="step-effect">' + step.effect + '</span>';
            html += '</div></div>';
            html += '<div class="combo-arrow">→</div>';
        });
        return html.slice(0, -29);
    }

    function renderCombo(container, combo) {
        var html = '<h3>' + combo.title + '</h3>';
        if (combo.desc) html += '<p>' + combo.desc + '</p>';
        html += '<div class="combo-flow">' + renderComboSteps(combo.steps) + '</div>';
        if (combo.steps2) {
            html += '<div class="combo-flow" style="margin-top: 16px;">' + renderComboSteps(combo.steps2) + '</div>';
        }
        if (combo.tips) {
            html += '<div class="tips-box"><h4>💡 ' + combo.title.replace('（带斩刀）', '').replace('（带闪刀）', '') + '要点</h4><ul>';
            combo.tips.forEach(function(t) {
                html += '<li>' + t + '</li>';
            });
            html += '</ul></div>';
        }
        container.innerHTML = html;
    }

    function renderBurstCombo(container, combo) {
        var html = '<h3>' + combo.title + '</h3>';
        if (combo.desc) html += '<p>' + combo.desc + '</p>';
        html += '<div class="combo-flow-full">';
        combo.phases.forEach(function(phase) {
            html += '<div class="combo-phase' + (phase.isBurst ? ' burst' : '') + '">';
            html += '<div class="phase-title">' + phase.title + '</div>';
            html += '<div class="phase-steps">';
            phase.steps.forEach(function(step) {
                html += '<div class="step-inline' + (step.highlight ? ' highlight' : '') + '">';
                html += '<span class="skill-name">' + step.skill + '</span>';
                html += '<span class="step-effect">' + step.effect + '</span>';
                html += '</div>';
                html += '<span class="arrow-inline">→</span>';
            });
            html = html.slice(0, -31);
            html += '</div>';
            if (phase.steps2) {
                html += '<div class="phase-steps" style="margin-top: 12px;">';
                phase.steps2.forEach(function(step) {
                    html += '<div class="step-inline' + (step.highlight ? ' highlight' : '') + '">';
                    html += '<span class="skill-name">' + step.skill + '</span>';
                    html += '<span class="step-effect">' + step.effect + '</span>';
                    html += '</div>';
                    html += '<span class="arrow-inline">→</span>';
                });
                html = html.slice(0, -31);
                html += '</div>';
            }
            html += '</div>';
        });
        html += '</div>';
        if (combo.tips) {
            html += '<div class="tips-box"><h4>💡 爆发要点</h4><ul>';
            combo.tips.forEach(function(t) {
                html += '<li>' + t + '</li>';
            });
            html += '</ul></div>';
        }
        container.innerHTML = html;
    }

    function renderCDTable(container, data) {
        var html = '<table class="data-table"><thead><tr><th>技能</th><th>减CD秒数</th></tr></thead><tbody>';
        data.forEach(function(row) {
            html += '<tr><td>' + row.skill + '</td><td>' + row.cd + '</td></tr>';
        });
        html += '</tbody></table>';
        container.innerHTML = html;
    }

    window.SkillsRenderer = {
        renderMechanisms: renderMechanisms,
        renderControlMechanism: renderControlMechanism,
        renderCycleFlow: renderCycleFlow,
        renderShieldSkills: renderShieldSkills,
        renderBladeSkills: renderBladeSkills,
        renderUltimates: renderUltimates,
        renderLightnessSkill: renderLightnessSkill,
        renderTalents: renderTalents,
        renderBuilds: renderBuilds,
        renderCompareTable: renderCompareTable,
        renderCombo: renderCombo,
        renderBurstCombo: renderBurstCombo,
        renderCDTable: renderCDTable
    };
})();