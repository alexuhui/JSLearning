
/**
 * 要完全理解await关键字，必须知道它并非只是等待一个值可用那么简单。
 * JavaScript运行时在碰到await关键字时，会记录在哪里暂停执行。
 * 等到await右边的值可用了，JavaScript运行时会向消息队列中推送一个任务，这个任务会恢复异步函数的执行。
 * 因此，即使await后面跟着一个立即可用的值，函数的其余部分也会被异步求值。
 * 
 * 如果await后面是一个期约，则问题会稍微复杂一些。
 * 此时，为了执行异步函数，实际上会有两个任务被添加到消息队列并被异步求值。
 */
async function foo() {
    console.log(2);
    console.log(await Promise.resolve(8));
    console.log(9);
}
async function bar() {
    console.log(4);
    console.log(await 6);
    console.log(7);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9