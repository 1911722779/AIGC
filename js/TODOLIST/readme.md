var str = 'hello world';  //声明变量，js内单双引号无区别 字符串类型 String
console.log(str.length);  //访问字符串str是多少

var num = 123.4;  //数字类型 Number js不分float和double类型，都属于number

var flag = false;  //布尔类型 Boolean

var un = undefined;  //找不到的
var nu = null;  //空的
var b = 12312312n;  //大整形Bigint
var s = Symbol('abc');  //Symbol创建唯一值
var s2 = Symbol("abc"); //此处的s不等于s2

#对象类型  引用类型  复杂类型
var obj = {  #对象
    a: 1  #key为a  val为1
};  //类似于Java的类和属性

var arr = [  //数组
    1,2,'a',true,{a: 1}  #数组可放任意类型的任意值
];

arr.push('hello');  //把值添加进数组
console.log(arr);  //打印结果
console.log(arr[2]);  //打印数组第三号位的数据，2为索引/下标
arr.unshift('0');  //往数组的头部放一个数据
arr.pop();  //将数组最后一位数据移除
arr.shift();  //将数组第一位的数移除
var arr = [1,2,'a',true,{a: 1}];
arr.splice(2);  //寻找第三位数据，并移除此数据以及此后的所有数据
arr.splice(2,1);  //寻找第三位数据，并移除从此位置开始的第一个数据
arr.splice(2,0,'hello');  //寻找第三位，移除0个数据，并添加'hello'在此位置
var arr = [1,2,3,4];  //将数组内的值扩大十倍
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i]* 10;
}
console.log(arr); //打印数组