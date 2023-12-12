
console.log(`---------------------- 箭头函数`)
// 以下两种写法都有效
let double = (x) => { return 2 * x; };
let triple = x => { return 3 * x; };
// 没有参数需要括号
let getRandom = () => { return Math.random(); };
// 多个参数需要括号
let sum = (a, b) => { return a + b; };
// 无效的写法：
// let multiply = a, b => { return a * b; };
console.log(double(10), triple(10), getRandom(), sum(10, 10))


/**
 * JavaScript引擎在加载数据时对它们是区别对待的。
 * JavaScript引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中生成函数定义。
 * 而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。
 */
console.log(`\n--------------------- 函数声明和函数表达式`)
// 没问题
console.log(sum2(10, 10));
function sum2(num1, num2) {
    return num1 + num2;
}
// 会出错 // ReferenceError: sum3 is not defined
// console.log(sum3(10, 10));
// let sum3 = function (num1, num2) {
//     return num1 + num2;
// };



/**
 * this引用的是把函数当成方法调用的上下文对象，这时候通常称其为this值（在网页的全局上下文中调用函数时，this指向windows）
 * 在箭头函数中，this引用的是定义箭头函数的上下文。
 */
console.log(`\n--------------------- this `)
function King() {
    this.royaltyName = 'Henry';
    console.log('---------- King this = ', this, this.royaltyName)
    // this引用King的实例
    setTimeout(() => console.log(this.royaltyName), 1000);
}
function Queen() {
    this.royaltyName = 'Elizabeth';
    console.log('---------- Queen this = ', this, this.royaltyName)
    // this引用window对象
    // 在全局上下文中没有定义royaltyName
    setTimeout(function () { console.log(this.royaltyName); }, 1000);
}
new King();   // Henry
new Queen(); // undefined



function King() {
    if (!new.target) {
        throw 'King must be instantiated using "new"'
    }
    console.log('King instantiated using "new"');
}
new King(); // King instantiated using "new"
// King();      // Error: King must be instantiated using "new"