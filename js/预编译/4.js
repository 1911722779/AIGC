// GO: {
//     global: undefined 
//     fn: function fn() {}
// }

var global = 100
function fn(){
    console.log(global);
}
// AO: {
//     // 无变量声明和函数声明
// }

fn();

