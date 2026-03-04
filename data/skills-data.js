var SkillsData = {
    mechanisms: [
        {
            name: "血怒",
            rows: [
                { label: "获取", content: "施展<strong>盾系技能</strong>获得1层血怒（最多3层，持续18秒）" },
                { label: "效果", content: "每层：受到的伤害降低3%，造成的伤害提高3%" },
                { label: "消耗", content: "施展<strong>刀系技能</strong>消耗1层血怒，回复2%气血" }
            ]
        },
        {
            name: "战狂（第三层奇穴）",
            rows: [
                { label: "触发", content: "刀系技能消耗<strong>3层血怒</strong>时触发" },
                { label: "效果", content: "额外造成一次大伤害 + 敌方减疗30%（持续3秒）" }
            ]
        },
        {
            name: "盾立（第一层奇穴-镇关）",
            rows: [
                { label: "触发", content: "施展<strong>盾系技能</strong>获得1秒盾立" },
                { label: "效果", content: "免控1秒 + 抵御1次伤害（PVP核心）" }
            ]
        }
    ],

    controlMechanism: {
        rows: [
            { 
                label: "控制等级", 
                content: "<strong>击倒</strong>（高级控制）> <strong>眩晕</strong>（低级控制）<br>高级控制可覆盖低级控制，低级控制打在高级控制<strong>过程中</strong>不生效"
            },
            { 
                label: "控制减疗", 
                content: "定身、眩晕、击倒类控制自带<strong>50%减疗</strong><br>与战狂减疗叠加 = <strong>80%减疗</strong>（控制中吃战狂）"
            },
            { 
                label: "递减规则", 
                content: "同类控制（除击倒外）10秒内：<ul style='margin: 8px 0 0 16px;'><li>第1次：正常持续时间</li><li>第2次：持续时间减半</li><li>第3次：不生效</li></ul>"
            }
        ]
    },

    cycleFlow: "战狂触发 → 盾猛CD -9秒 → 盾猛可用 → 大招CD -3秒 → 大招送3血怒 → 更多战狂",

    shieldSkills: [
        {
            name: "盾猛",
            cd: "CD 18秒",
            segments: [
                { label: "1段", desc: "20尺突进 + 击倒3秒 + 获得1层血怒 + 减绝招CD 3秒" },
                { label: "2段", desc: "轻功沉默3秒 + 获得1层血怒" }
            ],
            books: [
                { text: "<strong>核心推荐</strong>：刀系技能每消耗一层血怒，降低本招式3秒调息" },
                { text: "不再使命中目标倒地，命中时将其击退并眩晕3秒" }
            ],
            note: "盾墙形态下有独立CD的盾猛1段，可额外获得1层血怒"
        },
        {
            name: "盾飞",
            tag: "盾系|刀系",
            cd: "CD 15秒",
            segments: [
                { label: "1段", desc: "扔出盾牌形成盾阵 + 切换擎刀状态（增伤15%）+ 获得1层血怒" },
                { label: "2段", desc: "收回盾牌 + 退出擎刀状态 + 敌方控制效果（眩晕或击退）" }
            ],
            specials: [
                "擎刀状态：禁用盾系技能，普攻变为<strong>隐刀</strong>（10尺位移+20%减伤1秒）",
                "盾阵控制：敌方在盾阵内时，自身距离盾阵10尺内则眩晕敌方1秒，10尺外则击退敌方",
                "<strong>2段无公CD</strong>：盾飞2段收回盾牌后可立即使用其他技能（如盾墙）"
            ],
            note: "2段无公CD，所以盾飞2段后可立即盾墙，避免擎刀状态下无法使用盾舞和独立盾猛",
            books: [
                { text: "<strong>常规推荐</strong>：调息增加5秒，清除刀系招式调息时间" },
                { text: "内功沉默2秒（看情况可带）" }
            ]
        },
        {
            name: "盾墙",
            cd: "CD 35秒",
            segments: [
                { label: "1段", desc: "进入盾墙姿态（持续30秒）+ 获得1层血怒 + 减绝招CD 4秒" },
                { label: "2段", desc: "提前结束盾墙姿态，根据剩余时间返还调息" }
            ],
            specials: [
                "禁用刀系技能，移速降低60%，伤害降低50%，免控",
                "普攻替换为<strong>盾舞</strong>（盾系技能，使用获得1层血怒）",
                "可用独立CD的<strong>盾猛1段</strong>（额外减绝招CD 3秒 + 1层血怒）"
            ],
            books: [
                { text: "<strong>常规推荐</strong>：盾墙姿态每被攻击3次，获得1秒盾立" },
                { text: "盾墙姿态期间，自身8尺范围内队友免控+减伤35%（带盾壁时可带）" }
            ]
        },
        {
            name: "盾壁",
            cd: "CD 30秒",
            desc: "获得气血值上限30%的护盾（持续4秒）+ 解控 + 护盾存在期间免控 + 获得1层血怒 + 减绝招CD 4秒",
            note: "被封外缴械时不可释放",
            books: [
                { text: "<strong>常规推荐</strong>：护盾化解伤害额外提高10%，持续时间延长1秒" },
                { text: "周围队友同时获得气血值最大值15%的护盾（带盾墙时可带）" }
            ]
        },
        {
            name: "断马催城",
            cd: "CD 20秒",
            desc: "6尺眩晕敌方5秒 + 驱散一个增益 + 获得1层血怒 + 减绝招CD 3秒",
            books: [
                { text: "<strong>常规推荐</strong>：恢复自身气血最大值的20%" },
                { text: "被命中目标造成的伤害降低15%，持续5秒" }
            ]
        }
    ],

    bladeSkills: [
        {
            name: "闪刀",
            cd: "CD 10秒",
            segments: [
                { label: "1段", desc: "15尺位移伤害技能 + 消耗1层血怒（回血2%）" },
                { label: "2段", desc: "对敌方造成持续流血（16秒）+ 消耗1层血怒（回血2%）" }
            ],
            note: "3层血怒时使用触发<strong>战狂</strong>：额外大伤害 + 减疗30%（3秒）",
            books: [
                { text: "<strong>核心推荐</strong>：增伤15%，持续12秒" },
                { text: "命中流血目标回血5%" }
            ]
        },
        {
            name: "斩刀",
            cd: "CD 10秒",
            desc: "20尺位移伤害技能 + 击落下马 + 减速50%（3秒）+ 消耗1层血怒 + 减绝招CD 1秒",
            books: [
                { text: "<strong>核心推荐</strong>：3秒眩晕，并使得下次施展刀系技能返还其调息时间" },
                { text: "附加流血，持续16秒" }
            ]
        },
        {
            name: "绝刀",
            cd: "CD 8秒",
            desc: "6尺伤害技能 + 目标气血值低于50%时伤害提高50% + 消耗1层血怒 + 减绝招CD 1秒",
            books: [
                { text: "<strong>核心推荐</strong>：目标气血值低于50%时，伤害再额外提高50%" },
                { text: "目标每有一层流血，额外造成一次小伤害" }
            ]
        }
    ],

    talents: [
        {
            layer: "第一层",
            options: [
                { name: "血狱", desc: "会心提高5%，流血最高可叠加3层", recommended: false },
                { name: "镇关", desc: "施展盾系招式获得1秒盾立（免控1秒+抵御1次伤害）", recommended: true, note: "PVP核心奇穴，提供稳定免控" }
            ]
        },
        {
            layer: "第二层",
            options: [
                { name: "睥睨", desc: "攻击气血值百分比低于自身的目标后，自身增伤10%，持续5秒", recommended: true, note: "实战更容易触发" },
                { name: "陷阵", desc: "每次添加流血，会心会效提高6%（持续15秒，最多叠加2层）", recommended: false }
            ]
        },
        {
            layer: "第三层",
            options: [
                { name: "碎甲", desc: "血怒不再降低受到的伤害，伤害效果提升至5%，持续时间延长至25秒，刀系招式不再消耗血怒", recommended: false },
                { name: "战狂", desc: "刀系消耗3层血怒，额外造成一次大伤害，并使敌方减疗30%（持续3秒）", recommended: true, note: "PVP核心奇穴，爆发+减疗" }
            ]
        },
        {
            layer: "第四层（决定绝招）",
            options: [
                { name: "矢尽兵穷", desc: "解锁绝招「矢尽兵穷」", recommended: false },
                { name: "阵云结晦", desc: "解锁绝招「阵云结晦」", recommended: true, note: "多段封轻功+免控+增伤+额外血怒" }
            ]
        }
    ],

    ultimates: [
        {
            name: "阵云结晦",
            cd: "CD 60秒（套装-8秒）",
            isUltimate: true,
            segments: [
                { label: "1段", desc: "6尺轻功沉默3秒 + 免控2秒" },
                { label: "2段", desc: "6尺轻功沉默3秒 + 免控2秒" },
                { label: "3段", desc: "20尺突进 + 轻功沉默3秒 + 免控2秒 + 获得3层血怒" }
            ],
            special: "每段命中目标使自身10秒内增伤15%（效果覆盖，不可叠加）",
            note: "连续封轻功+免控+追击+增伤+获得3层血怒，PVP首选绝招"
        },
        {
            name: "矢尽兵穷",
            cd: "CD 60秒（套装-8秒）",
            isUltimate: true,
            desc: "立刻获得3层血怒，2秒后生成决斗场，离开决斗场的敌方造成伤害降低60%（持续12秒）",
            special: "决斗场范围内额外减疗10%（持续12秒）"
        }
    ],

    lightnessSkill: {
        name: "撼地",
        cd: "CD 30秒",
        desc: "20尺突进眩晕 + 解控 + 免控1秒 + 轻功沉默期间不可使用",
        note: "重要保命/追击技能，被轻功沉默时无法使用"
    },

    builds: [
        {
            name: "盾墙爆发流",
            tag: "进阶",
            tagClass: "advanced",
            skills: [
                { name: "盾猛", type: "shield" },
                { name: "盾飞", type: "shield" },
                { name: "闪刀", type: "blade" },
                { name: "盾墙", type: "shield" }
            ],
            note: "盾飞秘籍：调息+5秒，清除刀系CD",
            pros: [
                "盾墙内可攒3层血怒，绝招期间<strong>3次战狂</strong>爆发",
                "战狂触发频率高，秘籍减盾猛CD效果最明显",
                "盾墙提供稳定减伤+免控+攒血怒"
            ],
            cons: [
                "只有<strong>门派轻功30秒解控</strong>，容易被抓死",
                "需要熟练掌握免控续接节奏",
                "新手容错率较低"
            ]
        },
        {
            name: "盾壁生存流",
            tag: "新手推荐",
            tagClass: "beginner",
            recommended: true,
            skills: [
                { name: "盾猛", type: "shield" },
                { name: "盾飞", type: "shield" },
                { name: "斩刀/闪刀", type: "blade" },
                { name: "盾壁", type: "shield" }
            ],
            note: "盾飞秘籍：<strong>封内2秒</strong>（无盾墙攒血怒）",
            pros: [
                "盾壁提供<strong>解控+免控+护盾</strong>，容错率高",
                "30%血量护盾 + 解控，生存能力强",
                "门派轻功+盾壁<strong>双解控</strong>"
            ],
            cons: [
                "无盾墙攒血怒，绝招爆发较弱",
                "战狂触发频率低，CD循环较慢",
                "带斩刀牺牲爆发，带闪刀牺牲控制"
            ]
        },
        {
            name: "盾墙控制流",
            tag: "进阶",
            tagClass: "advanced",
            skills: [
                { name: "盾猛", type: "shield" },
                { name: "盾飞", type: "shield" },
                { name: "斩刀", type: "blade" },
                { name: "盾墙", type: "shield" }
            ],
            note: "盾飞秘籍：调息+5秒，清除刀系CD",
            pros: [
                "保留<strong>双战狂</strong>爆发的同时增加斩刀控制",
                "适合配合高输出但无控制的队友",
                "盾墙内战狂触发多，CD循环快"
            ],
            cons: [
                "牺牲3战狂爆发，只剩双战狂",
                "只有门派轻功解控",
                "需要队友有输出能力"
            ]
        },
        {
            name: "纯洗脚流",
            tag: "辅助",
            tagClass: "support",
            skills: [
                { name: "盾猛", type: "shield" },
                { name: "盾墙", type: "shield" },
                { name: "斩刀", type: "blade" },
                { name: "盾壁", type: "shield" }
            ],
            note: "<strong>放弃盾飞</strong>，生存拉满",
            pros: [
                "<strong>生存拉满</strong>：双解控+盾墙长时间免控减伤",
                "<strong>双解控</strong>：门派轻功+盾壁",
                "盾猛+斩刀都有控制"
            ],
            cons: [
                "<strong>几乎没有伤害</strong>，纯辅助定位",
                "无盾飞，血怒不足，战狂触发少，控制频率不如盾墙控制流",
                "无盾飞重置刀系CD",
                "需要队友有足够输出"
            ]
        }
    ],

    compareTable: {
        headers: ["", "斩刀", "闪刀"],
        rows: [
            { label: "控制能力", values: ["3秒眩晕+减速", "无硬控"], highlight: 0 },
            { label: "爆发能力", values: ["单战狂", "双战狂"], highlight: 1 },
            { label: "绝招连招", values: ["斩刀控制衔接", "闪1→大3→闪2"], highlight: 1 },
            { label: "适用场景", values: ["需要控制留人", "追求爆发伤害"], highlight: null }
        ]
    },

    cdTable: [
        { skill: "盾猛", cd: "3秒" },
        { skill: "盾飞", cd: "0秒" },
        { skill: "闪刀", cd: "0秒" },
        { skill: "盾墙", cd: "4秒" },
        { skill: "盾墙内盾猛", cd: "+3秒" },
        { skill: "斩刀", cd: "1秒" },
        { skill: "绝刀", cd: "1秒" },
        { skill: "盾壁", cd: "4秒" },
        { skill: "断马催城", cd: "3秒" }
    ],

    combos: {
        shieldWallBasic: {
            title: "盾墙流派",
            desc: "开局进场的基础连招：",
            steps: [
                { num: 1, skill: "盾猛1段", effect: "免控突进 + 击倒3秒 + 1层血怒" },
                { num: 2, skill: "盾猛2段", effect: "免控 + 封轻功3秒 + 1层血怒" },
                { num: 3, skill: "盾飞1段", effect: "免控 + 切刀增伤15% + 1层血怒" },
                { num: 4, skill: "闪刀1段", effect: "战狂！减疗30% + 大伤害", highlight: true }
            ],
            steps2: [
                { num: 5, skill: "盾飞2段", effect: "切回盾形态（无公CD，可立即接技能）" },
                { num: 6, skill: "盾墙", effect: "减伤 + 免控 + 攒血怒" }
            ],
            tips: [
                "盾飞2段<strong>无公CD</strong>，可立即接盾墙，避免擎刀状态无法用盾舞",
                "进盾墙后用普攻（盾舞）+ 独立盾猛攒3层血怒",
                "盾墙内等CD，准备绝招爆发波"
            ]
        },
        shieldWallControl: {
            title: "盾墙控制流（带斩刀）",
            desc: "开局攒满3层血怒后，斩刀起手控制链：",
            steps: [
                { num: 1, skill: "斩刀", effect: "眩晕3秒" },
                { num: 2, skill: "盾猛1段", effect: "击倒3秒（无缝衔接）" },
                { num: 3, skill: "盾猛2段", effect: "封轻功3秒 + 1层血怒" },
                { num: 4, skill: "盾飞1段", effect: "重置斩刀+1层血怒" }
            ],
            steps2: [
                { num: 5, skill: "斩刀", effect: "切奶/防递减，位移规避", highlight: true },
                { num: 6, skill: "盾飞2段", effect: "收盾（无公CD）" },
                { num: 7, skill: "盾墙", effect: "减伤+免控+等CD" }
            ],
            tips: [
                "<strong>开局攒3层血怒</strong>：进盾墙普攻+独立盾猛攒满",
                "<strong>斩刀起手</strong>：眩晕先手，盾猛击倒无缝衔接（眩晕未结束释放）",
                "<strong>第二斩刀</strong>：切奶或位移规避（刀系不免控），同时避免眩晕递减",
                "盾飞带重置秘籍，增加斩刀频率，可在奶妈和DPS之间灵活转火防止递减"
            ]
        },
        shieldBarrier: {
            title: "盾壁生存流",
            desc: "新手推荐，盾壁用于应急解控，不加入常规循环：",
            steps: [
                { num: 1, skill: "盾猛1段", effect: "免控突进 + 击倒3秒 + 1层血怒" },
                { num: 2, skill: "盾猛2段", effect: "免控 + 封轻功3秒 + 1层血怒" },
                { num: 3, skill: "盾飞1段", effect: "免控 + 封内2秒 + 切刀增伤 + 1层血怒" },
                { num: 4, skill: "斩刀/闪刀", effect: "战狂爆发 / 控制衔接", highlight: true }
            ],
            tips: [
                "<strong>盾壁用于应急</strong>：被控时再用，不加入常规循环",
                "打完上述连招后<strong>无盾系技能可用</strong>，此时不要急着收盾",
                "擎刀状态下用<strong>隐刀普攻</strong>或<strong>聂云</strong>位移规避伤害",
                "等待盾猛CD好，再盾飞2段收盾→盾猛1-2段循环",
                "<strong>盾飞带封内秘籍</strong>：无盾墙攒血怒，封内增加控制"
            ]
        }
    },

    burstCombos: {
        shieldWall: {
            title: "盾墙流派 - 3次战狂爆发",
            desc: "进盾墙攒满3层血怒后的完整爆发：",
            phases: [
                {
                    title: "准备阶段（盾墙内）",
                    isBurst: false,
                    steps: [
                        { skill: "盾墙", effect: "1层血怒" },
                        { skill: "普攻(盾舞)", effect: "+1层血怒" },
                        { skill: "盾猛(独立)", effect: "+1层血怒 = 3层" }
                    ]
                },
                {
                    title: "爆发阶段（连续封轻功 + 3次战狂）",
                    isBurst: true,
                    steps: [
                        { skill: "闪刀1段", effect: "战狂①", highlight: true },
                        { skill: "阵云1段", effect: "封轻功+免控" },
                        { skill: "盾猛1段", effect: "击倒+1血怒" },
                        { skill: "盾猛2段", effect: "封轻功+1血怒" }
                    ],
                    steps2: [
                        { skill: "盾飞1段", effect: "重置闪刀+1血怒" },
                        { skill: "阵云2段", effect: "封轻功+免控" },
                        { skill: "闪刀1段", effect: "战狂②", highlight: true },
                        { skill: "阵云3段", effect: "封轻功+追击+3血怒" },
                        { skill: "闪刀2段", effect: "战狂③", highlight: true }
                    ]
                }
            ],
            tips: [
                "连续封轻功让敌人无法逃脱",
                "3次战狂 = 3次减疗30%爆发",
                "阵云3段有20尺追击，可追逃跑敌人",
                "阵云3段获得3层血怒，可继续输出"
            ]
        },
        shieldBarrier: {
            title: "盾壁流派（带闪刀） - 双战狂爆发",
            desc: "竞技场有奶妈时，追求最短时间爆发，双战狂间隔太长则无爆发效果：",
            phases: [
                {
                    title: "绝招爆发（最后3秒内双战狂）",
                    isBurst: true,
                    steps: [
                        { skill: "阵云1段", effect: "封轻功+免控" },
                        { skill: "盾猛1段", effect: "击倒+1血怒" },
                        { skill: "盾猛2段", effect: "封轻功+1血怒" },
                        { skill: "盾飞1段", effect: "封内+1血怒=3层" }
                    ],
                    steps2: [
                        { skill: "阵云2段", effect: "封轻功+免控" },
                        { skill: "闪刀1段", effect: "战狂①", highlight: true },
                        { skill: "阵云3段", effect: "封轻功+3血怒" },
                        { skill: "闪刀2段", effect: "战狂②", highlight: true }
                    ]
                }
            ],
            tips: [
                "<strong>最后3秒内双战狂</strong>：阵云1-2-3连续封轻功9秒，闪1和闪2在最后3秒内打出",
                "控制中战狂 = 80%减疗（控制50%+战狂30%）",
                "双战狂减盾猛18秒CD，基本重置"
            ]
        }
    }
};