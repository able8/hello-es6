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


var arr = [12, 4, 8, 9]
var result = arr.filter(item => (item % 3 === 0) ? true : false)
console.log(result)
var result = arr.filter(item => item % 3 === 0)
console.log(result)

var arr = [
    { title: '苹果', price:   10 },
    { title: '西瓜', price: 20 },
]
var result = arr.filter(json => json.price >= 20)
console.log(result)

var arr = [12, 4, 8, 9]
var result = arr.forEach(item => console.log(item))
var result = arr.forEach((item, index)=>console.log(item, index))