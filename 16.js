let arr = ['a', 'b', 'c']
console.log(arr.includes(1))

for (let i in arr) {
    console.log(i) // 循环的时下标 key
}

for (let i of arr) {
    console.log(i) // 循环的是值 value
}
for (let i of arr.keys()) {
    console.log('>'+i) // 循环的是值 value
}
for (let [key, value] of arr.entries()) {
    console.log('>' + key + value) // 循环的是值 value
}

let json = { a: 12, b: 5, c: 7 }
for (let i in json) {
    console.log(i)
}

// for (let i of json) {
//     // console.log(i) // 不能用于 json is not iterable
// }

console.log('=' + 'abcd'.padStart(6, '0') + '=')
console.log('=' + 'abcd'.padEnd(6, '0') + '=')
