module.exports = {
  base: '/w-element/',
  dest: './dist',
  port: 9090,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'w-element',
      description: '基于elementui的组件库文档',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
      },
    ],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    // 1.接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
    lastUpdated: '最后更新时间',
    // 2.设置true，开启最后更新时间
    lastUpdated: true,
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/idenet/w-element',
    // 自定义仓库链接文字。
    repoLabel: '仓库地址',
    nav: [{ text: '指南', link: '/pages/guide/' }],
    sidebar: [
      {
        title: '组件',
        children: [
          '/pages/guide/',
          '/pages/guide/button',
          '/pages/guide/checkbox',
          // 'date',
          '/pages/guide/input',
          '/pages/guide/radio',
          '/pages/guide/select',
          '/pages/guide/switch',
          '/pages/guide/form',
          '/pages/guide/table',
        ],
      },
      {
        title: '工具',
        children: ['/pages/common/', '/pages/common/commonMixins'],
      },
    ],
  },
  cache: false,
  title: 'w-element',
  description: '基于elementui的组件库文档',
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
  ],
}
