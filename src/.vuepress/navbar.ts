import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: '文章',
    icon: 'book',
    link: '/articles/'
  },
  {
    text: '笔记',
    icon: 'pen-to-square',
    prefix: '/note/',
    children: [
      {
        text: 'C语言',
        icon: 'c',
        link: 'C/'
      },
      {
        text: 'C++&QT',
        icon: 'c',
        link: 'C++&QT/'
      }
    ]
  },
  {
    text: '项目',
    icon: 'book',
    prefix: '/projects/',
    children: [
      {
        text: 'lrc 歌词解析',
        link: 'lrc 歌词解析/'
      },
      {
        text: '工业控制 GUI',
        link: '工业控制 GUI/'
      },
      {
        text: '智能音响',
        link: '智能音响/'
      }
    ]
  },
  {
    text: '关于',
    icon: 'share',
    // icon: '/src/.vuepress/public/assets/icon/about.svg',
    children: [
      {
        text: '关于我',
        link: 'about/'
      },
      {
        text: 'GitHub',
        icon: 'GitHub',
        link: 'https://github.com/Simon-Hsia'
      },
      {
        text: 'BiliBili',
        icon: 'BiliBili',
        link: 'https://space.bilibili.com/454274948/'
      }
    ]
  }
])
