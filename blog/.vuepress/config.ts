import { defineConfig } from "vuepress/config";

export default defineConfig({
  title: "乐",
  base: '/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
    nav: [
      { text: "Home", link: "/" },
      { text: "代码",link: "/code/"},
      { text: "面试记录", link: "/interview/" },
    ],
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // 当前分类的唯一 ID
            id: 'post',
            // 目标文件夹
            dirname: '_posts',
            // `entry page` (或者 `list page`) 的路径
            path: '/',
            pagination: {
              lengthPerPage: 10
            }
          },
        ],
      },
    ],
  ],
});