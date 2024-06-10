// function foo(a,str){
//     eval(str); // 此方法的作用就是将原本不属于此作用域的变量搬运进这个作用域
//     console.log(a,b);
// }

// foo(1,'var b =2');

// var obj = {
//     a:1, // a 为key ，1 为value（键值对
//     b:2,
//     c:3
// }
// // 改对象内各属性的值的方式
// // 1）
// obj.a = 2;
// obj.b = 3;
// obj.c = 4;
// // 2）
// with(obj){
//     a = 2
//     b = 3
//     c = 4
// }
// 方法2有bug
function foo(obj){
    with(obj){
        a = 2
    }
}
var obj1 = {
    a:1
}
var obj2 = {
    b:1
}
foo(obj2)
console.log(a);

