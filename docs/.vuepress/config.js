module.exports = {
  title: 'fyz-ui',
  description: 'fyz-ui官方文档',
  base: '/', // '/build/':网站会被部署到一个非根路径: build
  // webpack
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },
  // markdown 配置
  markdown: {
    lineNumbers: true
  },

  // 导航、sidebar、主题
  themeConfig: {
    logo: '/head.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '选择语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '中文', link: '/' },
          { text: 'English', link: '/en/' }
        ]
      },
      { text: 'vuepress', link: 'https://vuepress.vuejs.org/zh/guide/getting-started.html', target: '_blank' },
      { text: 'Markdown', link: '/markdown/' },
      { text: 'Github', link: 'https://google.com' },
    ],
    // navbar: false,  // false禁用导航栏
    sidebar: {
      '/guide/': [
        {
          title: 'component-a',   // 必要的
          path: '/guide/component-a/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            '/',
            'component-a',
            'component-b',
          ]
        },
        {
          title: 'component-b',   // 必要的
          path: '/guide/component-b/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'component-a',
            'component-b',
          ]
        },
        {
          title: 'Group 2',
          children: [ /* ... */],
          initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
      ],
      '/markdown/': [
        {
          title: 'Markdown 语法',   // 必要的
          path: '/markdown/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
          ]
        }
        // '',     /* /foo/ */
        // 'one',  /* /foo/one.html */
        // 'two'   /* /foo/two.html */
      ]
    },

    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'home', link: '/en/' },
          { text: 'introduce', link: '/en/guide/' },
          { text: 'Markdown', link: '/en/markdown/' },
          { text: 'vuepress', link: 'https://vuepress.vuejs.org/zh/guide/getting-started.html', target: '_blank' },
          { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              title: 'component-a',   // 必要的
              path: '/en/guide/component-a/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 2,    // 可选的, 默认值是 1
              children: [
                '/',
                'component-a',
                'component-b',
              ]
            },
            {
              title: 'component-b',   // 必要的
              path: '/en/guide/component-b/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                'component-a',
                'component-b',
              ]
            },
            {
              title: 'Group 2',
              children: [ /* ... */],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ],
          '/en/markdown/': [
            {
              title: 'Markdown 语法',   // 必要的
              path: '/en/markdown/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 2,    // 可选的, 默认值是 1
              children: [
              ]
            }
          ]
        },
      },
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: 'vuepress', link: 'https://vuepress.vuejs.org/zh/guide/getting-started.html', target: '_blank' },
          { text: 'Markdown', link: '/markdown/' },
          { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'component-a',   // 必要的
              path: '/guide/component-a/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 2,    // 可选的, 默认值是 1
              children: [
                '/',
                'component-a',
                'component-b',
              ]
            },
            {
              title: 'component-b',   // 必要的
              path: '/guide/component-b/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                'component-a',
                'component-b',
              ]
            },
            {
              title: 'Group 2',
              children: [ /* ... */],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ],
          '/markdown/': [
            {
              title: 'Markdown 语法',   // 必要的
              path: '/markdown/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 2,    // 可选的, 默认值是 1
              children: [
              ]
            }
            // '',     /* /foo/ */
            // 'one',  /* /foo/one.html */
            // 'two'   /* /foo/two.html */
          ]
        },
      }
    }
  },

  // 多语言
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: '中文（zh-CN）', // 将会被设置为 <html> 的 lang 属性
      title: 'fyz-ui',
      description: 'Vue-powered Static Site Generator',
    },
    '/en/': {
      lang: 'English（en-US）',
      title: 'fyz-ui',
      description: 'Vue 驱动的静态网站生成器',
    }
  }

}