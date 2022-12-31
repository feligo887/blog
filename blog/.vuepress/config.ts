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
      { text: "ECMAScript", link: "/" },
      { text: "源码解析",link: "/sourceCode/"},
      { text: "面试", link: "/interview/" },
    ],
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: 'ECMAScript',
            dirname: 'ECMAScript',
            path: '/',
          },
          {
            id: 'sourceCode',
            dirname:'sourceCode',
            path: '/sourceCode/',
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