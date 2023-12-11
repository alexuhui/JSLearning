"use strict";
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.sayHi = function () {
        console.log("Hi Test");
    };
    return Test;
}());
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    Test2.prototype.sayHi = function () {
        console.log("Hi Test2");
    };
    return Test2;
}());
var Test3 = /** @class */ (function () {
    function Test3() {
    }
    Test3.prototype.sayHi = function () {
        console.log("Hi Test3");
    };
    return Test3;
}());
var ins = new Test();
ins.sayHi();
var ins2 = new Test2();
ins2.sayHi();
var ins3 = new Test3();
ins3.sayHi();
function interfaceParam(ins) {
    ins.sayHi();
}
interfaceParam(ins);
interfaceParam(ins2);
/**
 * 有没有显式 implements ITest 似乎不影响编译
 * 如果 Test3 不定义 sayHi 函数才会报错 ：
 * Argument of type 'Test3' is not assignable to parameter of type 'ITest'.
 * Property 'sayHi' is missing in type 'Test3' but required in type 'ITest'.ts(2345)
 */
interfaceParam(ins3);
