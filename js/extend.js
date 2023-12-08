/**
 * 继承是面向对象编程中讨论最多的话题。
 * 很多面向对象语言都支持两种继承：接口继承和实现继承。
 * 前者只继承方法签名，后者继承实际的方法。
 * 接口继承在ECMAScript中是不可能的，因为函数没有签名。
 * 实现继承是ECMAScript唯一支持的继承方式，而这主要是通过原型链实现的。
 */
/**
 * 原型链扩展了原型搜索机制。
 * 在读取实例上的属性时，首先会在实例上搜索这个属性。如果没找到，则会继续搜索实例的原型。
 * 在通过原型链实现继承之后，搜索就可以继续向上，搜索原型的原型。
 */

console.log(`----------------------- 通过原型链实现继承 `);
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

let instance = new SubType();
console.log("SubType : ", instance.getSuperValue()); // true
console.log("SubType : ", instance.getSubValue()); // false
// 实例重写字段
instance.property = "override property"
console.log("SubType : ", instance.getSuperValue()); // override property




function SubSubType() {
    /** 覆盖超类字段 */
    this.property = 'sub sub property'
}
SubSubType.prototype = new SubType()
instance = new SubSubType();
console.log("SubSubType : ", instance.getSuperValue()); // sub sub property
console.log("SubSubType : ", instance.getSubValue()); // false
// 重写超类方法
SubSubType.prototype.getSuperValue = function () {
    return "override value"
}
console.log("SubSubType : ", instance.getSuperValue()); // override value


console.log(`\n --------------------------- 原型与继承`)
console.log(instance instanceof Object);      // true  默认情况下，所有引用类型都继承自Object
console.log(instance instanceof SuperType);   // true
console.log(instance instanceof SubType);     // true

console.log(Object.prototype.isPrototypeOf(instance));      // true
console.log(SuperType.prototype.isPrototypeOf(instance));   // true
console.log(SubType.prototype.isPrototypeOf(instance));     // true


/**
 * 对于基类的实例而言，每个实例都有自己的 this.colors 属性，没有问题。
 * 但是 子类的原型是一个特定的基类实例，子类原型（也就是基类实例）中包含的引用值会在所有子类实例间共享
 */
console.log(`\n --------------------------- 原型链继承的问题 原型中包含的引用值会在所有实例间共享`)
function SuperColorType() {
    this.colors = ["red", "blue", "green"];
}
function SubColorType() { }
// 继承SuperType
SubColorType.prototype = new SuperColorType();
let instance1 = new SubColorType();
instance1.colors.push("black");
console.log(instance1.colors); // "red, blue, green, black"
let instance2 = new SubColorType();
console.log(instance2.colors); // "red, blue, green, black"



console.log(`\n --------------------------- 盗用构造函数 （constructor stealing）`)
function SuperTypeCS() {
    this.colors = ["red", "blue", "green"];
}
function SubTypeCS() {
    //继承SuperType
    SuperTypeCS.call(this);
}
let instance1CS = new SubTypeCS();
instance1CS.colors.push("black");
console.log(instance1CS.colors); // "red, blue, green, black"
let instance2CS = new SubTypeCS();
console.log(instance2CS.colors); // "red, blue, green"



function SuperTypeCS2(name) {
    this.name = name
}
/**
 * 相比于使用原型链，盗用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参
 */
function SubTypeCS2(name, age) {
    //继承SuperType
    SuperTypeCS2.call(this, name);
    this.age = age
}

let stcs1 = new SubTypeCS2("Joe", 70)
let stcs2 = new SubTypeCS2("John", 69)
console.log(`SubTypeCS2 : ${JSON.stringify(stcs1)}   ${JSON.stringify(stcs2)}`) // SubTypeCS2 : {"name":"Joe","age":70}   {"name":"John","age":69}




/**
 * 组合继承（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。
 * 基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
 * 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
 * 
 * 性能上会受到一定损害，因为调用了两次基类构造函数。
 * 原型上构造的基类实例属性（对于子类来说变成了原型属性）会被第二次盗用构造函数构造的子类实例属性遮蔽掉。
 * 浪费了内存和CPU。
 */
console.log(`\n --------------------------- 组合继承`)
function CombinationBase(name) {
    this.name = name
    this.colors = ["red", "green", "blue"]
}
CombinationBase.prototype.sayName = function () {
    console.log(`CombinationBase sayName : ${this.name}`)
}
CombinationBase.prototype.printColor = function () {
    console.log(`CombinationBase printColor : ${this.colors}`)
}

function Combination(name, age) {
    // 第二次调用 CombinationBase 构造函数（实例化的时候）
    // CombinationBase 的 name, colors 属性成为了 Combination 的实例属性
    // 实例属性遮蔽了 prototype 上的原型属性
    CombinationBase.call(this, name)
    this.age = age
}

// 第一次调用 CombinationBase 构造函数 (定义原型的时候)
// CombinationBase 的 name, colors 属性成为了 Combination 的原型属性
Combination.prototype = new CombinationBase()
Combination.prototype.sayAge = function () {
    console.log(`Combination sayAge : ${this.age}`)
}

let combination1 = new Combination("Joe", 70)
combination1.colors.push("black")
combination1.sayName()
combination1.sayAge()
combination1.printColor()

let combination2 = new Combination("John", 69)
combination2.colors.push("yellow")
combination2.sayName()
combination2.sayAge()
combination2.printColor()


console.log(`\n --------------------------- 遐想，如果有办法合并prototype，就可以多继承了？ 确实！！！`)
function Base1() {
    this.b1 = "bb1"
}
Base1.prototype.doB1 = function () {
    console.log(`Base1  doB1`)
}

function Base2() {
    this.b2 = "bb2"
}
Base2.prototype.doB2 = function () {
    console.log(`Base2  doB2`)
}

function Child() {
    Base1.call(this)
    Base2.call(this)
    this.c = "cc";
}
Child.prototype = Object.assign({}, Base1.prototype, Base2.prototype);
Child.prototype.doC = function () {
    console.log(`Child  doC`)
}


let ins = new Child()
console.log(`b1 = ${ins.b1}    b2 = ${ins.b2}    c = ${ins.c}`)
ins.doB1()
ins.doB2() // TypeError: ins.doB2 is not a function
ins.doC()


console.log(`\n --------------------------- 寄生式继承`)
function createAnother(original) {
    let clone = Object(original);   // 通过调用函数创建一个新对象
    clone.sayHi = function () {      // 以某种方式增强这个对象
        console.log(`hi, ${this.name}`);
    };
    return clone;              // 返回这个对象
}
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
let anotherPerson = createAnother(person);
anotherPerson.friends.push("Joe")
anotherPerson.sayHi();   // hi, Nicholas
console.log(anotherPerson.friends) // [ 'Shelby', 'Court', 'Van', 'Joe' ]
let anotherPerson2 = createAnother(person);
anotherPerson2.friends.push("John") // [ 'Shelby', 'Court', 'Van', 'Joe', 'John' ]
console.log(anotherPerson2.friends)



/**
 * 寄生式组合继承通过盗用构造函数继承属性，但使用混合式原型链继承方法。
 * 基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。
 * 说到底就是使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。
 * 
 * 和组合式的区别在于子类原型只拷贝超类原型，而不是直接构造基类
 */
console.log(`\n --------------------------- 寄生式组合继承`)
function SuperType666(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType666.prototype.sayName = function () {
    console.log(this.name);
};
function SubType666(name, age) {
    // 第二次拷贝实例属性
    SuperType666.call(this, name);
    this.age = age;
}

// 只拷贝超类的原型
SubType666.prototype = Object(SuperType666.prototype)
SubType666.prototype.sayAge = function () {
    console.log(this.age);
};

let ins666 = new SubType666("Joe", 79);
ins666.colors.push("black");
let ins888 = new SubType666("John", 81);
ins888.colors.push("orange");

console.log(`ins666  ${JSON.stringify(ins666)}`)
console.log(`ins888  ${JSON.stringify(ins888)}`)
