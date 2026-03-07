/**
 * 装备数据 - 配装指南页面的结构化数据
 */
var EquipmentData = {
    // 属性优先级
    statsPriority: [
        { rank: 1, name: '攻击力', desc: '提升所有技能伤害', priority: '最高优先级', icon: '⚔', tags: ['核心属性', '全面提升'] },
        { rank: 2, name: '会心', desc: '提高暴击率', priority: '高优先级', icon: '💥', tags: ['爆发提升', '收益递减'] },
        { rank: 3, name: '会效', desc: '提高暴击伤害', priority: '高优先级', icon: '🔥', tags: ['暴击伤害', '配合会心'] },
        { rank: 4, name: '破防', desc: '穿透敌方防御', priority: '中等优先级', icon: '🛡', tags: ['穿透防御', '后期收益高'] },
        { rank: 5, name: '御劲', desc: '减少被暴击几率', priority: '生存属性', icon: '🛡', tags: ['降低被暴击', '生存向'] },
        { rank: 6, name: '体质', desc: '增加生命值上限', priority: '生存属性', icon: '💪', tags: ['血量提升', '基础生存'] }
    ],
    
    // 属性配比推荐
    statsRatio: [
        { stat: '攻击力', beginner: '优先堆叠', advanced: '持续提升', endgame: '最大化' },
        { stat: '会心', beginner: '30%左右', advanced: '35%-40%', endgame: '40%-45%' },
        { stat: '会效', beginner: '150%+', advanced: '180%+', endgame: '200%+' },
        { stat: '破防', beginner: '适度', advanced: '200+', endgame: '300+' },
        { stat: '御劲', beginner: '100+', advanced: '150+', endgame: '200+' }
    ],
    
    // 装备品质
    qualityLevels: [
        { name: '白装', desc: '基础装备，仅用于过渡', recommended: false },
        { name: '绿装', desc: '初级装备，有一定属性加成', recommended: false },
        { name: '蓝装', desc: '中级装备，适合日常任务', recommended: false },
        { name: '紫装', desc: 'PVP主力装备，属性优秀', recommended: true },
        { name: '橙装', desc: '顶级装备，毕业追求目标', recommended: true }
    ],
    
    // 装备部位推荐
    equipmentSlots: [
        { slot: '武器', name: '玄铁重剑', source: '竞技场商店 / 团本掉落' },
        { slot: '头盔', name: '苍云战盔', source: '竞技场商店' },
        { slot: '护甲', name: '玄甲战铠', source: '竞技场商店 / 团本掉落' },
        { slot: '护手', name: '苍云护手', source: '竞技场商店' },
        { slot: '腰带', name: '玄甲腰带', source: '竞技场商店' },
        { slot: '护腿', name: '苍云战裤', source: '竞技场商店' },
        { slot: '战靴', name: '苍云战靴', source: '竞技场商店' },
        { slot: '护腕', name: '玄甲护腕', source: '团本掉落 / 制作' }
    ],
    
    // 套装效果
    setEffects: [
        {
            name: '玄甲套装',
            effects: [
                { pieces: 2, effect: '攻击力+5%' },
                { pieces: 4, effect: '盾墙减伤效果+5%' },
                { pieces: 6, effect: '权门伤害+10%，怒气获取+10%' }
            ],
            recommended: true,
            desc: '偏向输出，适合进攻型打法'
        },
        {
            name: '苍云战甲',
            effects: [
                { pieces: 2, effect: '生命值+10%' },
                { pieces: 4, effect: '御劲+50' },
                { pieces: 6, effect: '受击时10%几率获得护盾' }
            ],
            recommended: false,
            desc: '偏向生存，适合防守型打法'
        }
    ],
    
    // 五彩石类型
    gemTypes: [
        { name: '红石', type: '攻击属性', icon: '🔴', desc: '提升攻击力、破防等进攻属性', tags: ['攻击力', '破防'] },
        { name: '黄石', type: '暴击属性', icon: '🟡', desc: '提升会心、会效等暴击相关属性', tags: ['会心', '会效'] },
        { name: '蓝石', type: '防御属性', icon: '🔵', desc: '提升御劲、体质等防御属性', tags: ['御劲', '体质'] },
        { name: '紫石', type: '混合属性', icon: '🟣', desc: '同时提升多种属性，属性均衡', tags: ['均衡', '多功能'] }
    ],
    
    // 五彩石镶嵌推荐
    gemRecommendations: [
        { slot: '武器', mainStat: '攻击力', gems: '红石·攻击 + 黄石·会心' },
        { slot: '头盔', mainStat: '会心', gems: '黄石·会心 + 黄石·会效' },
        { slot: '护甲', mainStat: '体质', gems: '蓝石·体质 + 蓝石·御劲' },
        { slot: '护手', mainStat: '破防', gems: '红石·破防 + 黄石·会心' },
        { slot: '腰带', mainStat: '御劲', gems: '蓝石·御劲 + 蓝石·体质' },
        { slot: '护腿', mainStat: '会效', gems: '黄石·会效 + 红石·攻击' },
        { slot: '战靴', mainStat: '身法', gems: '紫石·身法 + 黄石·会心' }
    ],
    
    // 词条推荐
    statLines: [
        { name: '攻击力百分比', recommended: true, badge: '必选', desc: '直接提升基础攻击力，收益最高且最稳定' },
        { name: '会心百分比', recommended: true, badge: '必选', desc: '提升暴击率，爆发伤害的关键属性' },
        { name: '会效百分比', recommended: true, badge: '推荐', desc: '提升暴击伤害，配合会心属性效果更佳' },
        { name: '破防', recommended: false, desc: '穿透防御，面对高防目标时收益较高' },
        { name: '御劲', recommended: false, desc: '降低被暴击率，提升生存能力' },
        { name: '生命值百分比', recommended: false, desc: '提升总血量，适合坦克向配装' }
    ],
    
    // 词条洗练优先级
    statPriority: [
        { slot: '武器', priority: '攻击力% > 会心% > 会效%' },
        { slot: '头盔', priority: '会心% > 攻击力% > 会效%' },
        { slot: '护甲', priority: '生命% > 御劲 > 体质' },
        { slot: '护手', priority: '破防 > 攻击力% > 会心%' },
        { slot: '腰带', priority: '御劲 > 生命% > 体质' },
        { slot: '护腿', priority: '会效% > 会心% > 攻击力%' },
        { slot: '战靴', priority: '身法 > 移速 > 御劲' }
    ],
    
    // 毕业配装方案
    buildSets: [
        {
            name: '爆发输出型',
            items: [
                { slot: '武器', name: '玄铁重剑·极', stats: '攻击力% + 会心%', gems: '红石攻击 + 黄石会心' },
                { slot: '头盔', name: '玄甲战盔', stats: '会心% + 会效%', gems: '黄石会心 + 黄石会效' },
                { slot: '护甲', name: '玄甲战铠', stats: '攻击力% + 体质', gems: '蓝石体质 + 红石攻击' },
                { slot: '护手', name: '玄甲护手', stats: '破防 + 会心%', gems: '红石破防 + 黄石会心' },
                { slot: '腰带', name: '玄甲腰带', stats: '御劲 + 生命%', gems: '蓝石御劲 + 蓝石体质' },
                { slot: '护腿', name: '玄甲战裤', stats: '会效% + 攻击力%', gems: '黄石会效 + 红石攻击' },
                { slot: '战靴', name: '玄甲战靴', stats: '身法 + 御劲', gems: '紫石身法 + 蓝石御劲' }
            ]
        },
        {
            name: '生存坦克型',
            items: [
                { slot: '武器', name: '苍云重剑', stats: '攻击力% + 御劲', gems: '红石攻击 + 蓝石御劲' },
                { slot: '头盔', name: '苍云战盔', stats: '生命% + 御劲', gems: '蓝石体质 + 蓝石御劲' },
                { slot: '护甲', name: '苍云战铠', stats: '生命% + 体质', gems: '蓝石体质 + 蓝石体质' },
                { slot: '护手', name: '苍云护手', stats: '御劲 + 生命%', gems: '蓝石御劲 + 蓝石体质' },
                { slot: '腰带', name: '苍云腰带', stats: '御劲 + 体质', gems: '蓝石御劲 + 蓝石体质' },
                { slot: '护腿', name: '苍云战裤', stats: '生命% + 御劲', gems: '蓝石体质 + 蓝石御劲' },
                { slot: '战靴', name: '苍云战靴', stats: '身法 + 御劲', gems: '紫石身法 + 蓝石御劲' }
            ]
        }
    ],
    
    // 资源获取途径
    resourceSources: [
        { name: '竞技场', desc: 'PVP装备主要来源，通过竞技积分兑换装备' },
        { name: '团队副本', desc: '高级装备掉落，需要组队挑战' },
        { name: '日常任务', desc: '获取基础材料和金币，每日必做' },
        { name: '活动奖励', desc: '限时活动可获得稀有装备和材料' },
        { name: '交易行', desc: '购买其他玩家出售的装备和材料' },
        { name: '制作系统', desc: '收集材料制作特定装备' }
    ],
    
    // 每日必做清单
    dailyTasks: [
        '完成日常任务获取基础资源',
        '参与竞技场获取竞技积分',
        '挑战可通关的副本获取装备',
        '查看交易行是否有性价比高的装备',
        '参与限时活动获取额外奖励'
    ]
};