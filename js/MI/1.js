// 求x的n次方
function fun(x,n){
    let result = 1
    if(n==0)
        return 1;
    else
        for(var i=0;i<n;i++){
            result *= x
        }
        return result;
}
function fun1(x,n){
    // 退出条件
    if(n==0)
        return 1;
    // 把问题分解为规模更小的子问题 自顶向下
    return x * fun1(x, n-1);
}

function fun2(x,n){
    if(n == 0){
        return 1;
    }
    // 自顶向下
    let t = fun2(x,Math.floor(n/2))
    if(n % 2 == 0){
        return t*t;
    }else{
        return x*t*t;
    }
}