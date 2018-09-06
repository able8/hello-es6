var json = {a: 12, b: 5}
var str = 'hi,' + JSON.stringify(json)
var url = 'http://www.xx.com/' + encodeURIComponent(JSON.stringify(json))
console.log(str)
console.log(url)

var str = '{"a": 12, "b": 4, "c": "abc"}'
var json = JSON.parse(str)
console.log(json)

var a = 12, b = 5
console.log({a:a, b:b})
console.log({a, b})
console.log({a, b, c:"c"})
console.log({ a, b, show(){ console.log('a')}})