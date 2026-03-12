import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '剑网三无界端PVP攻略',
  description: '剑网三无界端全门派PVP新手攻略',
  lang: 'zh-CN',
  
  srcExclude: ['**/superpowers/**'],
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;600&display=swap', rel: 'stylesheet' }]
  ],
  
  themeConfig: {
    nav: [
      { text: '门派选择', link: '/' }
    ],
    
    sidebar: {
      '/cangyun/': [
        {
          text: '苍云',
          items: [
            { text: '首页', link: '/cangyun/' },
            { text: '技能详解', link: '/cangyun/skills' },
            { text: '流派选择', link: '/cangyun/builds' },
            { text: 'PVP战术', link: '/cangyun/tactics' },
            { text: '配装指南', link: '/cangyun/equipment' }
          ]
        }
      ]
    },
    
    footer: {
      message: '攻略内容仅供参考，实际游戏内容以官方版本为准',
      copyright: '剑网三无界端PVP攻略 v2.0'
    }
  }
})
