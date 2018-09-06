/*
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

*/
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