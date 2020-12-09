/**
 * promise 是es6 引入的 解决异步编程的方案
*/

// 实例化
// const p = new Promise((resolve,reject) => {})

// 读取异步数据
// const p = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     const data = '数据库中的数据';
//     // resolve(data); // 成功时的回调
//     // reject(new Error('读取失败了'));
//   },2000)
// })
// p.then(res => {
//   console.log(res);
// },error => {
//   console.log(error);
// })