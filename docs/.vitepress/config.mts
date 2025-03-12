import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/technology/',
  title: "LargeRice16pro's Blog",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Python', link: '/python' }
    ],

    sidebar: {
      '/about/': [
        {
          text: '关于我',
          items: [
            { text: '我是谁', link: '/about/我是谁' },
            { text: '获奖情况', link: '/about/获奖情况' },
            { text: '实习-工作经历', link: '/about/实习-工作经历'},
          ]
        }
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
