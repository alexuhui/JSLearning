/**
* 构造函数可以是函数表达式
* 也可以是函数声明，因此以下两种形式都可以：
*    function Person() {}
*    let Person = function() {}
*/
function Person() {
    Person.prototype.name = "Alex";
    Person.prototype.age = 30;
    Person.prototype.sayName = function () {
        console.log(`persion name : ${this.name}`)
    }
 }
/**
* 声明之后，构造函数就有了一个
* 与之关联的原型对象：
*/
console.log(typeof Person.prototype);
console.log(Person.prototype);
// {
//    constructor: f Person(),
//    __proto__: Object
// }
/**
* 如前所述，构造函数有一个prototype属性
* 引用其原型对象，而这个原型对象也有一个
* constructor属性，引用这个构造函数
* 换句话说，两者循环引用：
*/
console.log(Person.prototype.constructor === Person); // true
/**
* 正常的原型链都会终止于Object的原型对象
* Object原型的原型是null
*/
console.log(Person.prototype.__proto__ === Object.prototype);    // true
console.log(Person.prototype.__proto__.constructor === Object); // true
console.log(Person.prototype.__proto__.__proto__ === null);      // true
console.log(Person.prototype.__proto__);
// {
//    constructor: f Object(),
//    toString: ...
//    hasOwnProperty: ...
//    isPrototypeOf: ...
//    ...
// }
let person1 = new Person(),
    person2 = new Person();
/**
* 构造函数、原型对象和实例
* 是3 个完全不同的对象：
*/
console.log(person1 !== Person);              // true
console.log(person1 !== Person.prototype); // true
console.log(Person.prototype !== Person);   // true
/**
* 实例通过__proto__链接到原型对象，
* 它实际上指向隐藏特性[[Prototype]]
*
* 构造函数通过prototype属性链接到原型对象
*
* 实例与构造函数没有直接联系，与原型对象有直接联系
*/
console.log(person1.__proto__ === Person.prototype);    // true
console.log(person1.__proto__.constructor === Person); // true
/**
* 同一个构造函数创建的两个实例
* 共享同一个原型对象：
*/ 
console.log(person1.__proto__ === person2.__proto__); // true
/**
* instanceof检查实例的原型链中
* 是否包含指定构造函数的原型：
*/
console.log(person1 instanceof Person);              // true
console.log(person1 instanceof Object);              // true
console.log(Person.prototype instanceof Object);   // true

console.log('\n------------------------ 原型层级：')
/**
 * 原型层级：
 * 通过对象访问属性时，会按照这个属性的名称开始搜索。
 * 搜索开始于对象实例本身。
 * 如果在这个实例上发现了给定的名称，则返回该名称对应的值。
 * 如果没有找到这个属性，则搜索会沿着指针进入原型对象，然后在原型对象上找到属性后，再返回对应的值。
 */
console.log(`person1, name : ${person1.name}  age : ${person1.age}`)
console.log(`person2, name : ${person2.name}  age : ${person2.age}`)
// 重新定义person1的name属性
person1.name = "Joe"
// 重新定义person2的age属性
person2.age = 55
console.log(`person1, name : ${person1.name}  age : ${person1.age}`)
console.log(`person2, name : ${person2.name}  age : ${person2.age}`)


console.log('\n------------------------ sayName')
person1.sayName()
person2.sayName()

// 重新定义person1的sayName属性
person1.sayName = function () {
    console.log(`person 1 sayName : ${this.name}`)
}
// 重新定义person2的sayName属性
person2['sayName'] = function () {
    console.log(`person 2 sayName : ${this.name}`)
}

person1.sayName()
person2.sayName()

console.log('\n------------------------ getPrototypeOf 返回实例对象的原型')
console.log(Object.getPrototypeOf(person1) == Person.prototype);   // true
console.log(Object.getPrototypeOf(person2) === Person.prototype);   // true
console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));   // true
/**
 * person1 person2 实例属性的修改并不影响原型对象上的属性
 */
console.log(Object.getPrototypeOf(person1).name);    // Alex           
console.log(Object.getPrototypeOf(person2).name);    // Alex                      
console.log(Person.prototype.name);                  // Alex       
Person.prototype.sayName()   // persion name : Alex


console.log(`\n ---------------------- hasOwnProperty()方法用于确定某个属性是在实例上还是在原型对象上`)
console.log(person1.hasOwnProperty('name')) // true   person1 实例有自己的 name 属性
console.log(person1.hasOwnProperty('age')) // false
// 无论该属性是在实例上还是在原型上, in 都返回true
console.log('name' in person1) // true
console.log('age' in person1) // true
person1.nickname = 'black pig'
for (const pro in person1) {
    console.log('pro in person1 : ', pro, person1[pro])
}