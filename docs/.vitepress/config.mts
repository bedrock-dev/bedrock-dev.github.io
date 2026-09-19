import { defineConfig } from 'vitepress'

const searchZh = {
  translations: {
    button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
    modal: {
      displayDetails: '显示详细列表',
      resetButtonTitle: '重置搜索',
      backButtonTitle: '关闭搜索',
      noResultsText: '没有找到结果：',
      footer: {
        selectText: '选择',
        selectKeyAriaLabel: '回车',
        navigateText: '切换',
        navigateUpKeyAriaLabel: '上箭头',
        navigateDownKeyAriaLabel: '下箭头',
        closeText: '关闭',
        closeKeyAriaLabel: 'Esc'
      }
    }
  }
}

export default defineConfig({
  title: 'BedrockDev',
  description: 'Trapdoor & BedrockMap 文档',
  // bm 教程暂未上线，先不构建（源文件保留在 bm/guide/）
  srcExclude: ['bm/guide/**'],
  // 顶层 themeConfig 是所有语言共用的默认值，会被各 locale 覆盖
  themeConfig: {
    logo: '/imgs/logo.svg',
    search: {
      provider: 'local',
      options: { locales: { root: searchZh } }
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'BedrockDev',
      description: 'Trapdoor & BedrockMap 文档',
      themeConfig: {
        // 英文只有首页和 bm，按路径映射会指向不存在的页面，统一切到语言首页
        i18nRouting: false,
        nav: [
          { text: 'Trapdoor', link: '/tr/' },
          { text: 'BedrockMap', link: '/bm/' },
          { text: '文章', link: '/docs/' }
        ],
        sidebar: {
          '/tr/': [
            {
              text: '基本使用',
              collapsed: false,
              items: [
                { text: '1. 介绍', link: '/tr/' },
                { text: '2. 安装和使用', link: '/tr/use' },
                { text: '3. 功能介绍', link: '/tr/func' },
                { text: '4. 配置和自定义', link: '/tr/config' }
              ]
            },
            {
              text: '高级功能',
              collapsed: false,
              items: [
                { text: '5. Shortcuts', link: '/tr/shortcuts' },
                { text: '6. 假人脚本', link: '/tr/scripts' },
                { text: '7. 数据缓存', link: '/tr/cache_data' },
                { text: '8. 开发和部署', link: '/tr/dev' },
                { text: '9. Q&A', link: '/tr/q&a' }
              ]
            },
            {
              text: '外部链接',
              collapsed: false,
              items: [
                { text: '源码', link: 'https://github.com/bedrock-dev/trapdoor-ll' },
                { text: '下载', link: '/tr/download' }
              ]
            }
          ]
        },
        outline: {
          level: [2, 3],
          label: '本页目录'
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        skipToContentLabel: '跳到正文',
        langMenuLabel: '切换语言'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'BedrockDev',
      description: 'Trapdoor and BedrockMap documentation',
      themeConfig: {
        i18nRouting: false,
        nav: [{ text: 'BedrockMap', link: '/en/bm/' }],
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        darkModeSwitchLabel: 'Appearance',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        skipToContentLabel: 'Skip to content',
        langMenuLabel: 'Change language'
      }
    }
  }
})
