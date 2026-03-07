var TacticsData = {
    config: {
        title: '本攻略基于以下配置',
        main: '盾飞 + 盾墙（单轻功解）',
        reasons: [
            '不带盾墙：少3层血怒 + 少1个击倒，压制力大减',
            '带盾墙+盾壁（纯辅助流）：只有4个技能槽，盾墙+盾壁+盾猛+刀系 = 没有盾飞位置；不仅没有伤害，控制减疗的压制力也不如盾墙+盾飞',
            '盾墙+盾飞配置：保持压制力，有增伤有血怒，战狂节奏顺畅'
        ]
    },
    sections: [
        {
            id: 'offense',
            title: '进攻教学',
            icon: '⚔️',
            subsections: [
                {
                    id: 'observe',
                    title: '观察阶段',
                    content: [
                        {
                            type: 'paragraph',
                            text: '根据己方配置和对方所带的技能奇穴确定进攻目标，思考击杀的剧本，然后在实战中去往剧本方向靠，这样打起来才不容易乱。'
                        },
                        {
                            type: 'muted',
                            text: '这部分只能通过场次积累来了解各门派优劣势，攻略无法细讲。'
                        }
                    ]
                },
                {
                    id: 'start',
                    title: '起手阶段',
                    content: [
                        {
                            type: 'heading',
                            text: '开局准备',
                            level: 4
                        },
                        {
                            type: 'mechanism',
                            rows: [
                                { label: '倒计时前', content: '攒3层血怒' },
                                { label: '20秒时', content: '盾飞' },
                                { label: '7秒时', content: '收盾 → 盾猛1段 → 2段' },
                                { label: '留5秒', content: '上马' }
                            ]
                        },
                        {
                            type: 'paragraph',
                            text: '血怒持续18秒，可以带着3层血怒去抢先手。'
                        },
                        {
                            type: 'heading',
                            text: '抢先手细节',
                            level: 4
                        },
                        {
                            type: 'mechanism',
                            rows: [
                                { label: '距离把控', content: '很多职业先手技能在20尺，需要25尺左右跳马' },
                                { label: '先手流程', content: '刀系技能位移先手 → 打出战狂 → 立马接盾猛1段免控<br>闪刀只有15尺，需要<strong>跳马 + 聂云 + 闪刀</strong>' },
                                { label: '免控衔接', content: '<strong>闪刀、聂云、斩刀都是位移过程中免控，落地就不免控</strong>，必须衔接好<br>如果被抢到先手，因为只有一个轻功解，会很被动' },
                                { label: '先手目标', content: '不一定是击杀目标，谁在最前面就先手谁<br>可作为<strong>跳板</strong>用盾猛1段的位移去攻击真正想要击杀的目标' }
                            ]
                        },
                        {
                            type: 'warning',
                            title: '重要提醒',
                            text: '必须和奶妈沟通好一起冲，不然很可能会开局因为抢先手断奶而去世。'
                        }
                    ]
                },
                {
                    id: 'kill-point',
                    title: '击杀点',
                    content: [
                        {
                            type: 'heading',
                            text: '苍云强势击杀点核心',
                            level: 4
                        },
                        {
                            type: 'paragraph',
                            text: '<strong>绝招三段封轻功 + 盾猛二段封轻功</strong>，可以打出长时间的封轻功效果。'
                        },
                        {
                            type: 'heading',
                            text: '击杀剧本',
                            level: 4
                        },
                        {
                            type: 'list',
                            ordered: true,
                            items: [
                                '通过高额控制逼出对手的解技能',
                                '在持续的<strong>封轻功 + 盾猛击倒 + 队友接控制</strong>中打出击杀',
                                '<strong>至少双战狂的爆发 + 减疗 + 控制本身携带的减疗</strong>'
                            ]
                        },
                        {
                            type: 'heading',
                            text: '连招细节',
                            level: 4
                        },
                        {
                            type: 'paragraph',
                            text: '绝招连招中，<strong>阵云二段时盾猛1段的击倒效果消失</strong>，此时需要：'
                        },
                        {
                            type: 'list',
                            items: [
                                '配合队友的控制',
                                '或自己无公CD的轻功解控的控制'
                            ]
                        },
                        {
                            type: 'paragraph',
                            text: '这样让对手交不出轻功解控，出击杀点。'
                        }
                    ]
                },
                {
                    id: 'control-chain',
                    title: '控制衔接细节',
                    content: [
                        {
                            type: 'mechanism',
                            rows: [
                                { label: '问题', content: '<strong>击倒是最高等级控制</strong>，其他控制必须接在击倒起身后才能成功<br>无缝衔接困难，对手起身可能开出保命技能，导致击杀点失败' },
                                { label: '解决方案', content: '队友在击倒快起身时配合给<strong>封内</strong>或<strong>缴械</strong>：<ul><li>对手起身无法开出技能</li><li>轻功也被封，无法扶摇聂云</li><li>然后再接控制是稳稳命中的</li></ul>' }
                            ]
                        },
                        {
                            type: 'tips',
                            title: '进攻核心要点',
                            items: [
                                '<strong>开局准备</strong>：提前攒血怒、盾飞、上马，带着3层血怒抢先手',
                                '<strong>先手目标</strong>：谁在前先手谁，可作跳板攻击真正目标',
                                '<strong>击杀点</strong>：封轻功 + 控制 + 双战狂爆发 + 队友配合',
                                '<strong>控制衔接</strong>：击倒起身配合封内/缴械，稳稳命中后续控制'
                            ]
                        }
                    ]
                },
                {
                    id: 'practical-tips',
                    title: '实战要点',
                    content: [
                        {
                            type: 'heading',
                            text: '循环是死的，实战是活的',
                            level: 4
                        },
                        {
                            type: 'paragraph',
                            text: '所谓的基础循环和绝招循环，都只是常用场景下的推荐选择。JJC中必须<strong>根据实际情况灵活应变</strong>。'
                        },
                        {
                            type: 'heading',
                            text: '补伤害技巧',
                            level: 4
                        },
                        {
                            type: 'paragraph',
                            text: '队友抓点只需要补伤害时，可以<strong>无视顺序</strong>，快速使用绝招1、2段和三层血怒开盾飞，在3秒内打出双战狂爆发补伤害。'
                        },
                        {
                            type: 'heading',
                            text: '绝招连招的两个中断点',
                            level: 4
                        },
                        {
                            type: 'warning',
                            title: '容易导致连招中断的情况',
                            text: '<strong>点一</strong>：阵云1段后敌方直接开免控，导致无法接盾猛击倒<br><strong>点二</strong>：盾猛击倒后敌方起身的控制，如果没有缴械封内配合、又没有无缝接上，对方可能开出减伤/免控，只能等下一波'
                        },
                        {
                            type: 'paragraph',
                            text: '这两个点是各种配置和苍云玩家需要在实战中想办法解决的。'
                        },
                        {
                            type: 'heading',
                            text: '目标切换策略',
                            level: 4
                        },
                        {
                            type: 'mechanism',
                            rows: [
                                { label: '核心思路', content: '盾立免控只有1秒，捏不了技能' },
                                { label: '优势利用', content: '盾猛带位移，可以<strong>快速切目标</strong>，在奶妈和要打的DPS之间转' },
                                { label: '选择原则', content: '<strong>谁没有免控就控谁</strong>' }
                            ]
                        },
                        {
                            type: 'heading',
                            text: '绝招CD管理',
                            level: 4
                        },
                        {
                            type: 'mechanism',
                            rows: [
                                { label: 'CD对比', content: '战狂、盾猛、绝招形成良性循环，<strong>绝招CD一般比技能解CD短</strong>' },
                                { label: '使用策略', content: '不用省绝招，用绝招逼出技能解控也是赚的' },
                                { label: '下一波优势', content: '对面交了技能解，下一波基本没有技能解了' }
                            ]
                        },
                        {
                            type: 'tips',
                            title: '实战核心要点',
                            items: [
                                '<strong>灵活应变</strong>：循环只是推荐，实战根据情况调整',
                                '<strong>补伤害</strong>：队友抓点时，无视顺序快速打双战狂',
                                '<strong>连招中断</strong>：注意免控时机和起身控制衔接',
                                '<strong>目标选择</strong>：快速切目标，谁没免控就控谁',
                                '<strong>绝招管理</strong>：绝招CD短于技能解，大胆用来逼解控'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'defense',
            title: '防守教学',
            icon: '🛡️',
            subsections: [
                {
                    id: 'cc-chain',
                    title: '续免控的细节',
                    content: [
                        {
                            type: 'heading',
                            text: '免控原理',
                            level: 4
                        },
                        {
                            type: 'list',
                            items: [
                                '盾系技能因奇穴「盾立」免控1秒',
                                '无界公CD也是1秒',
                                '所以只有一直使用盾系技能才能续免控'
                            ]
                        },
                        {
                            type: 'heading',
                            text: '切刀后风险',
                            level: 4
                        },
                        {
                            type: 'list',
                            items: [
                                '盾飞切刀后，公CD转完就不免控了',
                                '闪刀1段落地就可能被控'
                            ]
                        },
                        {
                            type: 'warning',
                            title: '注意事项',
                            text: '挨打时尽量不要在没有绝招免控的情况下使用闪刀2段。'
                        },
                        {
                            type: 'heading',
                            text: '续免控技巧',
                            level: 4
                        },
                        {
                            type: 'combo',
                            steps: [
                                '闪刀1段结束',
                                '<strong>聂云</strong>（轻功无公CD，位移过程不吃控）',
                                '规避1秒不免控时间',
                                '聂云落地公CD已过',
                                '<strong>立马收盾 → 进盾墙续免控</strong>'
                            ]
                        }
                    ]
                },
                {
                    id: 'counter-disable',
                    title: '应对缴械封外的方式',
                    content: [
                        {
                            type: 'heading',
                            text: '问题',
                            level: 4
                        },
                        {
                            type: 'paragraph',
                            text: '苍云平时免控只有1秒，需要靠技能持续使用来维持。一旦吃到封外缴械，无法继续使用技能，肯定续不住免控。'
                        },
                        {
                            type: 'heading',
                            text: '应对方式',
                            level: 4
                        },
                        {
                            type: 'skillCards',
                            cards: [
                                {
                                    title: '提前挂扶摇',
                                    items: [
                                        '一旦被封立马跳起来',
                                        '高处落下时间让控制时间所剩无几，无需交解'
                                    ]
                                },
                                {
                                    title: '单纯封外缴械（不封轻功）',
                                    items: [
                                        '连续聂云规避可能吃到的控制'
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'heading',
                            text: '都被封到且没提前挂扶摇',
                            level: 4
                        },
                        {
                            type: 'mechanism',
                            rows: [
                                { label: '立马喊奶妈', content: '封外和封轻功都可以驱散<br>无界驱散是随机的，不一定能驱到' },
                                { label: '驱散后处理', content: '<strong>驱了封轻功</strong> → 聂云跑<br><strong>驱了封外</strong> → 盾系技能续免控' },
                                { label: '最坏情况', content: '都没驱散到 + 吃了长时间控制<br>和奶妈沟通：交救急技能还是等封轻结束自己交轻功解<br><strong>防止救命技能交重</strong>' }
                            ]
                        }
                    ]
                },
                {
                    id: 'displacement',
                    title: '位移的应用',
                    content: [
                        {
                            type: 'heading',
                            text: '苍云的位移技能',
                            level: 4
                        },
                        {
                            type: 'cycleFlow',
                            items: ['盾猛1段', '斩刀/闪刀', '盾飞后的特殊普攻隐刀']
                        },
                        {
                            type: 'heading',
                            text: '应用场景',
                            level: 4
                        },
                        {
                            type: 'mechanism',
                            rows: [
                                { label: '场景一', content: '<strong>奶妈救急和解控都没有时</strong><ul><li>手拖位移技能快速远离战场</li><li>让敌人无法追击</li><li>等技能CD缓过来再进场</li></ul>' },
                                { label: '场景二', content: '<strong>应对无视轻功解、缴械强开的配置</strong><ul><li>奶妈没关键技能时远离战场</li><li>等对方用出关键技能后再入场</li></ul>' }
                            ]
                        },
                        {
                            type: 'heading',
                            text: '核心优势',
                            level: 4
                        },
                        {
                            type: 'list',
                            items: [
                                '借助苍云位移不要钱的特性',
                                '快速远离和切入战场的能力来规避危险时刻',
                                '需要对对方配置的击杀点非常熟悉',
                                '需要很强的战局洞悉能力'
                            ]
                        },
                        {
                            type: 'tips',
                            title: '说明',
                            text: '为了进攻压制力放弃盾壁后，这是苍云保命的最大优势之一。'
                        },
                        {
                            type: 'tips',
                            title: '防守核心要点',
                            items: [
                                '<strong>续免控</strong>：盾系技能持续使用，切刀后注意衔接聂云+收盾+盾墙',
                                '<strong>应对封外</strong>：提前挂扶摇、连续聂云、喊奶妈驱散、沟通交解时机',
                                '<strong>位移保命</strong>：利用多位移快速远离战场，等CD再进场'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'configs',
            title: '配置思路',
            icon: '📋',
            intro: '不同的33队伍配置，苍云的定位和打法会有所不同。以下为各配置的详细教学：',
            configs: [
                {
                    id: 'cangwu',
                    name: '苍无',
                    fullName: '苍云+无方',
                    rating: '5.0',
                    build: '斩刀控制流（核心侧重控场，搭配战狂减疗）',
                    role: '苍云承担<strong>核心控场 + 减疗</strong>职责',
                    sections: [
                        {
                            title: '进攻节奏',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '无方常规带双三封无减疗、<strong>无任何控制技能</strong>，需苍云以斩刀补充控制、战狂提供减疗，二者配合形成<strong>"控制+减疗+爆发"</strong>的闭环。'
                                },
                                {
                                    type: 'highlight',
                                    text: '任何一波斩刀（有战狂的减疗）接盾猛+并青都有可能出击杀。'
                                },
                                {
                                    type: 'combo',
                                    steps: [
                                        '斩刀控制',
                                        '战狂减疗',
                                        '盾猛击倒',
                                        '并青爆发',
                                        '<strong>击杀点</strong>'
                                    ],
                                    separator: '+'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cangluo',
                    name: '苍螺',
                    fullName: '苍云+田螺',
                    rating: '4.5',
                    build: '闪刀爆发流 或 斩刀控制流',
                    role: '<strong>打外功</strong>：苍云定位为输出<br><strong>打内功</strong>：田螺用机关流，苍云定位为控制',
                    sections: [
                        {
                            title: '进攻节奏',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '核心配合：根据对局目标（外功/内功）切换打法，依托<strong>苍云绝招连招 + 田螺控制/机关输出</strong>，搭配减疗达成击杀。'
                                }
                            ]
                        },
                        {
                            title: '场景一：打外功（苍云输出，田螺辅助）',
                            content: [
                                {
                                    type: 'combo',
                                    steps: [
                                        '苍云绝招连招起手',
                                        '盾猛击倒目标',
                                        '田螺毒刹',
                                        '快起身接封外',
                                        '<strong>全程封轻功+控制+禁疗</strong>'
                                    ]
                                },
                                {
                                    type: 'paragraph',
                                    text: '目标起身后，被封外封轻，田螺接暗藏二段眩晕，无缝衔接控制链。'
                                }
                            ]
                        },
                        {
                            title: '场景二：打内功（田螺输出，苍云辅助）',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '前置条件', content: '田螺点出机关流，苍云切换为<strong>盾墙控制流</strong><br>需携带<strong>斩刀</strong>以补充控制，放弃部分输出侧重控场<br>确保能将敌方目标稳定留在田螺机关输出范围内' },
                                        { label: '配合流程', content: '田螺点出机关流后<strong>无控制能力</strong>，需苍云携带斩刀补足控制<br>利用斩刀灵活转火控制的能力，来拆火和将人留在田螺的机关范围内<br>盾墙斩刀的绝招连，也可以在对面没有技能解控时，让苍云稳定封轻功+控住对面5秒以上' },
                                        { label: '', content: '苍螺配置被控几乎就是禁疗', isHighlight: true }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '特殊情况应对',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '敌方免控较多（外功）', content: '田螺优先封外打断免控循环 → 苍云紧跟盾猛击倒 → 避免敌方免控反打 → 后续衔接控制链逼解控' },
                                        { label: '敌方远程内功较多', content: '机关流的伤害比较平，需要苍云能够<strong>持续控住敌人</strong>' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '注意事项',
                            isWarning: true,
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '苍螺目前主流打法，几乎都是单轻功解，<strong>防守容错比较低</strong>。'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cangming',
                    name: '苍明',
                    fullName: '苍云+明教',
                    rating: '4.5',
                    build: '盾墙爆发流',
                    role: '苍云承担<strong>主力输出</strong>职责',
                    sections: [
                        {
                            title: '进攻节奏',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '核心配合：<strong>苍云绝招连招 + 明教充能缴械 + 奶妈封内</strong>'
                                }
                            ]
                        },
                        {
                            title: '场景一：打无技能解内功',
                            content: [
                                {
                                    type: 'combo',
                                    steps: [
                                        '盾猛快起身',
                                        '奶妈封内目标',
                                        '明教缴械奶妈',
                                        '月大补4秒控制',
                                        '<strong>苍云双战狂爆发</strong>'
                                    ]
                                },
                                {
                                    type: 'paragraph',
                                    text: '无缝控制链 + 双战狂，极易出击杀。'
                                }
                            ]
                        },
                        {
                            title: '场景二：转火击杀',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '前置条件', content: '留双缴，等苍云绝招CD' },
                                        { label: '配合流程', content: '同步开奶 → 绝招连招<strong>8秒封轻</strong> + 明教<strong>7.5秒缴械</strong><br>无视奶妈任何技能，直接转火击杀', isHighlight: true }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '场景三：打外功 / 奶妈无封内 / 无双缴',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '方案A', content: '击倒快结束 → 缴械DPS → 月大眩晕<br>控制50%减疗 + 明教奇穴40%减疗 = <strong>90%减疗</strong> + 苍云爆发' },
                                        { label: '方案B', content: '（明教自信时）<br>缴奶 → 无缝月大DPS → 击倒后接控制' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '配置优势',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '苍明进攻配合非常契合，控制链长、减疗高、爆发足。'
                                }
                            ]
                        },
                        {
                            title: '配置弱点',
                            isWarning: true,
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        '<strong>均无免封免缴，伤害都不算高</strong>：击杀前置有点长，很容易被拆',
                                        '<strong>双近战</strong>：一起吃大伤害',
                                        '<strong>怕长歌的圈</strong>：难以进场'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cangdu',
                    name: '苍毒',
                    fullName: '苍云+毒经',
                    rating: '4.0',
                    build: '带闪刀，追求三战狂爆发',
                    role: '苍云承担<strong>主要控制 + 输出</strong>双重职责<br><span style="color:var(--color-text-muted);font-size:0.85rem;">单毒经伤害不够，需要苍云三战狂爆发补充输出</span>',
                    sections: [
                        {
                            title: '进攻节奏',
                            content: [
                                {
                                    type: 'combo',
                                    steps: [
                                        '盾猛击倒',
                                        '毒经百足减疗',
                                        '<strong>禁疗压制</strong>'
                                    ],
                                    separator: '+'
                                },
                                {
                                    type: 'list',
                                    ordered: true,
                                    items: [
                                        '<strong>禁疗压制</strong>：盾猛击倒配合毒经百足减疗，达成禁疗效果',
                                        '<strong>断疗压制</strong>：起身给奶妈封内，长时间断疗逼解控',
                                        '<strong>击杀点</strong>：绝招连招 + 快起身毒经补封内 + 苍云轻功补控 + 双战狂爆发 + 毒经输出 + 百足减疗 = 禁疗击杀'
                                    ]
                                }
                            ]
                        },
                        {
                            title: '团队配合要点',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        '<strong>击倒时</strong>：毒经接百足，达成禁疗',
                                        '<strong>快起身时</strong>：毒经补封内，来保证击倒后的控制能稳定接上'
                                    ]
                                }
                            ]
                        },
                        {
                            title: '特殊情况应对',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '免控多的内功', content: '毒经先封内打断免控 → 苍云再跟控制逼解控' },
                                        { label: '免控多的双外功', content: '<strong>弱势对局</strong><br>毒经封内无法限制外功，苍毒没有能破坏对面免控循环的技能，会比较疲软', isWarning: true }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '注意事项',
                            isWarning: true,
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        '毒经<strong>没有控制技能</strong>，击杀点可能需要苍云用解控来进攻',
                                        '一旦没杀死对面，需参照<strong>防守和位移思路</strong>苟住',
                                        '进攻失败后容错较低，需要与奶妈沟通好救急'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'daocang',
                    name: '刀苍',
                    fullName: '刀宗+苍云',
                    rating: '3.5',
                    build: '闪刀爆发流（侧重快速补伤害、衔接控制）',
                    role: '苍云承担<strong>补充输出 + 衔接控制</strong>职责<br>刀宗承担<strong>核心缴械控场 + 爆发补充</strong>职责',
                    sections: [
                        {
                            title: '核心进攻逻辑',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '以<strong>刀宗4秒缴械（可无视敌方技能减）</strong>和<strong>苍云绝招、风轻功（可无视敌方轻功减）</strong>为核心，双方大招配合，以敌方任意角色交出的任意解控为进攻发起信号，灵活启动击杀，<strong>选择目标范围极广</strong>。'
                                }
                            ]
                        },
                        {
                            title: '进攻节奏',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '核心配合：<strong>刀宗4秒缴械（无视技能解） + 苍云绝招长时间封轻功（无视轻功解）</strong>，双方大招联动，以敌方任意解控为启动信号，快速衔接爆发完成击杀。'
                                }
                            ]
                        },
                        {
                            title: '场景一：敌方交出轻功解',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '启动方式', content: '启动前，苍云先攒好<strong>三血怒</strong>，并且可以随意释放掉绝招1、2段<br>刀宗决缴抱怒 → 苍云快速补闪1、大3、闪2双战狂<br>在缴械4秒内，快速打满爆发，直接完成击杀', isHighlight: true }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '场景二：敌方交出技能解',
                            content: [
                                {
                                    type: 'mechanism',
                                    rows: [
                                        { label: '启动方式', content: '苍云绝招连起手 → 待目标快起身时 → 刀宗怒缴+起身抱补上控制<br>苍云同步衔接双战狂爆发 → 打出击杀' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '核心特点',
                            content: [
                                {
                                    type: 'paragraph',
                                    text: '双大那波，进攻选择目标极广，敌方任意角色（奶妈、DPS）交出任意一个解控，均可作为进攻启动信号，无需刻意等待特定目标或技能CD。'
                                }
                            ]
                        },
                        {
                            title: '注意事项',
                            isWarning: true,
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        '<strong>双近战</strong>，容易一起被拆，一起吃伤害',
                                        '刀宗脆，苍云单解，<strong>生存压力大</strong>'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};