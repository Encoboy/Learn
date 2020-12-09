/* 通过生成器函数针对与异步编程的解决方案 */
function user(){
  setTimeout(function(){
    const data = {id:1,name:'小明'};
    iterator.next(data) // 调用next 方法，将数据传入，该数据就作为前一个yield返回的结果
  },2000)
}

function school(data){
  setTimeout(function(){
    console.log(data)
    const schoolname = '一中';
    iterator.next(schoolname)
  },1000)
}

function* gen(){
  const data = yield user();
  const schoolName = yield school(data);
  console.log(schoolName)
}

const iterator = gen();
iterator.next();

/**
 * 这个例子说明了generator 可以控制异步编程
 * school接口要依赖于user接口的返回值，但是school接口的回调时间比user快，所以我们就要控制user返回值之后，再调用school
*/