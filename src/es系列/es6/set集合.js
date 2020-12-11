/**
 * es 6 提供了新的数据结构set集合，它类似于数组，但成员值都是唯一的
 * 集合实现了iterator接口，所以它可以被for..of遍历和使用扩展运算符
 * add has size deltete 方法 增删查  清空 claer
*/

let s = new Set();
console.log(s,typeof s)
let s2 = new Set([1,2,3,4])
// console.log(s2)

//方法

// s2.add(5)  // 添加成员
// console.log(s2)

// console.log(s2.size) // 成员个数

// console.log(s2.has(5))  // 查询
// console.log(s2.has(4))

// console.log(s2.delete(5))  // 删除
// console.log(s2.delete(2))
// console.log(s2)

// console.log(s2.clear()) // 清空
// console.log(s2) 

/* 集合的应用 */
let arr = [1,2,3,4,5,4,3];
/* 1. 数组的去重 */
// let arr2 = [...new Set(arr)]
// console.log(arr2)

/* 2. 数组的交集 */
// let arr2 = [3,3,4,5,6,7];
// let arr3 = [...new Set(arr)];
// let arr4 = [...new Set(arr2.filter((item) => arr3.includes(item)))]; // 方法一
// let arr4 = [...new Set(arr)].filter(item => new Set(arr2).has(item))  // 方法二
// console.log(arr4)

/* 3. 数组个并集 两个数组的合并 你的加上我的*/
// let arr2 = [2,3,4,4,8,9];
// let arr3 = [...new Set([...new Set(arr),...new Set(arr2)])];
// console.log(arr3);

/* 4. 差集 我有的你没有，你有的我米有 合成的一个数组 */
let arr2 = [4,4,5,6,7,7];
let arr3 = [...new Set(arr2)].filter(item => !new Set(arr).has(item))
let arr4 = [...new Set(arr)].filter(item => !new Set(arr2).has(item))
console.log([...arr3,...arr4])