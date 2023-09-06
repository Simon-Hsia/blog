import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  // '/': [
  //   '',
  //   {
  //     text: '如何使用',
  //     icon: 'laptop-code',
  //     prefix: 'demo/',
  //     link: 'demo/',
  //     children: 'structure'
  //   },
  //   {
  //     text: '文章',
  //     icon: 'book',
  //     prefix: 'posts/',
  //     children: 'structure'
  //   },
  //   'intro',
  //   'slides'
  // ],
  '/articles/': 'structure',
  '/note/C': 'structure',
  '/note/C++&QT': 'structure',
  '/projects/lrc 歌词解析': 'structure',
  '/projects/工业控制 GUI': 'structure',
  '/projects/智能音响': 'structure'
})
