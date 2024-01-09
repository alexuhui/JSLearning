// let p = new Promise(() => { });
// setTimeout(console.log, 0, p);   // Promise <pending>

// // 无论resolve()和reject()中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默失败，
// let p = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100);
//     // reject();//没有效果
// });
// setTimeout(console.log, 0, p); //Promise<resolved>
// setTimeout(console.log, 1000, p); //Promise<resolved>


// let p = new Promise((resolve, reject) => {
//     setTimeout(reject, 10000);  // 10 秒后调用reject()
//     // 执行函数的逻辑
//     console.log('-------------')
//   });
//   setTimeout(console.log, 0, p);        // Promise <pending>
//   setTimeout(console.log, 11000, p);   // 11 秒后再检查状态
// (After 10 seconds) Uncaught error
// (After 11 seconds) Promise <rejected>


// //  Promise.resolve() 是幂等的
// let p = Promise.resolve(7);
// setTimeout(console.log, 0, p === Promise.resolve(p));
// // true
// setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)));
// // true

// // Promise.reject() 的第一个参数为拒绝理由
// let p = Promise.reject(3);
// setTimeout(console.log, 0, p); // Promise <rejected>: 3
// p.then(null, (e) => setTimeout(console.log, 0, e)); // 3


// let p = Promise.reject(Promise.reject(3))
// setTimeout(console.log, 0, p);


// try {
//     throw new Error('foo');
// } catch (e) {
//     console.log(e); // Error: foo
// }
// try {
//     Promise.reject(new Error('bar'));
// } catch (e) {
//     console.log(e);
// }
// //Uncaught(inpromise)Error: bar


let time = 0
let pp1 = new Promise((resolve, rejected) => {
    time = Date.now()
    console.log(time)
    setTimeout(() => {
        resolve(Date.now())
    }, 1000);
})

pp1.then(
    (t) => {
        console.log('--------- on resolve', t, t - time)
    },
    (t) => {
        console.log('--------- on rejected', t, t - time)
    }
)