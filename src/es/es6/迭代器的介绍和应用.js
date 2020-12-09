/**
 * 迭代器是一种接口，Iterator 为各种不同的数据结构提供一个访问机制
 * 任何数据只要部署了Iterator接口，都可以完成遍历操作，主要是供for..of消费
*/

/**
 * 工作原理
 * const iterator = colorArr[Symbol.iterator](); 
 * 创建一个指针对象，指向当前数据结构的起始位置
 * 第一次调用对象的next方法，指针自动指向数据结构的第一个成员
 * 接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
 * 每调用next方法返回一个包含value 和 done 属性的对象
 * 注：需要自定义遍历数据的时候，要想到迭代器
*/

/* 原生的具有Iterater接口的原始数据 */
/**
 * Array 
 * String
 * Arguments
 * Set
 * Map
 * TypedArray
 * NodeList
*/

// for ... of
// 遍历数组
// const color = ['red','pink','black','green'];
// for(let v of color) {
//   console.log(v)
// }
// 遍历Map
// const map = new Map();
// map.set('name','小明');
// map.set('age',12);
// for(let v of map){
//   console.log(v)
// }


/* Symbol.Iterator */
// const color  = ['red','pink','black','white'];
// let iterator = color[Symbol.iterator]();
// console.log(iterator)
// 调用next方法
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next()) // {value : white,done:true}
// console.log(iterator.next()) // {value : undefined, done: true}

/* 需要自定义遍历数据的时候，要想到迭代器 */
const userData = {
  id:1,
  name:'小明',
  school:'一中',
  age:'16',
  friend:[
    '小南',
    '小新',
    '小丽',
    '花花'
  ],
  like(){
    console.log('i like run')
  },
  [Symbol.iterator](){  // 本质上就是一个函数
    let index = 0;
    const _this = this;
    let keyArr = [];
    for(let key in _this){
     keyArr.push(key);
    }
    return {
      next:function(){
          if(index < keyArr.length){
            let result = {value:_this[keyArr[index]],done:false};
            // 一次next 自加1
            index ++ ;
            return result;
          }else{
            let result = {value:undefined,done:true};
            return result;
        }
        }
      }
    }
    // return {
    //   next:function(){
    //     if(index < _this.friend.length){
    //       let result = {value:_this.friend[index],done:false};
    //       // 一次next 自加1
    //       index ++ ;
    //       return result;
    //     }else{
    //       let result = {value:undefined,done:true};
    //       return result;
    //     }
    //   }
    // }
}
// for(let v in userData){ // for..in 遍历出键名
//   console.log(v)
// }

for(let v of userData){
  console.log(v)
}