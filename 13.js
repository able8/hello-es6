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
show2()
len genObj = show2()
