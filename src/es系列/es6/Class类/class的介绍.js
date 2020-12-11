/**
 * es 6 中的class 类可以只看作是一个语法糖，几乎所有的功能在es5 都可以做到
*/

const { run } = require("jest");

/* es5 创建一个类 */
// function Robot({name,color}){
//   this.name = name;
//   this.color = color;
//   // this.run = function () {
//   //   console.log('I can run')
//   // }
// }
// Robot.prototype.run = function(){
//   console.log('I can run')
// }
// let car = new Robot({name:'汽车人',color:'red'})
// // console.log(car)
// // console.log(car.name)
// // car.run()
// let plan = new Robot({name:'飞机人',color:'white'})
// console.log(plan)
// console.log(plan.color)
// plan.run();


/* es6 创建类 */
class App {
  constructor({name,color}){
    console.log(name,color) // 对象实例化的时候，这个constructor函数也会执行
    this.name = name;
    this.color = color;
  }
  run(){
    console.log('I can run')
  }
}
let index = new App({name:'index',color:'red'});
console.log(index)
console.log(index.name)
index.run();
