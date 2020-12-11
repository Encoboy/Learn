/**
 * Map 数据结构 它类似于对象，或者也可以说是一个对象的升级版
 * 成员由键值对组成，但是它的键不限于字符串，可以是对象，数组，任意类型
 * Map 内部实现了 iterator接口，可以使用扩展运算符和for..of 循环遍历
 * 方法：size get set clear has
*/

let m = new Map();

m.set('name','luoban');

/* 除了原生类型，不要这样给Map 加上 key */
// m.set(function(){},'方法');
// m.set([1,2],'arr');
// m.set({a:1,b:2},'对象');
// console.log(m)

// console.log(m.size) // 个数

// console.log(m.has([1,2]))
// console.log(m.has('name'))
// console.log(m.has({a:1,b:2}))

// let key = {
//   c:1,
//   d:2
// };
// m.set(key,'obj')
// console.log(m.has(key)) 
// let keyArr = [1,2,3]
// m.set(keyArr,'this a arr');
// console.log(m.has(keyArr))   // 所以给 map 加上对象，数组这样的引用类型作为key的时候，要在外面重新声明

// console.log(m.get('name')) // 获取value值

// let m2 = m.clear(); // 清空map
// console.log(m)