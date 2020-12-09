/* catch 用来捕获异步出错，其效果是相当于then方法的第二个参数 */

const p = new Promise((resolve,reject) => {
  reject('出错了')
})

// p.then(value => {
//   console.log(value)
// },reason => {
//   console.warn(reason)
// })
p.catch(err => console.log(err))