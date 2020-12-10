/* 调用 then 方法 then方法返回的结果是一个promise对象，对象的状态由回调函数执行的结果决定的*/

const p = new Promise((resolve,reject) => {
  setTimeout(()=>{
    // resolve('成功了')
    reject('出错了')
  },1000)
})

// 1、如果回调函数中返回的结果是非promise类型的属性，状态为成功，返回值为对象的成功
const  result = p.then(value => {
  console.log(value)
  //1. 非promise类型的属性
  // return '112233'  // 返回值result是状态为resolve
  // 2. 是promise对象
  // return new Promise((resolve,reject) => {
    // resolve('112233') // 这个决定了回调函数的返回状态为resolve成功
    // reject('出错了') // 这个的返回值是 决定了result的状态是reject失败
  // })
  // 3. 抛出错误
  // throw new Error('出错了') // 返回的也是一个reject的失败状态
  // throw '出错了'
},reason => {
  console.warn(reason)
})

console.log(result)

// 支持链式调用