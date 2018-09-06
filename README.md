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
