var a = 1; // a 定义在全局的作用域

function foo() { // 函数 foo 定义在全局的作用域
    var a = 2; // 此处的 a 定义在函数内
    console.log(a);
}
foo();
console.log(a);