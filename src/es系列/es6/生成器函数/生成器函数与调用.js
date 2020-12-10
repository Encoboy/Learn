/* 生成器其实就是一个特殊的函数，异步编程的一种解决方法 */
function* gen(){
  // console.log(111)
  const one = yield 11;
  // console.log(one) // undefined
  // console.log(222);
  yield 22;
  // console.log(333);
  yield 33;
  // console.log(444)
}
// let iterator = gen(); // 直接这样调用得到的是一个迭代器对象，有一个next方法
// console.log(iterator)
// console.log(iterator.next()); // {value:11,done:false}
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // {value:undefined,done:falses}

//for of 遍历，因为它是一个迭代器对象
// for(let v of gen()){
//   console.log(v)  // 遍历出来的是yield后面的值
// }