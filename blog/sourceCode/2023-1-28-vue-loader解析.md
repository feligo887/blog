---
title: vue-loader源码解析
date: 2023-01-28
tag: 
  - sourceCode
author: December
location: wenchang 
---

### 前置知识点

#### webpack-loader执行流程
- loader是从下至上执行（像栈），所以在config.js要合理配置
- 每个loader上都有一个.pitch方法（可选），loader文件中，会先执行pitch。
- pitch的作用：拦截Loader的执行、预处理。
- pitch处理的数据只能在本文件生效，loader本身处理的可以透传。
- 所有的loader中的pitch执行完毕之后才会执行loader本身。

**官方事例：**
```
webpack.config.js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: [
          'a-loader',
          'b-loader',
          'c-loader'
        ]
      }
    ]
  }
};
```
```
console.log

|- a-loader `pitch`
  |- b-loader `pitch`
    |- c-loader `pitch`
      |- requested module is picked up as a dependency
    |- c-loader normal execution
  |- b-loader normal execution
|- a-loader normal execution
```
#### vue-loader循环解析
- .vue模板中 template style script 等，被分割成块。
- 在读取 .vue 文件，这些块会被loader不断引入（import），不断的读取.vue文件，不断引入，直到全被引入完毕。

#### 手动干预loader执行
- 所有loader 都不执行
```
 import ' - !${resourcePath}?vue&type=template&id=12345'; /n${content}'
```
- 只执行某个loader
```
=import '- !${path. resolve(__dirname, 'Loader2.js')
}!${resourcePath}?vue&type=template&id=12345";\n${content}
```
- 

### vue-loader-plugin的做了什么
1. 在vue-loader-plugin添加一个标记，判断vue-loader-plugin是否存在
2. 收集webpack 引用的所有rules，拷贝并用webpack转化成 rulesSet 能被loader使用
3. 动态添加其余的loader，例如：template-loader、pitcher-loader

### vue-loader的做了什么