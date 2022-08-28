const sidebar = {
  '/': [
    { text: '快速开始', items: [] },
    {
      text: '通用',
      items: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    // { text: '导航' },
    // { text: '反馈' },
  ],
};

const config = {
  title: 'juju-ui',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
