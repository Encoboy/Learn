/**
 * 扩展运算符可以将数组 转换为 逗号分割的 参数序列
 * 扩展运算符和剩余参数很像，但是它们有本质的区别，剩余参数rest，是放在数组的形参位置。而扩展运算符是放在函数传入的实参位置。
*/
// function fn(...rest){
//   console.log(rest);
// }
// fn(1,2,3)
// function fn(){
//   console.log(arguments)
// }
// let arr = [1,2,3];
// fn(...arr)

/* 数组的合并 */
// let arrA = [1,2,3];
// let arrB = [3,4,5];
// const arrAB = [...arrA,...arrB];
// console.log(arrAB); 

/* 数组的拷贝 注意：如果有引用类型，只是浅拷贝 */
// let shuiguo = ['apple','banana','origne'];
// let copyshuiguo = [...shuiguo];
// console.log(copyshuiguo)
// copyshuiguo.push('哈密瓜');
// console.log(copyshuiguo);
// console.log(shuiguo)
// 有引用类型，只是浅拷贝
// let guo = ['hamigua',{applecount:1}];
// let copyguo = [...guo];
// console.log(copyguo)
// copyguo[1].applecount = 2;
// console.log(copyguo)
// console.log(guo)

/* 对象的扩展 */
// const obj = {a:1,b:2,c:3};
// const copyobj = {...obj};
// console.log(copyobj)
// copyobj.d = 4;
// console.log(copyobj)

// const obj = {a:1,b:2,c:3,d:{a:1}};
// const copyobj = {...obj};
// console.log(copyobj)
// copyobj.d.a = 2;
// console.log(copyobj)
// console.log(obj)  // 拷贝出来的对象只有元素是引用类型的时候，才是浅拷贝

/*将伪数组转化伪真正的数组*/
// function fn(){
//   console.log(arguments)
//   const arr = [...arguments]
//   console.log(arr)
// }
// fn(1,2,3)
