/* 子类不可以直接调用父类的方法 ，只能重写*/
class App {
  constructor({name}={}){
    this.name = name;
  }
  run(){
    console.log('i can run')
  }
}

class Index extends App {
  constructor({name,age}={}){
    super({name});
    this.age = age;
  }
  run(){
    console.log('me too')
  }
}

let s = new Index({name:'index',age:12});
s.run();