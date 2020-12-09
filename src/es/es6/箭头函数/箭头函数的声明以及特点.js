/* 箭头函数和普通函数的声明  */
// 函数式声明
// function eat(){
//   console.log('我可以吃饭')
// }
// eat();
// // 变量声明
// let run = function(){
//   console.log('我可以跑')
// }
// run();
// // 匿名函数
// (function(){
//   console.log('我可以飞')
// })()

// es 6 箭头函数
// 不用写function 更简洁
// let read = () => {
//   console.log('我可以读书')
// }

// 当只有一个参数时，可以省略小括号 只有一行的时候，可以省略 return
// let write = name => console.log(name);
// write('小米')

/* 箭头函数不可以用new声明，也就是不能作为构造函数 */
// es 5
// function robot(){
//   this.color = 'red';
//   this.name = 'robot';
// }
// robot.prototype.run = function(){
//   console.log('我可以跑步');
// }

// let qicheren = new robot();
// console.log(qicheren.color);
// qicheren.run();

// es 6 
/**
 * 为什么 箭头函数不可以用作 被new 
 * 1、简单的回答就是 箭头函数没有contractor，也就是没有原型。
 * 2、从new上来回答，new创建出来的实例可以访问构造函数的属性，可以访问构造函数原型上的属性，这一点结合 箭头函数没有自己的this，所以箭头函数不能被new
*/
// let home = () => {
//   this.color = 'white';
//   this.size = '150M';
// }
// const fangzi = new home();  // home 不是一个constructor构造函数

/*最重要的一个特性，就是箭头函数的this是静态的*/
/*也就是 this 始终指向函数声明时所在作用域下的this的值*/
// window.name = '大学'; // 需要求浏览器打印
// const schoolname = {
//   name:'贺院'
// }
// function school(){
//   console.log(this.name)
// }
// const school2 = () => {
//   console.log(this.name)
// }
// // school(); // 大学
// // school2(); // 大学
// // 改变作用域，改变this指向
// school.call(schoolname); // 贺院
// school2.call(schoolname); // 大学

/* 箭头函数没有arguments对象，但是可以用rest剩余参数来代替*/
// function classname(){
//   console.log(arguments)
// }
// classname('小米姑娘',18)
// const classroom = () => {
//   console.log(arguments);  // 在浏览器中会报错
// }
// classroom('小明',20)
//可以用rest来代替
// const xiaoming = (...rest) => {
//   console.log(rest)  // 得到的是一个数组
// }
// xiaoming('小明',20)

/*箭头函数不适合用在对象的方法*/
// name = '小花';
// let ming = {
//   name:'小明',
//   getName: ()=>{  // 这里不适合用箭头函数 ，这样写的this指向已经跑到了全局了 因为obj对象是不能够产生作用域的
//     console.log(this.name)
//   },
// }
// ming.getName()

/*箭头函数不适用于在dom节点的事件回调中*/
// const btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//   this.style.background = 'red' // 不能读取background没有被定义 因为btn的回调函数发生时，浏览器会用btn的上下文去调用处理函数，也就是window
// })