## Key 安全问题
- 如何妥善处理api-key？

- env 环境变量对象，包含着所有的环境变量
    
    - dotenv().config() 会读取根目录下的.env文件内 key=val添加到env中 代码中读取到env 对象（将. env里的配置添加到环境 变量中）
    process.env
        - process 进程对象，在node 中是全局对象，代表进程
            - 进程（董事长）：是系统进行资源分配的基本单位（分配资源的最小单元
            - 线程（CEO）：是操作系统能够进行运算调度的最小单位（进程的小弟，执行的最小单元
    - 操作系统（window/mac/linux）<- 进程（process）<- 环境变量（env） <- project(项目)

### prompt设计模式
    把时间花在设计prompt上（参考炼丹
    - 提供清晰、明确的提示，长提示效果更好（好的问题也许比答案更重要）
        - 给他一些例子，few shot 展示LLM的学习能力

## Don't repeat yourself (Dry原则)
    布腰重复泥字寄



