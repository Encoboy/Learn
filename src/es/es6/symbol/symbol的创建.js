/* se6 引入的新的原始数据类型  用来表示一个独一无二的值*/
// const symbolobj = Symbol();
// console.log(symbolobj)
// let s2 = Symbol('name');  // 描述字符串，注释差不多
// console.log(s2) 
// let s3 = Symbol('name');
// console.log(s2 === s3)

// Symbol.for 来创建 Symbol，可以通过描述字符串来判断是否相等
// let s4 = Symbol.for('age');
// let s5 = Symbol.for('age');
// console.log(s4 === s5);

/* Symbol 不能与其他数据类型进行运算 */
let s6 = Symbol('1');
let number = 10;
console.log(s6 < number) // 不能加减乘除 或 其他运算