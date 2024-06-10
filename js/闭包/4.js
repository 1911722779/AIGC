function foo(){
    var name = 'abc';
    function bar(){
        console.log(count,age);
    }
    var count = 1;
    var age = 18;
    return bar;
}
var age = 20;
const baz = foo();
baz();
// bar函数是一个闭包，它记住并访问了foo函数的作用域中的变量count和age。即使foo函数已经执行完毕，bar依然能访问到foo函数作用域中的变量。
