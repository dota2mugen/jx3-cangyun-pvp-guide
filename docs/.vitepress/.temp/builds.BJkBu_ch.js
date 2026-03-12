const builds = {
  "shield-wall-burst": {
    id: "shield-wall-burst",
    name: "闪刀爆发流",
    tag: "进阶",
    tagClass: "advanced",
    description: "盾墙内攒3层血怒，绝招期间连续3次战狂爆发，追求极限伤害",
    heroIcon: "🛡️",
    heroColor: "#4a90d9",
    slides: [
      {
        title: "技能与秘籍",
        type: "skills-books",
        content: {
          skills: [
            {
              name: "盾猛",
              type: "shield",
              desc: "核心控制+减大招CD",
              book: "刀系技能每消耗一层血怒，降低本招式3秒调息",
              bookNote: "核心秘籍，战狂减盾猛CD"
            },
            {
              name: "盾飞",
              type: "shield",
              desc: "切刀增伤+重置刀系CD",
              book: "调息增加5秒，清除刀系招式调息时间",
              bookNote: "重置闪刀CD，增加爆发频率"
            },
            {
              name: "闪刀",
              type: "blade",
              desc: "位移+战狂爆发",
              book: "增伤15%，持续12秒",
              bookNote: "提升爆发伤害"
            },
            {
              name: "盾墙",
              type: "shield",
              desc: "减伤免控+攒血怒",
              book: "盾墙姿态每被攻击3次，获得1秒盾立",
              bookNote: "增加免控覆盖"
            }
          ],
          ultimate: {
            name: "阵云结晦",
            desc: "封轻功+免控+追击+3血怒"
          }
        }
      },
      {
        title: "奇穴选择",
        type: "talents",
        content: {
          talents: [
            {
              layer: "第一层",
              pick: "镇关",
              reason: "盾系技能获得盾立，PVP核心免控"
            },
            {
              layer: "第二层",
              pick: "睥睨",
              reason: "攻击低血量目标增伤10%"
            },
            {
              layer: "第三层",
              pick: "战狂",
              reason: "3层血怒触发大伤害+减疗30%"
            },
            {
              layer: "第四层",
              pick: "阵云结晦",
              reason: "多段封轻功+追击+3血怒"
            }
          ]
        }
      },
      {
        title: "基础循环",
        type: "combo",
        content: {
          desc: "开局进场攒血怒的基本连招",
          steps: [
            {
              skill: "盾猛1段",
              effect: "击倒3秒",
              key: "突进+控制"
            },
            {
              skill: "盾猛2段",
              effect: "封轻功3秒",
              key: "续控"
            },
            {
              skill: "盾飞1段",
              effect: "切刀增伤15%",
              key: "准备爆发"
            },
            {
              skill: "闪刀1段",
              effect: "战狂！",
              key: "爆发",
              highlight: true
            }
          ]
        }
      },
      {
        title: "爆发循环",
        type: "burst",
        content: {
          desc: "盾墙内攒满3层血怒后的完整爆发",
          phases: [
            {
              name: "准备",
              steps: [
                {
                  skill: "盾墙",
                  effect: "1层血怒"
                },
                {
                  skill: "普攻(盾舞)",
                  effect: "+1层血怒"
                },
                {
                  skill: "盾猛(独立)",
                  effect: "+1层血怒=3层"
                }
              ]
            },
            {
              name: "爆发",
              steps: [
                {
                  skill: "闪刀1段",
                  effect: "战狂①",
                  highlight: true
                },
                {
                  skill: "阵云1段",
                  effect: "封轻功"
                },
                {
                  skill: "盾猛1段",
                  effect: "击倒"
                },
                {
                  skill: "盾猛2段",
                  effect: "封轻功"
                },
                {
                  skill: "盾飞1段",
                  effect: "重置闪刀"
                },
                {
                  skill: "阵云2段",
                  effect: "封轻功"
                },
                {
                  skill: "闪刀1段",
                  effect: "战狂②",
                  highlight: true
                },
                {
                  skill: "阵云3段",
                  effect: "追击+3血怒"
                },
                {
                  skill: "闪刀2段",
                  effect: "战狂③",
                  highlight: true
                }
              ]
            }
          ]
        }
      },
      {
        title: "注意事项",
        type: "tips",
        content: {
          pros: [
            "盾墙内可攒3层血怒，绝招期间3次战狂爆发",
            "战狂触发频率高，秘籍减盾猛CD效果明显",
            "盾墙提供稳定减伤+免控+攒血怒"
          ],
          cons: [
            "只有门派轻功30秒解控，容易被抓死",
            "需要熟练掌握免控续接节奏",
            "新手容错率较低"
          ],
          tips: [
            "盾飞2段无公CD，可立即接盾墙",
            "进盾墙后用普攻(盾舞)+独立盾猛攒3层血怒",
            "3次战狂 = 3次减疗30%爆发",
            "阵云3段有20尺追击，可追逃跑敌人"
          ]
        }
      }
    ]
  },
  "shield-barrier": {
    id: "shield-barrier",
    name: "盾壁生存流",
    tag: "新手推荐",
    tagClass: "beginner",
    description: "盾壁提供解控+护盾+免控，双解控容错率高，适合新手入门",
    heroIcon: "🛡️",
    heroColor: "#4caf50",
    recommended: true,
    slides: [
      {
        title: "技能与秘籍",
        type: "skills-books",
        content: {
          skills: [
            {
              name: "盾猛",
              type: "shield",
              desc: "核心控制+减大招CD",
              book: "刀系技能每消耗一层血怒，降低本招式3秒调息",
              bookNote: "核心秘籍"
            },
            {
              name: "盾飞",
              type: "shield",
              desc: "切刀增伤+封内控制",
              book: "内功沉默2秒",
              bookNote: "无盾墙攒血怒，封内增加控制"
            },
            {
              name: "闪刀",
              type: "blade",
              desc: "位移+战狂爆发（推荐）",
              book: "增伤15%，持续12秒",
              bookNote: "提升爆发伤害"
            },
            {
              name: "盾壁",
              type: "shield",
              desc: "解控+护盾+免控",
              book: "护盾化解伤害额外提高10%，持续时间延长1秒",
              bookNote: "增强生存"
            }
          ],
          ultimate: {
            name: "阵云结晦",
            desc: "封轻功+免控+追击+3血怒"
          },
          note: "也可将闪刀换为斩刀，增加控制但减少爆发"
        }
      },
      {
        title: "奇穴选择",
        type: "talents",
        content: {
          talents: [
            {
              layer: "第一层",
              pick: "镇关",
              reason: "盾系技能获得盾立，PVP核心免控"
            },
            {
              layer: "第二层",
              pick: "睥睨",
              reason: "攻击低血量目标增伤10%"
            },
            {
              layer: "第三层",
              pick: "战狂",
              reason: "3层血怒触发大伤害+减疗30%"
            },
            {
              layer: "第四层",
              pick: "阵云结晦",
              reason: "多段封轻功+追击+3血怒"
            }
          ]
        }
      },
      {
        title: "基础循环",
        type: "combo",
        content: {
          desc: "盾壁用于应急解控，不加入常规循环",
          steps: [
            {
              skill: "盾猛1段",
              effect: "击倒3秒",
              key: "突进+控制"
            },
            {
              skill: "盾猛2段",
              effect: "封轻功3秒",
              key: "续控"
            },
            {
              skill: "盾飞1段",
              effect: "封内2秒+切刀",
              key: "控制+增伤"
            },
            {
              skill: "闪刀",
              effect: "战狂爆发",
              key: "收尾"
            }
          ]
        }
      },
      {
        title: "爆发循环",
        type: "burst",
        content: {
          desc: "竞技场双战狂爆发，最后3秒内打出",
          phases: [
            {
              name: "爆发",
              steps: [
                {
                  skill: "阵云1段",
                  effect: "封轻功"
                },
                {
                  skill: "盾猛1段",
                  effect: "击倒"
                },
                {
                  skill: "盾猛2段",
                  effect: "封轻功"
                },
                {
                  skill: "盾飞1段",
                  effect: "封内+3血怒"
                },
                {
                  skill: "阵云2段",
                  effect: "封轻功"
                },
                {
                  skill: "闪刀1段",
                  effect: "战狂①",
                  highlight: true
                },
                {
                  skill: "阵云3段",
                  effect: "封轻功+3血怒"
                },
                {
                  skill: "闪刀2段",
                  effect: "战狂②",
                  highlight: true
                }
              ]
            }
          ]
        }
      },
      {
        title: "注意事项",
        type: "tips",
        content: {
          pros: [
            "盾壁提供解控+免控+护盾，容错率高",
            "30%血量护盾+解控，生存能力强",
            "门派轻功+盾壁双解控"
          ],
          cons: [
            "无盾墙攒血怒，绝招爆发较弱",
            "战狂触发频率低，CD循环较慢",
            "带斩刀牺牲爆发，带闪刀牺牲控制"
          ],
          tips: [
            "盾壁用于应急：被控时再用",
            "打完连招后无盾系技能可用，不要急着收盾",
            "擎刀状态下用隐刀普攻或聂云位移规避",
            "控制中战狂 = 80%减疗（控制50%+战狂30%）"
          ]
        }
      }
    ]
  },
  "shield-wall-control": {
    id: "shield-wall-control",
    name: "斩刀控制流",
    tag: "进阶",
    tagClass: "advanced",
    description: "保留双战狂爆发的同时增加斩刀控制，适合配合高输出队友",
    heroIcon: "⚔️",
    heroColor: "#ff9800",
    slides: [
      {
        title: "技能与秘籍",
        type: "skills-books",
        content: {
          skills: [
            {
              name: "盾猛",
              type: "shield",
              desc: "核心控制+减大招CD",
              book: "刀系技能每消耗一层血怒，降低本招式3秒调息",
              bookNote: "核心秘籍"
            },
            {
              name: "盾飞",
              type: "shield",
              desc: "切刀增伤+重置刀系CD",
              book: "调息增加5秒，清除刀系招式调息时间",
              bookNote: "重置斩刀CD"
            },
            {
              name: "斩刀",
              type: "blade",
              desc: "3秒眩晕+击下马",
              book: "3秒眩晕，返还下次刀系技能调息",
              bookNote: "控制核心"
            },
            {
              name: "盾墙",
              type: "shield",
              desc: "减伤免控+攒血怒",
              book: "盾墙姿态每被攻击3次，获得1秒盾立",
              bookNote: "增加免控"
            }
          ],
          ultimate: {
            name: "阵云结晦",
            desc: "封轻功+免控+追击+3血怒"
          }
        }
      },
      {
        title: "奇穴选择",
        type: "talents",
        content: {
          talents: [
            {
              layer: "第一层",
              pick: "镇关",
              reason: "盾系技能获得盾立"
            },
            {
              layer: "第二层",
              pick: "睥睨",
              reason: "攻击低血量目标增伤10%"
            },
            {
              layer: "第三层",
              pick: "战狂",
              reason: "3层血怒触发爆发+减疗"
            },
            {
              layer: "第四层",
              pick: "阵云结晦",
              reason: "多段封轻功+追击"
            }
          ]
        }
      },
      {
        title: "控制链循环",
        type: "combo",
        content: {
          desc: "开局攒满3层血怒后，斩刀起手控制链",
          steps: [
            {
              skill: "斩刀",
              effect: "眩晕3秒",
              key: "先手控制"
            },
            {
              skill: "盾猛1段",
              effect: "击倒3秒",
              key: "无缝衔接"
            },
            {
              skill: "盾猛2段",
              effect: "封轻功3秒",
              key: "续控"
            },
            {
              skill: "盾飞1段",
              effect: "重置斩刀",
              key: "准备二轮"
            }
          ]
        }
      },
      {
        title: "绝招控制链",
        type: "burst",
        content: {
          desc: "盾墙内攒3层血怒，绝招期间打出长控制链",
          phases: [
            {
              name: "准备",
              steps: [
                {
                  skill: "盾墙",
                  effect: "进盾墙"
                },
                {
                  skill: "盾舞(普攻)",
                  effect: "+1层血怒"
                },
                {
                  skill: "盾猛(盾墙内)",
                  effect: "击倒+攒3层血怒"
                }
              ]
            },
            {
              name: "爆发",
              steps: [
                {
                  skill: "阵云1段",
                  effect: "封轻功"
                },
                {
                  skill: "斩刀",
                  effect: "眩晕+战狂",
                  highlight: true
                },
                {
                  skill: "阵云2段",
                  effect: "封轻功"
                },
                {
                  skill: "盾猛1段",
                  effect: "击倒"
                },
                {
                  skill: "盾猛2段",
                  effect: "封轻功"
                },
                {
                  skill: "盾飞",
                  effect: "重置斩刀"
                },
                {
                  skill: "阵云3段",
                  effect: "封轻功+3血怒"
                },
                {
                  skill: "斩刀",
                  effect: "递减眩晕+战狂",
                  highlight: true
                }
              ]
            }
          ]
        }
      },
      {
        title: "注意事项",
        type: "tips",
        content: {
          pros: [
            "保留双战狂爆发的同时增加斩刀控制",
            "适合配合高输出但无控制的队友",
            "盾墙内战狂触发多，CD循环快"
          ],
          cons: [
            "牺牲3战狂爆发，只剩双战狂",
            "只有门派轻功解控",
            "需要队友有输出能力"
          ],
          tips: [
            "斩刀起手眩晕，盾猛击倒无缝衔接",
            "第二斩刀切奶或位移规避",
            "盾飞带重置秘籍，可在奶妈和DPS间转火",
            "斩刀眩晕在盾猛击倒过程中不生效"
          ]
        }
      }
    ]
  },
  "pure-support": {
    id: "pure-support",
    name: "纯洗脚流",
    tag: "辅助",
    tagClass: "support",
    description: "放弃盾飞，生存拉满，双解控+盾墙长时间免控，纯辅助定位",
    heroIcon: "💚",
    heroColor: "#2196f3",
    slides: [
      {
        title: "技能与秘籍",
        type: "skills-books",
        content: {
          skills: [
            {
              name: "盾猛",
              type: "shield",
              desc: "核心控制",
              book: "眩晕3秒（非击倒）",
              bookNote: "控制变体"
            },
            {
              name: "盾墙",
              type: "shield",
              desc: "长时间免控减伤",
              book: "队友免控+减伤35%",
              bookNote: "团队辅助"
            },
            {
              name: "斩刀",
              type: "blade",
              desc: "控制衔接",
              book: "3秒眩晕",
              bookNote: "控制核心"
            },
            {
              name: "盾壁",
              type: "shield",
              desc: "解控+护盾",
              book: "队友获得15%血量护盾",
              bookNote: "团队保护"
            }
          ],
          ultimate: {
            name: "阵云结晦",
            desc: "封轻功+免控+追击"
          },
          note: "放弃盾飞，生存能力拉满"
        }
      },
      {
        title: "奇穴选择",
        type: "talents",
        content: {
          talents: [
            {
              layer: "第一层",
              pick: "镇关",
              reason: "盾系技能获得盾立"
            },
            {
              layer: "第二层",
              pick: "睥睨",
              reason: "增伤"
            },
            {
              layer: "第三层",
              pick: "战狂",
              reason: "减疗"
            },
            {
              layer: "第四层",
              pick: "阵云结晦",
              reason: "封轻功+免控"
            }
          ]
        }
      },
      {
        title: "注意事项",
        type: "tips",
        content: {
          pros: [
            "生存拉满：双解控+盾墙长时间免控减伤",
            "双解控：门派轻功+盾壁",
            "盾猛+斩刀都有控制"
          ],
          cons: [
            "几乎没有伤害，纯辅助定位",
            "无盾飞，血怒不足，战狂触发少",
            "无盾飞重置刀系CD",
            "需要队友有足够输出"
          ],
          tips: [
            "专注保护队友，控制敌人",
            "盾墙秘籍提供队友免控+减伤",
            "盾壁秘籍给队友护盾",
            "适合33配合高输出队友"
          ]
        }
      }
    ]
  }
};
const buildsData = {
  builds
};
export {
  buildsData as b
};
