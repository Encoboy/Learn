/* 对象的解构赋值 */
let user = {name:'小明',age:18,blood:'AB'};

// let {name,age,blood} = user;
// console.log(name,age,blood);

// let {name:userName} = user;
// console.log(userName)

// let {sex="man"} = user;
// console.log(sex)

// let guojia = {china:{beijing:'朝阳区'}}
// let {china:{beijing}} = guojia;
// console.log(beijing)

// let {name,...obj} = user;
// console.log(name,obj)

let robot = {color:'red',run:function(){console.log('I can run')}}
const {color,run} = robot;
console.log(run())

/* 数组的解构 */
// let banji = ['小红','小明','小蓝'];

// let [h,m,l] = banji;
// console.log(h,m,l)

// let [h,...l] = banji;
// console.log(h,l)

/* 对象和数组解构赋值的区别 */
/**
 * 数组的解构赋值是通过数组的下标顺序解构出来的，而对象是通过 key键来进行解构
*/