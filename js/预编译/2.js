function fn(a) {
    console.log(a);
    var a = 123;
    console.log(a);
    function a() {} // 函数声明
    consolus.log(a);
    var b = function(){} // 函数表达式
    console.log(b)
    function d(){}
    var d = a;
    console.log(d);
}
fn(1);

// 1. 执行前编译器创建一个ao对象
// 2. 在函数体里面找形参和变量声明，将它们作为ao的属性名，值为undefined
// AO: {
//     a: undefined, 
//     b: undefined,
//     d: undefined,
// }
// 3. 将实参和形参统一
// AO: {
//     a: undefined, -->1
//     b: undefined, 
//     d: undefined,
// }
// 4. 在函数体内找函数声明，将函数名作为AO的属性名，值被赋予给函数体
// AO: {
//     a: 1, --> function a(){}
//     b: undefined, 
//     d: undefined, --> function d(){}
// }
// 5. 执行代码


