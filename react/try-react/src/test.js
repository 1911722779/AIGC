// console.log('test一下');
// es6 module , add.js 返回一个add方法
// add.js 会返回多个方法，只需要add 方法
// import Add from '路径名': 引入路径名下默认导出项（export default{}的内容）
// 注意：export可以有很多，但export default 只能有一个
// import {方法名} from '路径名': 引入路径名下的方法（export）
import Add,{ add,minus } from './add.js'

console.log(Add);
console.log(minus(1,2));
console.log(add(1,2));
