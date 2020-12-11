/* 类的静态成员属性 直接往类上添加的属性和方法，在实例上是访问不到的 */


// es5 的类的静态属性
// function Robot(){

// }
// Robot.name = '机器人';    // 这两个属性只属于函数对象上的属性，并属于实例对象上的属性
// Robot.run = function(){
//   console.log('I can run')
// }

// Robot.prototype.size = '15M' // 这个才属于实例对象上的属性

// let car = new Robot();
// console.log(car.name)  // undefined
// car.run(); // run is not  a function


// es 6 类的静态属性
class App{
  static name = 'robot';
  static run = function(){
    console.log('I can run')
  }
}

let index = new App();
console.log(index.name)
console.log(App.name)
