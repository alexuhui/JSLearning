export class test {
    private a: number | null = null

    do(n: number): void {
        console.log(`${typeof this.a}   ${n}`);
        console.log(typeof this.a, n);

    }

    private innerDo(n: number): void {
        console.log('innerDo : ', n);
    }


    private bool: boolean | null
    // private bool: boolean | null = null
    testBool() {
        if (this.bool) {
            console.log(`true selector, bool is ${this.bool}`)
        } else {
            console.log(`false selector, bool is ${this.bool}`)
        }

        console.log(`string : "hello" is ${Boolean("hello")}   "" is ${Boolean("")}`)
        console.log(`number : 121 is ${Boolean(121)}   0 is ${Boolean(0)}  NaN is ${Boolean(NaN)}`)
        console.log(`null is ${Boolean(null)}`)
        console.log(`undefined is ${Boolean(undefined)}`)
    }

    private num: number = 55
    testNum(): void {
        console.log(`num ${this.num}`)
        this.num = 55.55
        console.log(`num ${this.num}`)
        this.num = 0o55
        console.log(`num ${this.num}`)
        this.num = 0x55
        console.log(`num ${this.num}`)
        console.log(`min num ${Number.MIN_VALUE}`) //  min int ${Number.MIN_SAFE_INTEGER}`)
        console.log(`max num ${Number.MAX_VALUE}`) //   max int ${Number.MAX_SAFE_INTEGER}`)
        // console.log(`NaN == NaN is ${NaN == NaN}   ${isNaN(NaN)}`);
        // console.log(`0/0 == NaN is ${(0 / 0) == NaN} ${isNaN(0 / 0)}`);

        console.log(`parseInt("10.5", 2)    : ${parseInt("10.5", 2)}`);    // 2，按二进制解析
        console.log(`parseInt("10.5", 8)    : ${parseInt("10.5", 8)}`);    // 8，按八进制解析
        console.log(`parseInt("10.5", 10)   : ${parseInt("10.5", 10)}`);   // 10，按十进制解析
        console.log(`parseInt("10.5", 16)   : ${parseInt("10.5", 16)}`);   // 16，按十六进制解析

        console.log(`parseFloat("10.5")     : ${parseFloat("10.5")}`);   // parseFloat()只解析十进制值，不能指定底数

        console.log(`parseFloat("1234blue") : ${parseFloat("1234blue")}`);   // 1234，按整数解析
        console.log(`parseFloat("0xA")      : ${parseFloat("0xA")}`);         // 0
        console.log(`parseFloat("22.5")     : ${parseFloat("22.5")}`);        // 22.5
        console.log(`parseFloat("22.34.5")  : ${parseFloat("22.34.5")}`);    // 22.34
        console.log(`parseFloat("0908.5")   : ${parseFloat("0908.5")}`);     // 908.5
        console.log(`parseFloat("3.125e7")  : ${parseFloat("3.125e7")}`);    // 31250000

        let num = 10;
        console.log(`num = ${num}  num.toString()    : ${num.toString()}`);      // "10"
        console.log(`num = ${num}  num.toString(2)   : ${num.toString(2)}`);     // "1010"
        console.log(`num = ${num}  num.toString(8)   : ${num.toString(8)}`);     // "12"
        console.log(`num = ${num}  num.toString(10)  : ${num.toString(10)}`);    // "10"
        console.log(`num = ${num}  num.toString(16)  : ${num.toString(16)}`);    // "a"
    }


    testString(): void {
        let value1 = 10;
        let value2 = true;
        let value3 = null;
        let value4;
        console.log(` value = ${value1}   String(value1) : ${String(value1)}`); // "10"
        console.log(` value = ${value2}   String(value2) : ${String(value2)}`);   // "true"
        console.log(` value = ${value3}   String(value3) : ${String(value3)}`);   // "null"
        console.log(` value = ${value4}   String(value4) : ${String(value4)}`);   // "undefined"


        let myMultiLineString = 'first line\nsecond line';
        let myMultiLineTemplateLiteral =
            `first line
second line`;
        console.log(myMultiLineString);
        console.log(myMultiLineTemplateLiteral);
        console.log(myMultiLineString === myMultiLineTemplateLiteral); // true


        let value = 5;
        let exponent = 'second';
        // 以前，字符串插值是这样实现的：
        let interpolatedString =
            value + ' to the ' + exponent + ' power is ' + (value * value);
        // 现在，可以用模板字面量这样实现：
        let interpolatedTemplateLiteral =
            `${value} to the ${exponent} power is ${value * value}`;
        console.log(interpolatedString);              // 5 to the second power is 25
        console.log(interpolatedTemplateLiteral);   // 5 to the second power is 25

        //所有插入的值都会使用toString()强制转型为字符串，而且任何JavaScript表达式都可以用于插值。嵌套的模板字符串无须转义
        console.log(`Hello, ${`World`}! `);   // Hello, World!

        //将表达式转换为字符串时会调用toString()
        let foo = { toString: () => 'World' };
        console.log(`Hello, ${foo}! `);        // Hello, World!

        // 这两句直接写到js是可以的，ts转js报错
        // error TS2339: Property 'raw' does not exist on type 'StringConstructor'
        //         console.log(String.raw`first line\nceconed line`);
        //         console.log(String.raw`first line
        // ceconed line`);
    }

    testTagFunction() {
        let a = 6;
        let b = 9;
        function simpleTag(strings, aValExpression, bValExpression, sumExpression, test) {
            console.log(strings); // 连接模板的字符串数组
            console.log(aValExpression);
            console.log(bValExpression);
            console.log(sumExpression);
            console.log('---------------- test : ' + test)
            return 'foobar';
        }
        let untaggedResult = `${a} + ${b} = ${a + b}`;
        let taggedResult = simpleTag`${a}+${b}=${a + b} - ${20}`;
        // ["", " + ", " = ", ""]
        // 6
        // 9
        // 15
        console.log(untaggedResult);    // "6 + 9 = 15"
        console.log(taggedResult);      // "foobar"


        //因为表达式参数的数量是可变的，所以通常应该使用剩余操作符（rest operator）将它们收集到一个数组中：
        function simpleTag2(strings, ...expressions) {
            console.log(strings);
            for (const expression of expressions) {
                console.log(expression);
            }
            return 'foobar';
        }
        let taggedResult2 = simpleTag2`${a} + ${b} = ${a + b}     ${a} + ${b} = ${a + b}`;
        // ["", " + ", " = ", ""]
        // 6
        // 9
        // 15
        console.log(taggedResult2);   // "foobar"


        /**
         * 对于有n个插值的模板字面量，传给标签函数的表达式参数的个数始终是n，
         * 而传给标签函数的第一个参数所包含的字符串个数则始终是n+1。
         * 因此，如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串
         */
        function zipTag(strings, ...expressions) {
            return strings[0] +
                expressions.map((e, i) => `${e}${strings[i + 1]}`)
                    .join('');
        }
        let untaggedResult3 = `${a} + ${b} = ${a + b}`;
        let taggedResult3 = zipTag`fffff   ${a} + ${b} = ${a + b}   ttttt`;
        console.log(untaggedResult3);   // "6 + 9 = 15"
        console.log(taggedResult3);     // "6 + 9 = 15"
    }

    testSymbol() {
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
        let f = new Foo();
        console.log(f instanceof Foo); // true
        class Bar { }
        let b = new Bar();
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
        let initial = ['foo'];
        let array = ['bar'];
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
    }

    testOperator() {
        // ----------- 一元运算符会把其它类型转换成number型（转不了数值就转成NaN）
        let snum = "101"
        let num = +snum
        console.log(`num : ${num}  type : ${typeof (num)}`) //num : 101  type : number
        let s1 = "01";
        let s2 = "1.1";
        let s3 = "z";
        let b = false;
        let f = 1.1;
        let o = {
            valueOf() {
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


        console.log(`"blue" : ${! ! "blue"}`); // true
        console.log(`0 : ${! !0}`);        // false
        console.log(`NaN : ${! !NaN}`);     // false
        console.log(`"" : ${! ! ""}`);      // false
        console.log(`12345 : ${! !12345}`);   // true
        console.log(`null : ${! !null}`);   // false   
        console.log(`undefined : ${! !undefined}`);   // false

        console.log(`"Brick" < "alphabet" : ${"Brick" < "alphabet"}`) // true
        console.log(`"23" < "3" : ${"23" < "3"}`) // true
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
    }

    testStatement() {
        break_outter:
        for (let i = 0; i < 3; i++) {
            console.log(`---- i : ${i}`)
            for (let j = 0; j < 3; j++) {
                console.log(`---- ---- j : ${j}`)
                for (let k = 0; k < 3; k++) {
                    console.log(`---- ---- ---- k : ${k}`)
                    if (k === 1) {
                        break break_outter;
                    }
                }
            }
        }

        console.log('\n********************************\n')
        
        continue_outter:
        for (let i = 0; i < 3; i++) {
            console.log(`---- i : ${i}`)
            for (let j = 0; j < 3; j++) {
                console.log(`---- ---- j : ${j}`)
                
                for (let k = 0; k < 3; k++) {
                    console.log(`---- ---- ---- k : ${k}`)
                    if (k === 1) {
                        continue continue_outter;
                    }
                }
            }
        }
    }
}



let ts = new test()
// ts.do(20)
// ts["do"](30)
// ts["innerDo"](30)// 通过方括号，可以调用私有(private)方法
// ts.testBool()
// ts.testNum()
// ts.testString()
// ts.testTagFunction()
// ts.testSymbol()
// ts.testOperator()
ts.testStatement()