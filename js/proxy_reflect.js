const target = {
    foo: 'bar',
    jojo: 'vivi',
};
const handler = {
    // 捕获器在处理程序对象中以方法名为键
    get() {
        return 'handler override';
    }
};
const proxy = new Proxy(target, handler);
console.log(target.foo);                         // bar
console.log(proxy.foo);                          // handler override
console.log(proxy.jojo)                         // handler override
console.log(target['foo']);                     // bar
console.log(proxy['foo']);                       // handler override
console.log(Object.create(target)['foo']);   // bar
console.log(Object.create(proxy)['foo']);    // handler override


/**
 * 反射API为开发者准备好了样板代码，在此基础上开发者可以用最少的代码修改捕获的方法。
 */
console.log(`\n----------------------------- 反射api`)
const handler2 = {
    get(trapTarget, property, receiver) {
        if (property === 'foo') {
            // 反射api
            return Reflect.get(...arguments) + ' !!!!!'
        }
        return trapTarget[property]
    }
}
const proxy2 = new Proxy(target, handler2);
console.log(proxy2.foo)                         // bar !!!!!
console.log(proxy2.jojo)                         // vivi
console.log(proxy2)                         // { foo: 'bar', jojo: 'vivi' }
console.log(target)                         // { foo: 'bar', jojo: 'vivi' }


console.log(`\n----------------------------- 能否通过代理修改目标类的setter ?`)
class Text {

    constructor() {
        this._string = ""
        this._other = "other"
    }

    set string(value) {
        this._string = "ori set : " + value;
        this.doSomething()
    }

    get string() {
        return this._string;
    }

    doSomething() {
        console.log('do something after set string : ' + this._string)
    }

    set other(value) {
        this._other = value
    }

    get other() {
        return this._other
    }
}

const TextHandler = {
    set(target, property, value, receiver) {
        // string setter 被拦截了，替换成了代理方法
        if (property === 'string') {
            value = "handler change"
            console.log(value)
            target['_' + property] = value
            target['doSomething']()
            return
        }

        return Reflect.set(...arguments)
    },
    get(target, property, receiver) {
        // string getter 被拦截了，替换成了代理方法
        // if (property === 'string') {
        //     console.log(`get value : ${target[property]}`)
        //     return Reflect.get(...arguments) + " ao li gei~"
        // } 
        return Reflect.get(...arguments)
    }
}

let text = new Text()
const textProxy = new Proxy(text, TextHandler)
textProxy.string = "string"
textProxy.other = "other string"
console.log(`text ----- string : ${text.string}    other : ${text.other}`)
console.log(`proxy ------- string : ${textProxy.string}   other : ${textProxy.other}`)

let oriText = new Text()
oriText.string = "ori text"
oriText.other = "other text"
console.log(`\noriText ----- string : ${oriText.string}    other : ${oriText.other}`)

// const textProxy2 = new Proxy(Text, TextHandler)
// textProxy2.string = '22222222' // TypeError: target.doSomething is not a function
// console.log(textProxy2.string)
