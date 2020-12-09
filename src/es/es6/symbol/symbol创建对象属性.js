/* 当为一个已经存在的对象添加属性和方法的时候，在不知道 这个对象的属性的前提下，如何安全的添加属性和方法 */

// 有一个未知属性多少的对象
// let userData = {
//   id:1,
//   name:'xiaoming',
//   run(){
//     console.log('我可以跑步')
//   },
//   eat(){
//     console.log('我可以吃饭')
//   }
// }

// let methods = {
//   id:Symbol(),
//   run:Symbol(),
// }

// userData[methods.id] = 18;

// userData[methods.run] = function(){
//   console.log('我也可以跑')
// }
// const objSymbol = Object.getOwnPropertySymbols(userData);
// console.log(userData[objSymbol[0]]) 获取 对象中symbol 的值。

// 第二种用Symbol为对象添加属性的方法 直接添加 用方括号
// const data = {
//   id:1,
//   name:'ming',
//   [Symbol()]:function(){
//     console.log('一个属性')
//   },
//   [Symbol()]:'18 yy'
// }
// console.log(data)
// console.log(data[Object.getOwnPropertySymbols(data)[1]])  // 获取对象中的Symbol属性的值