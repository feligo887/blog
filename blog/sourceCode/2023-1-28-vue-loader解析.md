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
3. 动态添加其余的loader，例如：template-loader、pitcher-loader，并把loader添加到执行队列。

### vue-loader的做了什么

**三个块 （template、css、js）都是这样重复，执行顺序是 template -> js -> css**

#### 第一阶段
1. 在vue-loader-plugin添加一个标记，判断vue-loader-plugin是否存在
2. 解析代码：获取文件路径、AST抽象代码树，拆分代码块（html，css，js等）生成一个 has值。
3. 判断是代码所在环境，是否js语法糖，template渲染方式、css模块化等，生成新的块名：{名称}{type}{has}，
4. 根据块的新名称，生成新的引用路径，并动态引用该模块（此时的模块不是真实的代码）。
5. 增加热更新的源码，方便修改代码时快速引用。

#### 第二阶段
1. 通过pitcher的resourceQuery方法，过滤掉非vue block
2. 去除vue-loader不能使用的 ESlint-loader，调用合适的loader（template-loader、css-loader、js-loader等）解析，
3. 生成一个带有loader地址的新引用路径，return 新路径并结束 后续所有loader的执行。

#### 第三阶段
1. 进入pitcher 生成新的模块源码，再次执行 vue-loader。
2. 判断不同的模块，执行对应的 loader（template-loader、css-loader、js-loader等）
3. template 生成 render 函数， js 生成 带有 script 标签的块， css 生成带有 style 标签的块


### 简单总结
1. 利用webpack机制，初始化阶段执行plugin，会直接执行vue-loader-plugin。
2. vue-loader-plugin 在 loader 执行之前在 complier.hooks.compilation.tap 的钩子里面 定义了 vue-loader 的一个key，其作用是在执行loader 检查 vue-loader 是否执行
3. vue-loader-plugin 添加 解析.vue文件需要的loader，保证 vue-loader 能正常编译
4. webpack-loader的pitcher 拦截文件转为 js，不断调用 自身 寻找loader 编译代码生成带有loader标识的新路径。
5. 获取路径中源码内容，调用loader编程，成为最终的 render 函数 或者 code