/**
 * get 当类的属性被访问的时候触发
 * set 当类的属性被修改的时候触发
*/

class App{
  get name(){
    console.log('name 被访问了')
    return '花花'  // 可以给一个返回值
  } 
  set name(name){  // 必须有一个参数
    console.log('name 被修改了')
  }
}

let app = new App();
// console.log(app.name)
app.name = '菲菲'
