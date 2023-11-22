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
        console.log(`NaN == NaN is ${NaN == NaN}   ${isNaN(NaN)}`);
        console.log(`0/0 == NaN is ${(0 / 0) == NaN} ${isNaN(0 / 0)}`);

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
        function simpleTag2(strings, ...expressions){
          console.log(strings);
          for(const expression of expressions) {
            console.log(expression);
          }
          return 'foobar';
        }
        let taggedResult2 = simpleTag2`${ a } + ${ b } = ${ a + b }     ${ a } + ${ b } = ${ a + b }`;
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
        let untaggedResult3 =     `${ a } + ${ b } = ${ a + b }`;
        let taggedResult3 = zipTag`fffff   ${ a } + ${ b } = ${ a + b }   ttttt`;
        console.log(untaggedResult3);   // "6 + 9 = 15"
        console.log(taggedResult3);     // "6 + 9 = 15"
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