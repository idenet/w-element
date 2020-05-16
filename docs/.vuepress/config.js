module.exports = {
  base: '/w-element/',
  dest: './dist',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'w-element',
      description: '基于elementui的组件库文档',
    },
  },
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
  //     },
  //   ],
  //   ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }],
  // ],
  themeConfig: {
    nav: [{ text: '指南', link: '/pages/guide/' }],
    sidebar: {
      '/pages/guide/': [
        {
          title: '组件',
          collapsable: true,
          sidebarDepth: 1,
          children: ['button'],
        },
      ],
    },
  },
  cache: false,
  title: 'w-element',
  description: '基于elementui的组件库文档',
  plugins: [
    [
      'demo-code',
      {
        jsLibs: [
          // umd
          'https://unpkg.com/element-ui/lib/index.js',
          'https://unpkg.com/vue/dist/vue.js',
        ],
        cssLibs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
      },
    ],
  ],
}
