var arr = [];

for(var i = 0; i <10; i++){
    arr[i] = function(){
      console.log(i);  
    }
} // for循环不会形成作用域，在for循环执行完之后 i=10

arr.forEach(function(item){ // 遍历数组的方法
    item();
})
// 此时输出十个10

var arr = [];

for(let i = 0; i <10; i++){ // 将var改为let后，let+{}形成了块级作用域，此作用域归属于for循环
    arr[i] = function(){
      console.log(i);  
    }
} 

arr.forEach(function(item){ // 遍历数组的方法
    item();
})
// 此时输出0 1 2 3 4 5 6 7 8 9