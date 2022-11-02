// blog/.vuepress/config.ts
import { defineConfig } from "vuepress/config";
var config_default = defineConfig({
  title: "\u4E50",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    dateFormat: 'YYYY-MM-DD',
    docsDir: "packages/docs/docs",
    nav: [
      { text: "Home", link: "/" },
      { text: "\u4EE3\u7801", link: "/code/" },
      { text: "\u9762\u8BD5\u8BB0\u5F55", link: "/interview/" }
    ]
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
            pagination: 10
          },
        ]
      }
    ]
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYmxvZy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIlx1NEU1MFwiLFxuICB0aGVtZTogJ0B2dWVwcmVzcy90aGVtZS1ibG9nJyxcbiAgdGhlbWVDb25maWc6IHtcbiAgICByZXBvOiBcInZ1ZWpzL3Z1ZXByZXNzXCIsXG4gICAgZWRpdExpbmtzOiB0cnVlLFxuICAgIGRvY3NEaXI6IFwicGFja2FnZXMvZG9jcy9kb2NzXCIsXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6IFwiSG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NEVFM1x1NzgwMVwiLGxpbms6IFwiL2NvZGUvXCJ9LFxuICAgICAgeyB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1OEJCMFx1NUY1NVwiLCBsaW5rOiBcIi9pbnRlcnZpZXcvXCIgfSxcbiAgICBdLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgW1xuICAgICAgXCJAdnVlcHJlc3MvYmxvZ1wiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RvcmllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFVuaXF1ZSBJRCBvZiBjdXJyZW50IGNsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICBpZDogXCJjb2RlXCIsXG4gICAgICAgICAgICAvLyBUYXJnZXQgZGlyZWN0b3J5XG4gICAgICAgICAgICBkaXJuYW1lOiBcImNvZGVcIixcbiAgICAgICAgICAgIC8vIFBhdGggb2YgdGhlIGBlbnRyeSBwYWdlYCAob3IgYGxpc3QgcGFnZWApXG4gICAgICAgICAgICBwYXRoOiBcIi9jb2RlL1wiLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogMTBcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICBdLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBRUEsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTTtBQUFBLE1BQ3RCLEVBQUUsTUFBTSxnQkFBSyxNQUFNO0FBQUEsTUFDbkIsRUFBRSxNQUFNLDRCQUFRLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHMUIsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsYUFBYTtBQUFBLFVBQ1g7QUFBQSxZQUVFLElBQUk7QUFBQSxZQUVKLFNBQVM7QUFBQSxZQUVULE1BQU07QUFBQSxZQUNOLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
