/* next() 可以传入一个实参，这个参数就是 执行到的yield语句 整个返回的结果 */
/* next() 传入的实参，是前一个yield 整体返回的结果 */

// function* gen(arg){
//   console.log(arg)
//   let one = yield 111;
//   console.log(one) // next不传参数的时候是undefined，只有当下一个next调用传的是什么参数就打印什么。
//   yield 222;
// }

// const iterator = gen('arg参数');
// console.log(iterator)
// console.log(iterator.next())
// console.log(iterator.next('promise')) // next 传入的实参 是前一个yield 返回的整体的结果


// next 是可以传参的，传入的参数将作为上一个yield 语句返回的结果