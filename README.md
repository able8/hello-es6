# hello-es6

ES6 各种新语法 入门了解  石川blue讲解


视频地址

- [b站 深入解读ES6系列(全18讲)
](https://www.bilibili.com/video/av20327829/)


看视频整理要点笔记:

----
- [hello-es6](#hello-es6)
    - [1.ES6怎么来的](#1es6%E6%80%8E%E4%B9%88%E6%9D%A5%E7%9A%84)
    - [2.ES6兼容性](#2es6%E5%85%BC%E5%AE%B9%E6%80%A7)
    - [3.变量 let 和 常量 const](#3%E5%8F%98%E9%87%8F-let-%E5%92%8C-%E5%B8%B8%E9%87%8F-const)
    - [4.函数-箭头函数](#4%E5%87%BD%E6%95%B0-%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
    - [5.函数-参数](#5%E5%87%BD%E6%95%B0-%E5%8F%82%E6%95%B0)
    - [6.解构赋值](#6%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)
    - [7.数组](#7%E6%95%B0%E7%BB%84)
    - [8.字符串](#8%E5%AD%97%E7%AC%A6%E4%B8%B2)
    - [9.面向对象-基础](#9%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1-%E5%9F%BA%E7%A1%80)
    - [10.面向对象应用](#10%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%BA%94%E7%94%A8)
    - [11.json](#11json)

----

## 1.ES6怎么来的

- ECMAScript 和 JavaScript
    - ECMA 是标准，JS 是实现
    - ECMAScript 简称 ECMA 或 ES

- 历史版本
    - 1996, ES1.0 Netscape 将 JS 提交给 ECMA 组织，ES 正式出现
    - 1999, ES3.0 被广泛支持
    - 2011, ES5.1 成为 ISO 国际标准
    - 2015, ES6.0 正式发布

## 2.ES6兼容性

- ES6(ES2015) 支持的环境 IE10+, Chrome, FireFox, 移动端, NodeJS
- 解决不兼容办法，编译、转换
    - 在线转换
    - 或者提前编译

- [Babel 中文网](https://www.babeljs.cn)
    - [Babel 入门教程 阮一峰](http://www.ruanyifeng.com/blog/2016/01/babel.html)
    - Babel 是一个 JavaScript 编译器
    - 一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行
    - 现在就用 ES6 编写程序，而不用担心现有环境是否支持

## 3.变量 let 和 常量 const

- var 的问题
    - 可以重复声明，没有报错和警告
    - 无法限制修改
    - 没有块级作用域， `{ }`

- let 和 const
    - 不能重复声明
    - 都是块级作用域, `{ }` 块内声明的，块外无效
    - let 是变量，可以修改
    - const 是常量，不能修改

- 块级作用域举例
    - 原来用 var 的方式，结果弹出的都是 3
    - 或者将变量 封装到函数里，限制作用域，但比较麻烦
    - 用 let 最简单，直接 var 改 let，解决作用域问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        window.onload= function () {
            /*
            var aBtn = document.getElementsByTagName('input')
            for (var i=0; i < aBtn.length; i++) {
                aBtn[i].onclick = function () {
                    alert(i)
                }
            }*/
            var aBtn = document.getElementsByTagName('input')
            for (let i = 0; i < aBtn.length; i++) {
                aBtn[i].onclick = function () {
                    alert(i)
                }
            }
            /*
            var aBtn = document.getElementsByTagName('input')
            for (var i = 0; i < aBtn.length; i++) {
                // 封装到函数里，限制作用域
                (function (i) {
                    aBtn[i].onclick = function () {
                        alert(i)
                    }
                })(i)
            }*/
        }
    </script>
</head>
<body>
    <input type="button" value="按钮1">
    <input type="button" value="按钮2">
    <input type="button" value="按钮3">
</body>
</html>
```

## 4.函数-箭头函数

- 箭头函数，就是函数的简写
    - 如果只有一个参数，`()` 可以省
    - 如果只有一个`return`，`{}`可以省

```js
// 普通函数
function name() {

}
// 箭头函数，去掉 function， 加上 =>
() => {

}
```


```js
let show1 = function () {
    console.log('abc')
}

let show2 = () => {
    console.log('abc')
}

show1() // 调用函数
show2()

let show4 = function (a) {
    return a*2
}

let show5 = a => a * 2  //简洁，类似python lambda 函数

console.log(show4(10))
console.log(show5(10))
```

## 5.函数-参数

- 参数扩展／展开 `...args`
    - 收集剩余的参数，必须当到最后一个参数位置
    - 展开数组，简写，效果和直接把数组的内容写在这儿一样
- 默认参数

```js
function show(a, b, ...args) {
    console.log(a)
    console.log(b)
    console.log(args)
}
console.log(show(1, 2, 3, 4, 5))

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

function show2(a, b=5, c=8) {
    console.log(a, b, c)
}
show2(88, 12)
```

## 6.解构赋值

```js
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

let {x, y, z} = {x: 1, y: 2, z: 3}
console.log(x, y, z)

let [json, arr, num, str] = [{ a: 1, b: 2 }, [1, 2, 3], 8, 'str']
console.log(json, arr, num, str)
```

- 解构赋值
    - 左右两个边结构必须一样
    - 右边必须是个东西
    - 声明和赋值赋值不能分开，必须在一句话里

## 7.数组

- 新增4个方法
- map 映射  一个对一个

```js
let arr = [12, 5, 8]
let result = arr.map(function (item) {
    return item*2
})
let result2 = arr.map(item=>item*2) // 简写
console.log(result)
console.log(result2)

let score = [18, 86, 88, 24]
let result3 = score.map(item => item >= 60 ? '及格' : '不及格')
console.log(result3)

// 结果
[ 24, 10, 16 ]
[ 24, 10, 16 ]
[ '不及格', '及格', '及格', '不及格' ]
```

- reduce 汇总  一堆出来一个
    - 用于比如，算个总数，算个平均

```js
var arr = [1, 3, 5, 7]
var result = arr.reduce(function (tmp, item, index) {
    //tmp 上次结果，item当前数，index次数1开始
    console.log(tmp, item, index)
    return tmp + item
})
console.log(result)

var arr = [1, 3, 5, 7]
var result = arr.reduce(function (tmp, item, index) {
    if (index != arr.length - 1) { // 不是最后一次
        return tmp + item
    } else {
        return (tmp + item)/arr.length
    }
})
console.log(result)  // 平均值
```

- filter 过滤器 保留为true的


```js
var arr = [12, 4, 8, 9]
var result = arr.filter(item => (item % 3 === 0) ? true : false)
console.log(result)
var result = arr.filter(item => item % 3 === 0)
console.log(result)

var arr = [
    { title: '苹果', price: 10 },
    { title: '西瓜', price: 20 },
]
var result = arr.filter(json => json.price >= 20)
console.log(result)
```

- forEach 循环迭代

```js
var arr = [12, 4, 8, 9]
var result = arr.forEach(item => console.log(item))
var result = arr.forEach((item, index)=>console.log(item, index))
```

## 8.字符串

- 多了两个新方法
    - `startsWith`
    - `endsWith`

```js
var url = 'http://qq.com'
console.log(url.startsWith('http'))
console.log(url.endsWith('com'))
// 都是 true
```

- 字符串模版
    - 使用反引号，`${变量}`
    - 可以折行

```js
let a = 12
let str1 = `asdf${a}`
console.log(str1)

let title = '标题'
let content = '内容'
let str = `<div>
<h1>${title}</h1>
<p>${content}</p>
`
console.log(str)
<div>
<h1>标题</h1>
<p>内容</p>
```

## 9.面向对象-基础

- 原来写法
    - 类和构造函数一样
    - 属性和方法分开写的


```js
// 老版本
function User(name, pass) {
    this.name = name
    this.pass = pass
}

User.prototype.showName = function () {
    console.log(this.name)
}
User.prototype.showPass = function () {
    console.log(this.pass)
}

var u1 = new User('able', '1233')
u1.showName()
u1.showPass()
// 老版本继承
function VipUser(name, pass, level) {
    User.call(this, name, pass)
    this.level = level
}
VipUser.prototype = new User()
VipUser.prototype.constructor = VipUser
VipUser.prototype.showLevel = function () {
    console.log(this.level)
}

var v1 = new VipUser('blue', '1234', 3)
v1.showName()
v1.showLevel()

```

- 新版面向对象
    - 有了 class 关键字、构造器
    - class 里面直接加方法
    - 继承，super 超类==父类

```js
class User {
    constructor(name, pass) {
        this.name = name
        this.pass = pass
    }

    showName() {
        console.log(this.name)
    }
    showPass() {
        console.log(this.pass)
    }
}

var u1 = new User('able2', '111')
u1.showName()
u1.showPass()

// 新版本继承
class VipUser extends User {
    constructor(name, pass, level) {
        super(name, pass)
        this.level = level
    }
    showLevel(){
        console.log(this.level)
    }
}

v1 = new VipUser('blue', '123', 3)
v1.showLevel()
```

## 10.面向对象应用

- [React](https://www.reactjscn.com)
    - 用于构建用户界面的 JavaScript 库
    - 组件化，一个组件就是一个 class
    - JSX == bable == browser.js

## 11.json

- JSON 格式
    - JavaScript Object Notation 的缩写，是一种用于数据交换的文本格式
    - JSON 是 JS对象 的严格子集
    - JSON 的标准写法
    - 只能用双引号
    - 所有的key都必须用双引号包起来

- JSON 对象
    - JSON 对象是 JavaScript 的原生对象，用来处理 JSON 格式数据，有两个静态方法
    - JSON.parse(string) ：接受一个 **JSON 字符串**并将其转换成一个 JavaScript **对象**。
    - JSON.stringify(obj) ：接受一个 JavaScript **对象**并将其转换为一个 **JSON 字符串**。

```js
var json = {a: 12, b: 5}
var str = 'hi,' + JSON.stringify(json)
var url = 'http://www.xx.com/' + encodeURIComponent(JSON.stringify(json))
console.log(str)
console.log(url)

var str = '{"a": 12, "b": 4, "c": "abc"}'
var json = JSON.parse(str)
console.log(json)
hi,{"a":12,"b":5}
http://www.xx.com/%7B%22a%22%3A12%2C%22b%22%3A5%7D
{ a: 12, b: 4, c: 'abc' }
```

- 对象（object）
    - 是 JavaScript 语言的核心概念，也是最重要的数据类型
    - 对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合
    - 对象的所有键名都是字符串, 所以加不加引号都可以
    - 如果键名是数值，会被自动转为字符串
    - 对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型
    - 如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用
    - in 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值
    - for...in循环用来遍历一个对象的全部属性

- 对象 简写
    - key-value 一样时可以简写
    - 里面函数可以简写, 去掉

```js
var a = 12, b = 5
console.log({a:a, b:b})
console.log({a, b})
console.log({a, b, c:"c"})
console.log({ a, b, show(){ console.log('a') }})
{ a: 12, b: 5 }
{ a: 12, b: 5 }
{ a: 12, b: 5, c: 'c' }
{ a: 12, b: 5, show: [Function: show] }
```

