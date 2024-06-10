function bar(){
    console.log(a);
}
function foo(){
    var a = 100;
    bar();
}
var a = 200;
foo();

function a(){
    function b(){
        console.log(abc);
    }
    b();
}
a();