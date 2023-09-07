import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './theme.js'
import path from 'path'

export default defineUserConfig({
  base: '/src/',

  lang: 'zh-CN',
  title: 'Simon Hsia',
  description: 'Simon Hsia 的博客',
  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    '@theme-hope/modules/blog/components/InfoPanel': path.resolve(
      __dirname,
      './components/Empty.vue'
    )
  },
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      hotKeys: []
      // 为分类和标签添加索引
      // customFields: [
      //   {
      //     getter: page => page.frontmatter.category,
      //     formatter: '分类：$content'
      //   },
      //   {
      //     getter: page => page.frontmatter.tag,
      //     formatter: '标签：$content'
      //   }
      // ]
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false
})
