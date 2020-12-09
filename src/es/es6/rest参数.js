/**
 * 用来代替 es6 没有arguments参数的情况，arguments用来获取传给函数的实参
*/

// es 5
// function fn(){
//   console.log(arguments)
// }
// fn(1,2,3)

// es6 
let fn = (a,...rest) => {
  console.log(a)
  console.log(rest)
}
fn(1,2,3)