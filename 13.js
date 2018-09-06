function show() {
    console.log('a')
    console.log('b')
}
show() // 普通函数

function *show2() {
    console.log('1')
    yield
    console.log('2')
}
let genObj = show2()
genObj.next()
genObj.next()
genObj.next() // 最后了，没有结果

