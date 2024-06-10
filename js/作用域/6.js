// let a = 1;

// if(true){
//     console.log(a);
// }
// // 此时输出1

// if(true){
//     console.log(a);
//     let a = 1;
// }
// // 此时不能访问到a，不能在声明之前使用a

// if(true){
//     let a = 1;
// }

// console.log(a);
// // 此时a未被定义，因为全局中并没有a
// {
//     let a = 1;
//     var b = 2;
// }
// console.log(a);
// console.log(b);

let a = 1;
{
    console.log(a); // 暂时性死区
    let a = 2;
}