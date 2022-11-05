import { defineConfig } from "vuepress/config";

export default defineConfig({
  title: "高产",
  base: '/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
    nav: [
      { text: "Home", link: "/" },
      { text: "代码",link: "/code/"},
      { text: "面试", link: "/interview/" },
    ],
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    [
      "@vuepress/blog",
      {
        directories: [
          // {
          //   id: 'post',
          //   dirname: '_post',
          //   path: '/',
          // },
          {
            id: 'code',
            dirname:'code',
            path: '/code/',
            pagination: {
              lengthPerPage: 10
            }
          },
          {
            id: 'interview',
            dirname: 'interview',
            path: '/interview/',
            pagination: {
              lengthPerPage: 10
            }
          }
        ],
      },
    ],
  ],
});