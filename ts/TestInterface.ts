interface ITest{
    sayHi()
}


class Test implements ITest{
    sayHi() {
        console.log("Hi Test");
    }
    
}

class Test2 implements ITest{
    sayHi() {
        console.log("Hi Test2");
    }
    
}

class Test3 {
    sayHi() {
        console.log("Hi Test3");
    }
}

let ins = new Test();
ins.sayHi()
let ins2 = new Test2();
ins2.sayHi()
let ins3 = new Test3();
ins3.sayHi()

function interfaceParam(ins: ITest)
{
    ins.sayHi()
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