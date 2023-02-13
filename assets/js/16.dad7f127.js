(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{324:function(e,a,t){"use strict";t.r(a);var n=t(5),l=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"新的声明方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新的声明方式"}},[e._v("#")]),e._v(" 新的声明方式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let a;\nconst b;\n")])])]),a("p",[e._v("与 var 声明变量的区别")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("不属于顶层window")])]),e._v(" "),a("li",[a("p",[e._v("不允许重复声明")])]),e._v(" "),a("li",[a("p",[e._v("不存在变量提升")])]),e._v(" "),a("li",[a("p",[e._v("暂时性死区")])]),e._v(" "),a("li",[a("ul",[a("li",[a("em",[e._v("暂时性死区：不能在变量声明之前使用变量")])])])]),e._v(" "),a("li",[a("p",[e._v("块级作用域")])])]),e._v(" "),a("h3",{attrs:{id:"解构赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值"}},[e._v("#")]),e._v(" 解构赋值")]),e._v(" "),a("ul",[a("li",[e._v("数组解构赋值")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let [a,b,c,d,e = 6] = [1,2,3,[4,5]];\n")])])]),a("ul",[a("li",[e._v("对象解构赋值")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let obj = {\n    name: 'admin',\n    uid: '001',\n    code: [111,222,333],\n};\n\nlet {name,uid,code:userCode} = obj;\n")])])]),a("h3",{attrs:{id:"es5中数组的遍历方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5中数组的遍历方式"}},[e._v("#")]),e._v(" ES5中数组的遍历方式")]),e._v(" "),a("ul",[a("li",[e._v("for循环")]),e._v(" "),a("li",[e._v("forEcah(): 没有返回，每个元素调用func")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * @param {*} item 正在遍历的元素\n * @param {*} index 正在遍历的元素下标\n * @param {*} array 正在遍历的数组本身\n * **/ \n\narr.forEach((item,index,array) => {\n    console.log('item,index,array: ', item,index,array);\n})\n")])])]),a("ul",[a("li",[e._v("map(): 返回新数组，每个新元素为调用func的结果")]),e._v(" "),a("li",[e._v("filter(): 返回符合func条件的元素数组")]),e._v(" "),a("li",[e._v("some(): 返回Boolean，判断某个元素是否符合func条件")]),e._v(" "),a("li",[e._v("every(): 返回Boolean，判断每个元素是否符合func条件")]),e._v(" "),a("li",[e._v("reduce(): 接受一个func作为累加器")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * @param {*} func方法\n *** @param {*} pre 上一次函数调用的值，第一次对应的是初始值\n *** @param {*} cur 正在处理的值\n *** @param {*} index 当前处理的值的下标\n *** @param {*} array 源数据\n * @param {*} 0 初始值 可以是0 可以是{} 也可以是[]\n * **/ \n let sum = arr.reduce((prev, cur, index, array) => {\n    return prev + cur\n }, 0)\n console.log(sum);\n")])])]),a("ul",[a("li",[e._v("for in 可以遍历数组的key，也能遍历对象的key，甚至能遍历到原型上。")])]),e._v(" "),a("h3",{attrs:{id:"es6中数组的遍历方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6中数组的遍历方式"}},[e._v("#")]),e._v(" ES6中数组的遍历方式")]),e._v(" "),a("ul",[a("li",[e._v("find(): 返回第一个通过判断条件的元素")]),e._v(" "),a("li",[e._v("findIndex(): 返回第一个通过判断条件的元素的key")]),e._v(" "),a("li",[e._v("for of循环: 遍历数组的每个元素")]),e._v(" "),a("li",[a("ul",[a("li",[e._v("values(): 遍历数组的每个元素")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("keys():遍历数组的每个元素的key")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("entries()：遍历数组的每个元素和key")])])])]),e._v(" "),a("h3",{attrs:{id:"es6中数组方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6中数组方法"}},[e._v("#")]),e._v(" ES6中数组方法")]),e._v(" "),a("ul",[a("li",[e._v("Array.from(): 把类数组和伪数组转化为真数组")]),e._v(" "),a("li",[e._v("Array.of(): 参数为单个数字时：声明长度为n的数组；长度为多个时：声明这些值为新的数组。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let arr = Array.of(3);\nconsole.log(arr.length); //3\n\nlet arr1 = Array.of(1, true, 'imooc', [1, 2, 3], {name: 'xiecheng'});\nconsole.log(arr1); // [1, true, 'imooc', [1, 2, 3], {ame: 'xiecheng'}]\n")])])]),a("ul",[a("li",[e._v("copyWithin(): 用数组的某些元素替换数组中的元素。")]),e._v(" "),a("li",[e._v("fill(): 填充数组")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let arr = Array.of(3).fill(null);\nconsole.log(arr); //[null,nbull,null]\nlet arr1 = [1,2,3,4,5];\narr.fill('test'.1,3);\nconsole.log('arr: ', arr);// [1,'test','test',4,5];\n\n")])])]),a("h3",{attrs:{id:"扩展运算符与rest参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符与rest参数"}},[e._v("#")]),e._v(" 扩展运算符与rest参数")]),e._v(" "),a("ul",[a("li",[e._v("扩展运算符:  把数组或者类数组展开变成用‘,’隔开的值")]),e._v(" "),a("li",[e._v("rest参数: 把逗号隔开的值，变成数组")])]),e._v(" "),a("h3",{attrs:{id:"箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[e._v("#")]),e._v(" 箭头函数")]),e._v(" "),a("ul",[a("li",[e._v("自身没有this，而是继承父级的this")]),e._v(" "),a("li",[e._v("不可以当作构造函数")]),e._v(" "),a("li",[e._v("不可以使用arguments对象（可以使用‘...’rest运算符）")])]),e._v(" "),a("h3",{attrs:{id:"对象方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象方法"}},[e._v("#")]),e._v(" 对象方法")]),e._v(" "),a("ul",[a("li",[e._v("属性简介表达")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let name = 'admin';\nlet age = 18;\nlet obj = {\n    name,\n    age,\n}\n")])])]),a("ul",[a("li",[e._v("属性名表达试")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let s = 'school'\nlet obj = {\n    [s]: '学校',\n    saySchool(){\n        console.log('好学校');\n    }\n")])])]),a("ul",[a("li",[e._v("Object.is(): 判断两个值是否严格相等")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("console.log('Object.is(2,'2'): ', Object.is(2,'2')); //  false\n")])])]),a("ul",[a("li",[e._v("Object.assign(): 合并对象,也可以返回一个合并对象")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let x = {\n    name: 'admin',\n    age: 18\n}\nlet y = {};\nObject.assign(y,x);// {name: 'admin',age: 18}\nlet z = Object.assign(y,x);\nconsole.log('z: ', z); // {name: 'admin',age: 18}\n")])])]),a("ul",[a("li",[e._v("in: 判断数组或者对象是否有某个key")]),e._v(" "),a("li",[e._v("对象遍历")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for(let key in obj){\n    console.log(key, obj[key])\n}\n\nObject.keys(obj).forEach(key => {\n    console.log(key, obj[key])\n})\n\nObject.getOwnPropertyNames(obj).forEach(key =>{\n     console.log(key, obj[key])\n})\n\nReflect.ownKeys(obj).forEach(key => {\n    console.log(key, obj[key])\n})\n")])])]),a("h3",{attrs:{id:"类与继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类与继承"}},[e._v("#")]),e._v(" 类与继承")]),e._v(" "),a("ul",[a("li",[e._v("ES5中的类与继承")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// ES5的类声明\n\n//  父类\nfunction People (name,age) {\n    //  实例属性\n    this.name = name;\n    this.age = age;\n}\n\n// 静态属性\nPeople.count = 0;\n\n// 静态方法\nPeople.getCount = function () {\n    return this.age;\n}\n\n// 实例方法\nPeople.prototype.getCount = function () {\n    return this.age;\n}\nvar people = new People('小','18');\n\nconsole.log('People.count: ', People.count);\n\n// 子类\n\n//  组合继承： 构造函数继承 + 原型继承\nfunction Child(name, age, height) {\n    People.call(this, name, age) // 继承属性： 构造函数继承\n    this.height = height\n}\n\n// 方法继承： 原型继承\nChild.prototype = new People();\n//  修改原型指针\nChild.prototype.constuctor = Child;\n\nlet child = new Child('wangcai', 18, 'white')\n")])])]),a("ul",[a("li",[e._v("ES6中的类与继承\n"),a("ul",[a("li",[e._v("class 语法糖：类声明")]),e._v(" "),a("li",[e._v("extends 语法糖：继承")]),e._v(" "),a("li",[e._v("spuer 语法糖：子类继承父类的属性")]),e._v(" "),a("li",[e._v("static 语法糖：静态属性（方法）的声明")]),e._v(" "),a("li",[e._v("constructor 语法糖：类里面的构造函数")]),e._v(" "),a("li",[e._v("get/set 对属性进行拦截")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// ES6的类声明\n\nclass People {\n    constructor (name, age) {\n        // 实例属性\n        this.name = name\n        this.age = age\n        this._sex = 0\n    }\n\n    //  实例化方法\n    showName () {\n        return this.name\n    }\n\n    get sex () {\n        if (this._sex === 1) {\n            return 'male'\n        } else if (this._sex === 0) {\n            return 'female'\n        } else {\n            return 'error'\n        }\n    }\n    set sex (val) { \n        // 1:male 0:female\n        if (val === 0 || val === 1) {\n            this._sex = val\n        }\n\n    }\n\n    // 静态属性: ES6之后才支持\n\n    static count = 0\n\n    //  静态方法\n    static getCount() {}\n}\n\n// 静态属性: ES6写法\n// People.count = 0\n\nlet people = new People('张三',18);\n\n// extends 关键字继承\nclass Child extends People {\n    constructor(name, age,heigth) {\n        // 属性继承\n        super(name, age)\n        this.heigth = heigth\n    }\n    showHeigth () {\n        return this.heigth\n    }\n}\n\nlet child = new Child('李四', 18, 185);\n")])])]),a("h4",{attrs:{id:"静态属性-方法-和实力属性-方法-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态属性-方法-和实力属性-方法-的区别"}},[e._v("#")]),e._v(" 静态属性（方法）和实力属性（方法）的区别：")]),e._v(" "),a("ol",[a("li",[e._v("静态属性（方法）是声明在类里面的")]),e._v(" "),a("li",[e._v("实例属性（方法）是声明在构造函数里面的")]),e._v(" "),a("li",[e._v("静态属性（方法）不需要类实例化且和实例属性（方法）不相通")]),e._v(" "),a("li",[e._v("静态属性（方法）的this是指向类本身")]),e._v(" "),a("li",[e._v("实例属性（方法）的this是指向实例化的对象上")])]),e._v(" "),a("h3",{attrs:{id:"set-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-数据结构"}},[e._v("#")]),e._v(" Set 数据结构")]),e._v(" "),a("ul",[a("li",[e._v("Set 是唯一值的集合。")]),e._v(" "),a("li",[e._v("每个值在 Set 中只能出现一次。")]),e._v(" "),a("li",[a("ul",[a("li",[a("em",[e._v("Set的值只能唯一，所以能别去重（基本类型），引用类型因为存储机制，Set的特性不能被很好的运用。")])])])]),e._v(" "),a("li",[e._v("一个 Set 可以容纳任何数据类型的任何值。")])]),e._v(" "),a("h3",{attrs:{id:"weakset-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakset-数据结构"}},[e._v("#")]),e._v(" WeakSet 数据结构")]),e._v(" "),a("ul",[a("li",[e._v("WeakSet只能添加对象")]),e._v(" "),a("li",[e._v("WeakSet 不能遍历，是因为成员都是弱引用")]),e._v(" "),a("li",[e._v("弱引用便于垃圾回收，防止内存泄漏")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let ws = new WeakSet()\nconst obj1 = {\n    name: 'imooc'\n}\nconst obj2 = {\n    age: 5\n}\nws.add(obj1)\nws.add(obj2)\n// ws.delete(obj1)\n")])])]),a("h3",{attrs:{id:"map-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-数据结构"}},[e._v("#")]),e._v(" Map 数据结构")]),e._v(" "),a("ul",[a("li",[e._v("Map的性能高于Object。")]),e._v(" "),a("li",[e._v("任何值都可以为key")])]),e._v(" "),a("h3",{attrs:{id:"weakmap-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakmap-数据结构"}},[e._v("#")]),e._v(" WeakMap 数据结构")]),e._v(" "),a("ul",[a("li",[e._v("WeakMap只接受对象作为键名（null除外）")]),e._v(" "),a("li",[e._v("WeakMap的键名所引用的对象都是弱引用。")]),e._v(" "),a("li",[e._v("弱引用便于垃圾回收，防止内存泄漏")])]),e._v(" "),a("h3",{attrs:{id:"数值扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值扩展"}},[e._v("#")]),e._v(" 数值扩展")]),e._v(" "),a("ul",[a("li",[e._v("Number.isFinite(n)： 判断n是否是有限数值")]),e._v(" "),a("li",[e._v("Number.isNaN(n)： 判断n是否是NaN")]),e._v(" "),a("li",[e._v("Number.parseInt(5.5)： 取整数")]),e._v(" "),a("li",[e._v("Number.parseFloat(5.5)： 取浮点数")]),e._v(" "),a("li",[e._v("Number.isInteger(5)： 判断是否是整数")]),e._v(" "),a("li",[e._v("Math.trunc(5)： 去除小数，返回整数（存在隐式转换）")]),e._v(" "),a("li",[e._v("Math.sign(1)： 判断参数是正书or负数or0（存在隐式转换）")])]),e._v(" "),a("h3",{attrs:{id:"reflect对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect对象"}},[e._v("#")]),e._v(" Reflect对象")]),e._v(" "),a("h4",{attrs:{id:"reflect对象-约等于-object对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect对象-约等于-object对象"}},[e._v("#")]),e._v(" Reflect对象 约等于 Object对象")]),e._v(" "),a("ul",[a("li",[e._v("Reflect.apply()")]),e._v(" "),a("li",[e._v("Reflect.defineProperty()")]),e._v(" "),a("li",[e._v("Reflect.has()")]),e._v(" "),a("li",[e._v("Reflect.ownKeys()")]),e._v(" "),a("li",[e._v("...")])]),e._v(" "),a("h3",{attrs:{id:"iterator-迭代器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterator-迭代器"}},[e._v("#")]),e._v(" Iterator 迭代器")]),e._v(" "),a("ul",[a("li",[e._v("让不支持遍历的结构可以遍历")])]),e._v(" "),a("h3",{attrs:{id:"module-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-模块化"}},[e._v("#")]),e._v(" Module 模块化")]),e._v(" "),a("ul",[a("li",[e._v("export： 命名倒出一个文件能倒出多次，必须使用{} 包含")]),e._v(" "),a("li",[e._v("import：倒入文件")]),e._v(" "),a("li",[e._v("as： 倒出设置别名")]),e._v(" "),a("li",[e._v("export default： 默认带出，一个倒出文件。只能有一个磨人倒出")])])])}),[],!1,null,null,null);a.default=l.exports}}]);