/**
 * es 5 实现类的继承
 * es6 实现类的继承
*/

/* es 5 实现类的继承 */
// function Robot({name,color}={}){  
//   this.name = name;
//   this.color = color;
// }
// Robot.prototype.run = function(){
//   console.log('I can run')
// }

// function CarRobot({name,color,height,age}){
//   Robot.call(this,{name,color}); // 将实例调用的this指向Robot
//   this.height = height;
//   this.age = age;
// }

// CarRobot.prototype.say = function(){
//   console.log(' i am carRobot man')
// }

// CarRobot.prototype = new Robot; // 将父类实例放到子类的原型上，这样子类实例化出来的对象就可以访问到父类原型上的方法
// CarRobot.prototype.constructor = CarRobot; // 对子类构造函数进行矫正

// let mbc = new CarRobot({name:'面包车',color:'white',height:'12M',age:'1000'})
// // console.log(mbc)
// // console.log(mbc.name)
// // console.log(mbc.age)
// // mbc.say();
// mbc.run();

/* es 6 的继承 */
class Robot{
  constructor({name,color}={}){
    this.name = name;
    this.color = color;
  }
  run(){
    console.log('I can run')
  }
}

class CarRobot extends Robot{
  constructor({name,color,height,age}){
    super({name,color}); // 父类constructor
    this.height = height;
    this.age = age;
  }
  say(){
    console.log('I 我可以说话')
  }
}

let mbc = new CarRobot({name:'面包车',color:'white',height:'red',age:1200})
// console.log(mbc)
// console.log(mbc.age)
// console.log(mbc.name)
// mbc.say();
// mbc.run();