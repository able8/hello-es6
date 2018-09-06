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
