"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var test = /** @class */ (function () {
    function test() {
        this.a = null;
        this.num = 55;
    }
    test.prototype.do = function (n) {
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
        // console.log(`NaN == NaN is ${NaN == NaN}   ${isNaN(NaN)}`);
        // console.log(`0/0 == NaN is ${(0 / 0) == NaN} ${isNaN(0 / 0)}`);
        console.log("parseInt(\"10.5\", 2)    : " + parseInt("10.5", 2)); // 2，按二进制解析
        console.log("parseInt(\"10.5\", 8)    : " + parseInt("10.5", 8)); // 8，按八进制解析
        console.log("parseInt(\"10.5\", 10)   : " + parseInt("10.5", 10)); // 10，按十进制解析
        console.log("parseInt(\"10.5\", 16)   : " + parseInt("10.5", 16)); // 16，按十六进制解析
        console.log("parseFloat(\"10.5\")     : " + parseFloat("10.5")); // parseFloat()只解析十进制值，不能指定底数
        console.log("parseFloat(\"1234blue\") : " + parseFloat("1234blue")); // 1234，按整数解析
        console.log("parseFloat(\"0xA\")      : " + parseFloat("0xA")); // 0
        console.log("parseFloat(\"22.5\")     : " + parseFloat("22.5")); // 22.5
        console.log("parseFloat(\"22.34.5\")  : " + parseFloat("22.34.5")); // 22.34
        console.log("parseFloat(\"0908.5\")   : " + parseFloat("0908.5")); // 908.5
        console.log("parseFloat(\"3.125e7\")  : " + parseFloat("3.125e7")); // 31250000
        var num = 10;
        console.log("num = " + num + "  num.toString()    : " + num.toString()); // "10"
        console.log("num = " + num + "  num.toString(2)   : " + num.toString(2)); // "1010"
        console.log("num = " + num + "  num.toString(8)   : " + num.toString(8)); // "12"
        console.log("num = " + num + "  num.toString(10)  : " + num.toString(10)); // "10"
        console.log("num = " + num + "  num.toString(16)  : " + num.toString(16)); // "a"
    };
    test.prototype.testString = function () {
        var value1 = 10;
        var value2 = true;
        var value3 = null;
        var value4;
        console.log(" value = " + value1 + "   String(value1) : " + String(value1)); // "10"
        console.log(" value = " + value2 + "   String(value2) : " + String(value2)); // "true"
        console.log(" value = " + value3 + "   String(value3) : " + String(value3)); // "null"
        console.log(" value = " + value4 + "   String(value4) : " + String(value4)); // "undefined"
        var myMultiLineString = 'first line\nsecond line';
        var myMultiLineTemplateLiteral = "first line\nsecond line";
        console.log(myMultiLineString);
        console.log(myMultiLineTemplateLiteral);
        console.log(myMultiLineString === myMultiLineTemplateLiteral); // true
        var value = 5;
        var exponent = 'second';
        // 以前，字符串插值是这样实现的：
        var interpolatedString = value + ' to the ' + exponent + ' power is ' + (value * value);
        // 现在，可以用模板字面量这样实现：
        var interpolatedTemplateLiteral = value + " to the " + exponent + " power is " + value * value;
        console.log(interpolatedString); // 5 to the second power is 25
        console.log(interpolatedTemplateLiteral); // 5 to the second power is 25
        //所有插入的值都会使用toString()强制转型为字符串，而且任何JavaScript表达式都可以用于插值。嵌套的模板字符串无须转义
        console.log("Hello, " + "World" + "! "); // Hello, World!
        //将表达式转换为字符串时会调用toString()
        var foo = { toString: function () { return 'World'; } };
        console.log("Hello, " + foo + "! "); // Hello, World!
        // 这两句直接写到js是可以的，ts转js报错
        // @ts-ignore  error TS2339: Property 'raw' does not exist on type 'StringConstructor'
        console.log(String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["first line\nceconed line"], ["first line\\nceconed line"]))));
        // @ts-ignore
        console.log(String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["first line\nceconed line"], ["first line\nceconed line"]))));
        var stringValue = "hello world";
        console.log(stringValue.length); //"11"
        var stringValue2 = "中文";
        console.log(stringValue2.length); //"2"
        console.log('-----------------');
        // "smiling face with smiling eyes" 表情符号的编码是U+1F60A
        // 0x1F60A === 128522
        var message = "ab😊de";
        console.log(message.length); // 6
        console.log(message.charAt(1)); // b
        console.log(message.charAt(2)); // <? >
        console.log(message.charAt(3)); // <? >
        console.log(message.charAt(4)); // d
        console.log(message.charCodeAt(1)); // 98
        console.log(message.charCodeAt(2)); // 55357
        console.log(message.charCodeAt(3)); // 56842
        console.log(message.charCodeAt(4)); // 100
        // @ts-ignore   Property 'fromCodePoint' does not exist on type 'StringConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2550)
        console.log(String.fromCodePoint(0x1F60A)); // 😊
        console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab😊de
    };
    test.prototype.testTagFunction = function () {
        var a = 6;
        var b = 9;
        function simpleTag(strings, aValExpression, bValExpression, sumExpression, test) {
            console.log(strings); // 连接模板的字符串数组
            console.log(aValExpression);
            console.log(bValExpression);
            console.log(sumExpression);
            console.log('---------------- test : ' + test);
            return 'foobar';
        }
        var untaggedResult = a + " + " + b + " = " + (a + b);
        var taggedResult = simpleTag(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", "+", "=", " - ", ""], ["", "+", "=", " - ", ""])), a, b, a + b, 20);
        // ["", " + ", " = ", ""]
        // 6
        // 9
        // 15
        console.log(untaggedResult); // "6 + 9 = 15"
        console.log(taggedResult); // "foobar"
        //因为表达式参数的数量是可变的，所以通常应该使用剩余操作符（rest operator）将它们收集到一个数组中：
        function simpleTag2(strings) {
            var expressions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                expressions[_i - 1] = arguments[_i];
            }
            console.log(strings);
            for (var _a = 0, expressions_1 = expressions; _a < expressions_1.length; _a++) {
                var expression = expressions_1[_a];
                console.log(expression);
            }
            return 'foobar';
        }
        var taggedResult2 = simpleTag2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", " + ", " = ", "     ", " + ", " = ", ""], ["", " + ", " = ", "     ", " + ", " = ", ""])), a, b, a + b, a, b, a + b);
        // ["", " + ", " = ", ""]
        // 6
        // 9
        // 15
        console.log(taggedResult2); // "foobar"
        /**
         * 对于有n个插值的模板字面量，传给标签函数的表达式参数的个数始终是n，
         * 而传给标签函数的第一个参数所包含的字符串个数则始终是n+1。
         * 因此，如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串
         */
        function zipTag(strings) {
            var expressions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                expressions[_i - 1] = arguments[_i];
            }
            return strings[0] +
                expressions.map(function (e, i) { return "" + e + strings[i + 1]; })
                    .join('');
        }
        var untaggedResult3 = a + " + " + b + " = " + (a + b);
        var taggedResult3 = zipTag(templateObject_5 || (templateObject_5 = __makeTemplateObject(["fffff   ", " + ", " = ", "   ttttt"], ["fffff   ", " + ", " = ", "   ttttt"])), a, b, a + b);
        console.log(untaggedResult3); // "6 + 9 = 15"
        console.log(taggedResult3); // "6 + 9 = 15"
    };
    test.prototype.testSymbol = function () {
        /**
         * Symbol（符号）是ECMAScript 6新增的数据类型。
         * 符号是原始值，且符号实例是唯一、不可变的。
         * 符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
         *
         * es5  Symbol 编译报错
         * error TS2585: 'Symbol' only refers to a type,
         * but is being used as a value here.
         * Do you need to change your target library?
         * Try changing the `lib` compiler option to es2015 or later.
         *
         * 直接在js取消下面注释可正常跑
         */
        // let genericSymbol = Symbol();
        // let otherGenericSymbol = Symbol();
        // let fooSymbol = Symbol('foo');
        // let otherFooSymbol = Symbol('foo');
        // console.log(genericSymbol == otherGenericSymbol);   // false
        // console.log(fooSymbol == otherFooSymbol);             // false
        // // 全局符号注册表
        // let fooGlobalSymbol = Symbol.for('foo');         // 创建新符号
        // let otherFooGlobalSymbol = Symbol.for('foo');   // 重用已有符号
        // console.log(fooGlobalSymbol === otherFooGlobalSymbol);   // true
        // let localSymbol = Symbol('foo');
        // let globalSymbol = Symbol.for('foo');
        // console.log(localSymbol === globalSymbol); // false
        // // 全局注册表中的符号必须使用字符串键来创建，因此作为参数传给Symbol.for()的任何值都会被转换为字符串。
        // let emptyGlobalSymbol = Symbol.for(); // 在ts中，这里将报错，提示必须有一个参数
        // console.log(emptyGlobalSymbol);     // Symbol(undefined)
        // // 可以使用Symbol.keyFor()来查询全局注册表
        // // 创建全局符号
        // let s = Symbol.for('foo');
        // console.log(Symbol.keyFor(s));    // foo
        // // 创建普通符号
        // let s2 = Symbol('bar');
        // console.log(Symbol.keyFor(s2));   // undefined
        /**
         * 凡是可以使用字符串或数值作为属性的地方，都可以使用符号。
         * 这就包括了对象字面量属性和Object.defineProperty()/Object.defineProperties()定义的属性。
         * 对象字面量只能在计算属性语法中使用符号作为属性。
         */
        // let s1 = Symbol('foo'),
        //     s2 = Symbol('bar'),
        //     s3 = Symbol('baz'),
        //     s4 = Symbol('qux');
        // let o = {
        //     [s1]: 'foo val'
        // };
        // // 这样也可以：o[s1] = 'foo val';
        // console.log(o);
        // // {Symbol(foo): foo val}
        // Object.defineProperty(o, s2, { value: 'bar val' , enumerable: true});
        // console.log(o);
        // // {Symbol(foo): foo val, Symbol(bar): bar val}
        // Object.defineProperties(o, {
        //     [s3]: { value: 'baz val' , enumerable: true},
        //     [s4]: { value: 'qux val' , enumerable: true}
        // });
        // console.log(o);
        // // {Symbol(foo): foo val, Symbol(bar): bar val,
        // //   Symbol(baz): baz val, Symbol(qux): qux val}
        /**
         * 因为符号属性是对内存中符号的一个引用，所以直接创建并用作属性的符号不会丢失。
         * 但是，如果没有显式地保存对这些属性的引用，(重新创建的Symbol实际是另外的符合了，当然可以用Symbol.for创建全局唯一Symbol)
         * 那么必须遍历对象的所有符号属性才能找到相应的属性键
         */
        // let o2 = {
        //     [Symbol('foo')]: 'fooval',
        //     [Symbol('bar')]: 'barval'
        //   };
        //   console.log(o2);
        //   // {Symbol(foo): "foo val", Symbol(bar): "bar val"}
        //   console.log(o2[Symbol('foo')]); 
        //   // undefined
        //   let barSymbol = Object.getOwnPropertySymbols(o2)
        //                 .find((symbol) => symbol.toString().match(/bar/));
        //   console.log(barSymbol);
        //   // Symbol(bar)
        function Foo() { }
        var f = new Foo();
        console.log(f instanceof Foo); // true
        var Bar = /** @class */ (function () {
            function Bar() {
            }
            return Bar;
        }());
        var b = new Bar();
        console.log(b instanceof Bar); // true
        //在ES6中，instanceof操作符会使用Symbol.hasInstance函数来确定关系
        // console.log(Foo[Symbol.hasInstance](f)); // true
        // console.log(Bar[Symbol.hasInstance](b)); // true
        /**
         * 这个属性定义在Function的原型上，因此默认在所有函数和类上都可以调用。
         * 由于instanceof操作符会在原型链上寻找这个属性定义，
         * 就跟在原型链上寻找其他属性一样，因此可以在继承的类上通过静态方法重新定义这个函数
         */
        // class Baz extends Bar {
        //   static[Symbol.hasInstance](){
        //     return false;
        //   }
        // }
        // let bz = new Baz();
        // console.log(Bar[Symbol.hasInstance](bz)); // true
        // console.log(bz instanceof Bar);              // true
        // console.log(Baz[Symbol.hasInstance](bz));//false
        // console.log(bz instanceof Baz);             //false
        /**
         * Symbol.isConcatSpreadable
         * 根据ECMAScript规范，这个符号作为一个属性表示“一个布尔值，
         * 如果是true，则意味着对象应该用Array.prototype.concat()打平其数组元素”
         */
        var initial = ['foo'];
        var array = ['bar'];
        // console.log(array[Symbol.isConcatSpreadable]);   // undefined , 默认true, 数组对象默认情况下会被打平到已有的数组
        // console.log(initial.concat(array));                // ['foo', 'bar']
        // array[Symbol.isConcatSpreadable]=false;             // false，直接把数组对象添加到末尾
        // console.log(initial.concat(array));                // ['foo', Array(1)]
        // let arrayLikeObject = { length: 1, 0: 'baz' };
        // console.log(arrayLikeObject[Symbol.isConcatSpreadable]);   // undefined, 默认fasle, 类数组对象默认情况下会被追加到数组末尾
        // console.log(initial.concat(arrayLikeObject));                // ['foo', {...}]
        // arrayLikeObject[Symbol.isConcatSpreadable]=true;              // true, 把对象拍平
        // console.log(initial.concat(arrayLikeObject));                // ['foo', 'baz']
        // let otherObject = new Set().add('qux');
        // console.log(otherObject[Symbol.isConcatSpreadable]);   // undefined, 默认fasle, 其他不是类数组对象的对象被追加到数组末尾
        // console.log(initial.concat(otherObject));                // ['foo', Set(1)]
        // otherObject[Symbol.isConcatSpreadable]=true;             // true , 对象被忽略
        // console.log(initial.concat(otherObject));                // ['foo']
    };
    test.prototype.testOperator = function () {
        // ----------- 一元运算符会把其它类型转换成number型（转不了数值就转成NaN）
        var snum = "101";
        var num = +snum;
        console.log("num : " + num + "  type : " + typeof (num)); //num : 101  type : number
        var s1 = "01";
        var s2 = "1.1";
        var s3 = "z";
        var b = false;
        var f = 1.1;
        var o = {
            valueOf: function () {
                return -1;
            }
        };
        // 在ts中，下面语句会报错，这其实是很坏的写法。
        // //Type 'number' is not assignable to type 'string'.
        // s1 = +s1;   // 值变成数值1
        // s2 = +s2;   // 值变成数值1.1
        // s3 = +s3;   // 值变成NaN
        // //'number' is not assignable to type 'boolean'.
        // b = +b;     // 值变成数值0
        // f = +f;     // 不变，还是1.1
        // o = +o;     // 值变成数值-1
        // console.log(`s1 : ${s1}    s2 : ${s2}   s3 : ${s3}    b : ${b}   f : ${f}   o : ${o}`)
        console.log("\"blue\" : " + !!"blue"); // true
        console.log("0 : " + !!0); // false
        console.log("NaN : " + !!NaN); // false
        console.log("\"\" : " + !!""); // false
        console.log("12345 : " + !!12345); // true
        console.log("null : " + !!null); // false   
        console.log("undefined : " + !!undefined); // false
        console.log("\"Brick\" < \"alphabet\" : " + ("Brick" < "alphabet")); // true
        console.log("\"23\" < \"3\" : " + ("23" < "3")); // true
        // // ts 中这会报错
        // // Operator '<' cannot be applied to types 'string' and 'number'.
        // console.log(`"23" < 3 : ${"23" < 3}`) // false
        // console.log(`"a" < 3 : ${"a" < 3}`) // false  字符"a"不能转换成任何有意义的数值，所以只能转换为NaN。这里有一个规则，即任何关系操作符在涉及比较NaN时都返回false
        // //This condition will always return 'false'.ts(2845)
        // console.log(`NaN == NaN : ${NaN == NaN}`) // false
        // // 相等和不相等操作符会先进行类型转换（通常称为强制类型转换）再确定操作数是否相等。
        // // ts 报错 This condition will always return 'false' since the types 'string' and 'number' have no overlap.
        // console.log(`"55" == 55 : ${"55" == 55}`) // true
        // console.log(`"55" === 55 : ${"55" === 55}`) // false
    };
    test.prototype.testStatement = function () {
        break_outter: for (var i = 0; i < 3; i++) {
            console.log("---- i : " + i);
            for (var j = 0; j < 3; j++) {
                console.log("---- ---- j : " + j);
                for (var k = 0; k < 3; k++) {
                    console.log("---- ---- ---- k : " + k);
                    if (k === 1) {
                        break break_outter;
                    }
                }
            }
        }
        console.log('\n********************************\n');
        continue_outter: for (var i = 0; i < 3; i++) {
            console.log("---- i : " + i);
            for (var j = 0; j < 3; j++) {
                console.log("---- ---- j : " + j);
                for (var k = 0; k < 3; k++) {
                    console.log("---- ---- ---- k : " + k);
                    if (k === 1) {
                        continue continue_outter;
                    }
                }
            }
        }
        // ------------- 这个写法还挺新颖
        var num = 25;
        switch (true) {
            case num < 0:
                console.log("Less than 0.");
                break;
            case num >= 0 && num <= 10:
                console.log("Between 0 and 10.");
                break;
            case num > 10 && num <= 20:
                console.log("Between 10 and 20.");
                break;
            default:
                console.log("More than 20.");
        }
    };
    test.prototype.testObject = function () {
        var name1 = "Nicholas";
        var name2 = new String("Matt");
        // // @ts-ignore   Property 'age' does not exist on type 'string'.ts(2339)
        // name1.age = 27; //Cannot create property 'age' on string 'Nicholas'
        // // @ts-ignore
        // name2.age = 26;
        // // @ts-ignore
        // console.log(name1.age);     // undefined
        // // @ts-ignore
        // console.log(name2.age);     // 26
        // console.log(typeof name1); // string
        // console.log(typeof name2); // object
        var obj = { val: "val 0" };
        function setVal(obj) {
            obj.val = "val 1";
            obj = null;
        }
        setVal(obj);
        console.log("obj : " + JSON.stringify(obj));
        //对象在布尔表达式中都会自动转换为true
        var falseObject = new Boolean(false);
        var result = falseObject && true;
        console.log(result); // true
        var falseValue = false;
        result = falseValue && true;
        console.log(result); // false
        console.log(typeof falseObject); // object
        console.log(typeof falseValue); // boolean
        console.log(falseObject instanceof Boolean); // true
        // @ts-ignore  The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.ts(2358)
        console.log(falseValue instanceof Boolean); // false
    };
    test.prototype.testDate = function () {
        var date1 = new Date(2019, 0, 1); // 2019年1月1日
        var date2 = new Date(2019, 1, 1); // 2019年2月1日
        console.log("date1 = " + date1 + "   " + date1.valueOf() + "   " + typeof (date1) + "   " + (date1 instanceof Date) + " ");
        console.log("date2 = " + date2);
        console.log(date1 < date2); // true
        console.log(date1 > date2); // false
    };
    test.prototype.testReqExp = function () {
        var pattern = /aaa/g;
        var str = "bbb aaaa ccc ddd eeee";
        var matchs = pattern.exec(str);
        console.log(matchs && matchs[0]);
        console.log(pattern.lastIndex);
        pattern.lastIndex = 3;
        matchs = pattern.exec(str);
        console.log(matchs && matchs[0]);
        console.log(pattern.lastIndex);
        pattern.lastIndex = 0;
        console.log(pattern.test(str));
    };
    test.prototype.testMath = function () {
        var values = [1, 2, 3, 4, 5, 6, 7, 8];
        var max = Math.max.apply(Math, values);
        console.log("max = " + max);
    };
    test.prototype.testArray = function () {
        var _a;
        // 字符串会被拆分为单字符数组
        // @ts-ignore Property 'from' does not exist on type 'ArrayConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2550)
        console.log(Array.from("Matt")); // ["M", "a", "t", "t"]
        // 可以使用from()将集合和映射转换为一个新数组
        // @ts-ignore Cannot find name 'Map'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2583)
        var m = new Map().set(1, 2)
            .set(3, 4);
        // @ts-ignore Cannot find name 'Set'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2583)
        var s = new Set().add(1)
            .add(2)
            .add(3)
            .add(4);
        // @ts-ignore
        console.log(Array.from(m)); // [[1, 2], [3, 4]]
        // @ts-ignore
        console.log(Array.from(s)); // [1, 2, 3, 4]
        // Array.from()对现有数组执行浅复制
        var a1 = [1, 2, 3, 4];
        // @ts-ignore
        var a2 = Array.from(a1);
        console.log(a1); // [1, 2, 3, 4]
        console.log(a1 === a2); // false
        // 可以使用任何可迭代对象
        var iter = (_a = {},
            // @ts-ignore
            _a[Symbol.iterator] = function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, 1];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, 2];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, 3];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, 4];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            },
            _a);
        // @ts-ignore
        console.log(Array.from(iter)); // [1, 2, 3, 4]
        // arguments对象可以被轻松地转换为数组
        function getArgsArray() {
            // @ts-ignore
            return Array.from(arguments);
        }
        // @ts-ignore
        console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]
        // from()也能转换带有必要属性的自定义对象
        var arrayLikeObject = {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        };
        // @ts-ignore
        console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
        var values = [0, 1, 5, 10, 15, 31, 100, 1000];
        values.sort();
        console.log(values); // 0,1,10,15,5
        values.sort(function (a, b) {
            return a - b;
        });
        console.log(values);
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var val = values_1[_i];
            console.log("val is " + val);
        }
        values.forEach(function (val) {
            console.log("val is " + val);
        });
    };
    test.prototype.testIterator = function () {
        function generatorFun() {
            return __generator(this, function (_a) {
                return [2 /*return*/, "generator"];
            });
        }
        var gfo = generatorFun();
        // @ts-ignore
        console.log(gfo.next());
    };
    return test;
}());
exports.test = test;
var ts = new test();
// ts.do(20)
// ts["do"](30)
// ts["innerDo"](30)// 通过方括号，可以调用私有(private)方法
// ts.testBool()
// ts.testNum()
// ts.testString()
// ts.testTagFunction()
// ts.testSymbol()
// ts.testOperator()
// ts.testStatement()
// ts.testObject()
// ts.testDate()
// ts.testReqExp()
// ts.testMath()
// ts.testArray()
ts.testIterator();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
