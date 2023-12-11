/**
 * ECMAScript 6新引入的class关键字具有正式定义类的能力。
 * 类（class）是ECMAScript中新的基础性语法糖结构，因此刚开始接触时可能会不太习惯。
 * 虽然ECMAScript 6类表面上看起来可以支持正式的面向对象编程，但实际上它背后使用的仍然是原型和构造函数的概念。
 */

let classV = class {
    name(params) {
        return classV.name
    }
    ppc(params) {
        return 1
    }

    ff() {
        function fff() {
            console.log('do fff')
        }
        fff()
    }
}

let cc = new classV()
console.log(cc.ppc(), cc.name())
cc.ff()
console.log(typeof classV, cc instanceof classV)


/**
 * 类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键
 */
const symbolKey = Symbol('symbolKey');
class Person {

    constructor() {
        this._name = 'def name'
    }

    stringKey() {
        console.log('invoked stringKey');
    }
    [symbolKey]() {
        console.log('invoked symbolKey');
    }
    ['computed' + 'Key']() {
        console.log('invoked computedKey');
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value
    }
}
let p = new Person();
p.stringKey();     // invoked stringKey
p[symbolKey]();    // invoked symbolKey
p.computedKey();   // invoked computedKey

console.log(p.name)
p.name = "new name"
console.log(p.name)


console.log(`\n------------------------------ 继承`)
class Vehicle {
    constructor() {
        this.hasEngine = true;
    }

    do() {
        console.log(`Vehicle  do`)
    }
}
class Bus extends Vehicle {
    constructor() {
        // 不要在调用super()之前引用this，否则会抛出ReferenceError
        // 同理把super注释掉也不行
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // this.hasEngine = false
        super(); // 相当于super.constructor()
        // 不可单独使用 // super' must be followed by an argument list or member access.ts(1034)
        // console.log(super)
        console.log(this instanceof Vehicle);   // true
        console.log(this);                          // Bus { hasEngine: true }
    }

    do() {
        super.do()
        console.log(`Bus  do`)
    }
}

let bus = new Bus();
bus.do()