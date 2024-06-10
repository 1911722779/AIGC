# 豆瓣电影
    从编程思维来到AI思维
https://movie.douban.com/chart

## 爬虫问题

- ur1 发出http请求 拿到html字符串
- 对字符串做查找正则
    伪代码
    - 聚焦  .article movie列表
    - table 列表 电影列表
    - title
-电影列表
    JSCN数组
    [{
        name:'破墓',
        pic:'',
        desc:'',
        score:''
    },
    ...
    ]

## 编制素养
    - 本质和解决方案 http请求 408
    - 按代码顺序 细分->语句（语言，语法
        伪代码
    - 调试并返回结果

    - npm init -y 初始化项目
    - npm install x-crawl 爬虫模块 

## AIGC素养
    有哪些变成模块可以被替代？50%的编程流程不需要了
    ### 现在可以基于LLM 大模型编程（拥有全网的知识）
    - chatGPT 以前我们主要是对话
        openai AIGC 自然语言处理
    - 一些coding 编程流程工作 http请求
    - html 字符串响应后，AIGC生成式，比传统流程厉害多了
    - 电影的对象组织
        详细，清晰的表达我们的需求，交给LLM即可
        封装，编写 Prompt（吴恩达
        - 有一段movie html 喂数据
        - 告诉LLM 它是什么
        - 标题，图片等等
        - 返回
    
    这里是电影列表。获取需要电影名（name）,封面链接（picture）,简介(info), 评分（score）,评论人数（commentsNumber）。 请使用括号的单词作为属性名，以JSON数组的格式返回
## 总结
- LLM大模型优先，24年最火的就是基于大模型的编程
    - 擅长自然语言处理 NLP机器学习，人人平等
    - 生成式的文字、图片、视频等任务，交给AIGC
    - openai\通义千问等sdk 提供接口

- 基于冯诺依曼原理，非AIGC任务，交给传统编程流程来做

AIGC 全栈 = 编程 + AIGC（Prompt Engineering）

驱动LLM工作的核心，就是给它一段合适的提示词（prompt）
LLM = coding copilot