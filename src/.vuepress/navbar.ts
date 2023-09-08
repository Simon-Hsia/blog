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
        text: '哆啦A梦桌宠助手',
        link: '哆啦A梦桌宠助手/'
      },
      {
        text: '个人博客',
        link: '个人博客/'
      },
      {
        text: '尚品汇电商购物项目',
        link: '尚品汇电商购物平台前端项目/'
      },
      {
        text: '大事件文章管理系统',
        link: '大事件文章管理系统/'
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
