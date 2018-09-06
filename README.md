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