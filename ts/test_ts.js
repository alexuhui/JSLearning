"use strict";
exports.__esModule = true;
exports.test = void 0;
var test = /** @class */ (function () {
    function test() {
        this.a = null;
        this.num = 55;
    }
    test.prototype["do"] = function (n) {
        console.log(typeof this.a + "   " + n);
        console.log(typeof this.a, n);
    };
    test.prototype.innerDo = function (n) {
        console.log('innerDo : ', n);
    };
    // private bool: boolean | null = null
    test.prototype.testBool = function () {
        if (this.bool) {
            console.log("true selector, bool is " + this.bool);
        }
        else {
            console.log("false selector, bool is " + this.bool);
        }
        console.log("string : \"hello\" is " + Boolean("hello") + "   \"\" is " + Boolean(""));
        console.log("number : 121 is " + Boolean(121) + "   0 is " + Boolean(0) + "  NaN is " + Boolean(NaN));
        console.log("null is " + Boolean(null));
        console.log("undefined is " + Boolean(undefined));
    };
    test.prototype.testNum = function () {
        console.log("num " + this.num);
        this.num = 55.55;
        console.log("num " + this.num);
        this.num = 45;
        console.log("num " + this.num);
        this.num = 0x55;
        console.log("num " + this.num);
        console.log("min num " + Number.MIN_VALUE); //  min int ${Number.MIN_SAFE_INTEGER}`)
        console.log("max num " + Number.MAX_VALUE); //   max int ${Number.MAX_SAFE_INTEGER}`)
        console.log("NaN == NaN is " + (NaN == NaN) + "   " + isNaN(NaN));
        console.log("0/0 == NaN is " + ((0 / 0) == NaN) + " " + isNaN(0 / 0));
    };
    return test;
}());
exports.test = test;
var ts = new test();
// ts.do(20)
ts["do"](30);
ts["innerDo"](30);
ts.testBool();
ts.testNum();
