# React组件化，大型团队的协作

- 脚手架
    - create-react-app 来自于facebook官方推出的项目脚手架
    - npm init vite 用vite来初始化 react+js 
        特点：vite快

- index.html 首页
    #root 挂载点
- src/main.jsx 单点入口 type="module"
- 根节点
    - root.rander
    - react.createElement 
- 组件
    - components
        - 根组件 App
            - JSX 里用html标签的方式来插入
            - 标签不是html内置标签，而是组件本身的内置标签
        - 子组件 
        - 旧开发打理的是真实DOM树
    - 组件树 （React 组件树）
        - 子组件
        
## 关系
- 网页（#root）
    - 组件（App 在react中返回JSX的函数就是组件）
        - element 节点 + css + js


- 模块化
    - script 默认不支持模块化，早期的前端处理的业务主要是交互和事件，不存在太多扩文件的需要，所以简单，没有模块化
    - node v8引擎封装到命令行，js解析器，业务设计数据库，文件，网络等等，不使用模块化会很难进行下去 require+module.exports
    - ES6模块化 做前端App 越来越复杂，由react几万个组件拼起来的
    - commonJS不太优秀，所以推出了es6 module
    - <script type="module"></script> 打开浏览器的模块化支持
    - 一个文件只做一件事

## react表现力优于vue
- react与vue的区别
    - 