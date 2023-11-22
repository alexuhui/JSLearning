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
    }
}



let ts = new test()
// ts.do(20)
// ts["do"](30)
// ts["innerDo"](30)// 通过方括号，可以调用私有(private)方法
// ts.testBool()
// ts.testNum()
ts.testString()