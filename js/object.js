let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function () {
    console.log(this.name);
};


person.sayName()



// 定义一个对象，包含伪私有成员year_和公共成员edition
// 将属性显式添加到对象之后，[[Configurable]]、[[Enumerable]]和[[Writable]]都会被设置为true，而[[Value]]特性会被设置为指定的值。
let book = {
    year_: 2017,
    edition: 1
};
Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});
book.year = 2018;
console.log(book.edition); // 2


let book2 = {};
Object.defineProperties(book2, {
    year_: {
        value: 2017,
        // writable 默认是false, 不可修改，但是不会报错，Orz
        // writable : true
        // 在调用Object.defineProperty()时，configurable、enumerable和writable的值如果不指定，则都默认为false。
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            console.log('---------------- getter : ', this.year_)
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                console.log('---------------- setter ????? : ', newValue, this.year_)
                this.edition += newValue - 2017;
            }
            console.log('---------------- setter : ', newValue, this.year_)
        }
    }
});
book2.year = 2023
console.log(`year : ${book2.year}   edition : ${book2.edition}`)


console.log('\n------------------------ 对象解构')
let person2 = {
    name: 'Matt',
    age: 27
};
let { name, age } = person2;
console.log(name);   // Matt
console.log(age);    // 27