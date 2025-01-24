---
title: TypeScript装饰器
date: 2025-01-24
tag:
  - JavaScript
  - TypeScript
author: Macho
location: chengdu
---

### TypeScript装饰器

> 在 TypeScript 中，装饰器（Decorators）是一种特殊的语法，用于为类、类的属性、方法或参数添加额外的功能。它是一个函数，可以通过注解的方式修改或扩展目标的行为。
> 装饰器主要用于元编程，它类似于一种“语法糖”，允许开发者以更清晰和声明式的方式实现功能。

#### 装饰器的分类

1. 类装饰器
   用于修改或替换整个类。
2. 方法装饰器
   用于扩展或修改类方法的行为。
3. 访问器装饰器
   用于修改 getter 或 setter 的行为。
4. 属性装饰器
   用于扩展或修改类的属性。
5. 参数装饰器
   用于获取方法参数的元信息。

**使用装饰器的前提**

启用装饰器

```json
{
  "//": "在 tsconfig.json 中启用 experimentalDecorators：",
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

#### 装饰器的基本语法

**1. 类装饰器**

```javascript
// 类装饰器接受一个参数：被装饰的类的构造函数。
function LogClass( target: Function ) {
    console.log( `Class Decorated: ${ target.name }` )
}

@LogClass class MyClass {
    // ...
}

// 输出：Class Decorated: MyClass
```

**常见用途：**

- 添加静态属性
- 替换类的构造函数
- 注入元信息

**2. 方法装饰器**

```javascript
/**
 * 方法装饰器接受三个参数：
 * 1. target：类的原型。
 * 2. key：方法名。
 * 3. descriptor：属性描述符，可用于修改方法行为。
 * **/
function LogMethod( target: any, key: string, descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value

    descriptor.value = function ( ...args: any[] ) {
        console.log( `Method called: ${ key }, args: ${ args }` )
        return originalMethod.apply( this, args )
    }
}

class MyClass {
    @LogMethod
    sayHello( name: string ) {
        console.log( `Hello, ${ name }` )
    }
}

const instance = new MyClass()
instance.sayHello( 'Alice' )
// 输出：
// Method called: sayHello, args: Alice
// Hello, Alice

// 输出：Class Decorated: MyClass
```

**常见用途：**

- 添加静态属性
- 替换类的构造函数
- 注入元信息

**3. 属性装饰器**

```javascript
/**
 * 属性装饰器接收两个参数：
 * 1. target：类的原型。
 * 2. key：属性名。
 * **/
function LogProperty(target: any, key: string) {
   console.log(`Property Decorated: ${key}`);
}

class MyClass {
   @LogProperty
   myProp: string;
}

// 输出：Property Decorated: myProp
```

**常见用途：**

- 注入依赖（DI）
- 添加元信息（如 Reflect.metadata）


**4. 参数装饰器**

```javascript
/**
 * 参数装饰器接收三个参数：
 * 1. target：类的原型。
 * 2. key：方法名。
 * 3. index：参数的索引。
 * **/
function LogParameter( target: any, key: string, index: number ) {
    console.log( `Parameter Decorated: ${ key }, index: ${ index }` )
}

class MyClass {
    sayHello( @LogParameter name: string ) {
        console.log( `Hello, ${ name }` )
    }
}

// 输出：Parameter Decorated: sayHello, index: 0
```

#### 装饰器的执行顺序

装饰器的执行顺序遵循以下规则：
1.	属性装饰器 → 参数装饰器 → 方法装饰器 → 类装饰器。
2.	先执行内层装饰器，再执行外层装饰器（从下往上，从右往左）。

#### 实际运用

```javascript


```
