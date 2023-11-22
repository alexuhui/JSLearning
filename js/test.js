/*
function test() {
    var message = "hi"; // 局部变量，函数作用域
}
test();
console.log(message); // 出错！message is not defined
*/

// function test() {
//     message = "hi"; // 全局变量
// }
// test();
// console.log(message); // 正常输出


// function foo() {
//     console.log(age);
//     var age = 26;
// }
// foo();   // undefined

// {
//     // var ppt = 'ppt' // 函数作用域  正常
//     let ppt = 'ppt' // 块作用域  ReferenceError: ppt is not defined
// }
// console.log(ppt)

// // name会被提升
// console.log(name); // undefined
// var name = 'Matt';
// // age不会被提升
// console.log(age); // ReferenceError: age is not defined
// let age = 26;

// var name = 'Matt';
// console.log(window.name); // 'Matt'
// let age = 26;
// console.log(window.age);   // undefined

// var e = 1
// if (true) {
//     function e() {
//     }
//     e = 2
//     console.log("0000", e);
// }
// console.log("1111", e);


// // 你可能以为会输出0、1、2、3、4
// // 实际上会输出5、5、5、5、5
// for (var i = 0; i < 5; ++i) {
//     console.log(i)
//     setTimeout(() => console.log('----', i), 0)
// }


// // typeof是一个操作符而不是函数，所以不需要参数（但可以使用参数）。
// let message = "some string";
// console.log(typeof message);     // "string"
// console.log(typeof (message));    // "string"
// console.log(typeof 95);           // "number"
// console.log(typeof null);           // "object" 特殊值null被认为是一个对空对象的引用。
// let a = 3
// a = null
// console.log(typeof a)