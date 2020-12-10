/* 1、不存在变量提升 */
// console.log(phone) // undefined
// var phone = '123'
// console.log(mobile) // 报错 不可以在初始化之前使用
// let mobile = '345'

// eg：
/* var */ 
// console.log(i) // undefined
// for(var i = 0;i<10;i++){
//   setTimeout(function(){console.log(i)},0) // 打印的 i 都是10，因为var 存在变量提升
// }
// console.log(i) // 10
/* let */
// for(let i = 0;i<10;i++){
//   setTimeout(function(){console.log(i)},0); // 打印的i 是正常的0...9; 
// }
// console.log(i) // 报错 i 没有被定义

/* for 循环中var 的异步执行的其他解决方法 */
// for(var i = 0; i<10; i++) {
//   // (function fn(i){setTimeout(function(){console.log(i)},0)})(i) // 自执行 ，闭包
//   setTimeout(function(i){console.log(i)},0,i); // setTiemout 的第三个参数就是setTimeout第一个callback函数的入参
// }


/* 2、不可以重复声明变量 */
// var dog = '大黄';
// console.log(dog);
// var dog = '小泰迪';
// console.log(dog)
// let cat = '咖啡猫';
// console.log(cat);
// let cat = 'Tom'; // 报错 cat 已经被声明

/* 3、不影响作用域链*/
// {
//   let age = 12;
//   function fn(){
//     console.log(age)
//   }
//   fn();
// }
// console.log(age) // 报错