# 变量
    var 关键字
1.原始类型 基本数据类型
    var str = 'hello world' // 字符串 String
    var num = 123 // 数字 Number
    var flag = true // 布尔 Boolean
    var u = undefined // 找不到值
    var n = null // 没有值

2.引用类型 复杂类型
    var obj = {} // 对象 Object
        1） var obj = {
            a:1, // a 为key ，1 为value（键值对
            b:2,
            c:3
            }
        2） 改对象内各属性的值的方式
            方法一：
                obj.a = 2;
                obj.b = 3;
                obj.c = 4;
            方法二：
                with(obj){
                    a = 2;
                    b = 3;
                    c = 4;
                }
            *方法2有bug 
                · 用with修改一个属性，如果这个属性在修改的对象中原本并不存在，那么在with中修改的这个属性会被当做全局属性泄露出去
                function foo(obj){
                    with(obj){
                        a = 2
                    }
                }
                var obj1 = {
                    a:1
                }
                foo(obj1)
                console.log(obj1);
            // 此时输出为{a:1}

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
                console.log(obj2);
            // 此时输出为{b:1}
                
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
            // 此时代码本应该报错，但实际执行输出2

    var arr = [] // 数组 Array
    var fn = function() {} // 函数 Function

# 条件语句
    1）if else 的条件语句
        if(/*此处写条件*/){
            console.log('yes')
        } else if(count == 1){

        } else {

        }
    2） switch 的选择条件语句
        switch(/*此处写条件*/) {
            case /*此处写情况*/:
                xxxxxxxxxxxx
                break;
            case /*此处写情况*/:
                xxxxxxxxxxxx
                break;
            case /*此处写情况*/:
                xxxxxxxxxxxx
                break;
            default:
                xxxxxxxxxxxx
                break;
        }

# 循环语句
    1） for 的循环语句
        for (/*循环的条件*/){
            xxxxxxxx
        }
    2） while 的循环语句
        while (/*循环的条件*/){ // 只要循环条件正确就会启动循环
            //停止条件需要自己设置
        }
# forEach(function(){}) 方法
    forEach方法是数组的一个迭代方法，用于遍历数组中的每一个元素，并对每个元素执行一个提供的函数。forEach不改变原数组，也不返回任何值（返回undefined），它的主要目的是为了执行副作用
    

# ${}
    ${}内的内容可以是变量、表达式甚至是函数调用，它会被求值并将其结果转换为字符串，然后插入到字符串中相应的位置。这样可以使字符串的构造更加清晰和直观。