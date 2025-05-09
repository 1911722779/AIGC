let str = 'hello'
//字符串api
let arr = str.split('')
console.log(arr);
// es6 展开运算符
// ...展开运算符 spread 字符串展开成为字符数组 
console.log([...str]);
console.log([..."hello"]);