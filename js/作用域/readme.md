# 编译（梳理代码）
    ·如果将v8比喻作总裁，那么编译这个步骤相当于v8的秘书
整理代码中的规则（步骤如下
    1. 词法分析
    2. 解析
    3.生成代码
        例如： 若代码顺序为
                console.log(a);
                var a = 123;
              此时编译后输出结果为undefined
              编译解析为  var a;
                        console.log(a);
                        a = 123;

# 作用域
1. 全局作用域
2. 函数作用域（function）
    ·调用栈：比喻作秘书手上的小本本
       
    1） var a = 1; // a 定义在全局的作用域

        function foo() { // 函数 foo 定义在全局的作用域
            var a = 2; // 此处的 a 定义在函数内
            console.log(a);
        }
        foo();
        console.log(a);
        ·执行代码的过程就是秘书用小本子先梳理流程（整理代码），记录在全局作用域内的变量环境，如此处有 Number a = 1，和 Function foo ，又因为函数foo也是一个作用域，秘书又会在小本上记录一个作用域为foo，并整理成其中的变量环境为 a = 2，代码将在秘书整理完毕后开始执行

3.作用域的规则：内部作用域可以访问外部作用域，而外部作用域不能访问内部作用域
    1）内部作用域可以访问外部作用域
    例如：
        var a = 1; 
        function foo() { 
            var a = 2; 
            console.log(a);
        }
        foo();
    此处代码执行结果为2,而不是1
    2）外部作用域不能访问内部作用域
    例如：
        var a = 1; 
        function foo() { 
            var a = 2; 
        }
        foo();
        console.log(a);
    此处代码执行结果为1，而不是2

    
    3） var a = 1; 
        function foo() { 
            var a = 2; 
            console.log(a);
        }
        foo();
        console.log(a);
    此处代码执行结果为2 1

# 词法作用域
    概念：变量声明的地方（你所在的地方，那个地方就是你的词法作用域）
        · 如果你在一个房间里，那个房间就是你的词法作用域，同时你自己也有自己的作用域

# 欺骗词法作用域
    1.eval() 
      · 让原本不属于此作用域的代码搬运进这个作用域，让此变量变成此作用域中自带的变量
        例如：
            function foo(a,str){
                eval(str); 
                console.log(a,b);
            }
            foo(1,'var b =2');
        // 此时输出为1 2，即变量b被搬运进函数foo中成为foo中的变量了

    2.with(){}
      · 用with修改一个属性，如果这个属性在修改的对象中原本并不存在，那么在with中修改的这个属性会被当做全局属性泄露出去
        例如：
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
            // 此时代码本应该报错，但实际执行输出2，即变量a = 2被当作全局变量泄露出去了

# 块级作用域
  {} + let||const 两者共同构成块级作用域
    1）会形成暂时性死区
      ·let 会限制变量呆在块级作用域中，变量被暂时圈定在此区域内，不会被秘书在全局变量中找到
        {
            let a = 1;
            var b = 2;
        }
        // 此时能够console.log(b),但不能consolo.log(a),因为b被声明为全局变量

    2）let型变量不能在声明之前使用
        let a = 1;
        {
            console.log(a); // 暂时性死区
            let a = 2;
        }
        // 此时秘书整理出了{}内有变量a，但它不能被上一步的consolo.log访问到,程序报错表示不能在声明之前使用a
        
# var 和 let 以及 const
1. var 声明的变量存在声明提升
    · var 在全局声明的变量会被添加到window对象上
2. let 不存在上述情况
    · let 会限制变量呆在块级作用域中，不会被秘书在全局变量中找到
3. const 声明的是常量，不可以被修改
    · const 同样可以生成块级作用域，也会形成暂时性死区