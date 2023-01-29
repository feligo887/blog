---
title: css Modules原理解析
date: 2022-12-17
tag: 
  - sourceCode
author: December
location: wenchang 
---
## 前言

在我们使用webpack或者其他构建工具，html的模块化方案有：ejs、SPA组件化，js的模块化方案：CommonJS、ES Modules，css模块化方案有：css Modules和css-in-js，今天我们介绍最基础的css-loader和style-loader做模块化，也是学习成本最低的一种。

### css-loader和style-loader帮助我们做了什么

现代项目构建工具中，css都是使用 import 在js文件中引用，但是在打包之后我们又会在dist/inde.html文件中看到，会多出几个 style 标签帮我们自动引入。但是两个loader的分工不同，作用也不尽相同。

### css-loader 做了什么

css-loader 源码不算复杂，但是压缩的代码和繁复的函数名称也会让人看的也是很头疼，简单的说css-loader内部主要有以下的功能：
- 模块缓存（webpack_module_cache）
- 模块加载（webpack_require__(moduleId)）
- 
 
### css-loader 怎么执行

1. 格式化一个空容器 exports:{}
2. 传入css文件路径，并加载模块；查询缓存是否有该文件，有就执行，没有就存入存储，在 exports 和  webpapk-modules 存入。
3. souremap转译，向内部一个 arr 对象 push 数据，返回给 module.exports，变成一个css Modules对象。

### style-loader 做了什么
把 css-loader 生成的css Modules对象，转换成带有 style 标签的DOM插入到网页的 title 中。

### css-loader 怎么执行
- 定义对象（options），并添加DOM 操作方法。
- 定义对象（obj），并把css Modules对象的数据，映射到obj。
- 调用 DOMapi，先在页面插入 style 标签，此时标签内还没有内容。
- 判断obj数据，如果为新数据就根据 obj 对像，判断添加 meta 等属性然后，把输出的内容插入到 style 标签。

## 最后
根据上述的解析，所以我们在 webpack 配置时候，根据从右至左的执行原则，应该先把 css-loader 放在右边，style-loader放在左边。生成css Modules对象在插入到页面中。