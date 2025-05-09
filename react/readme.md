# 前端第一框架React 
- 来自Facebook
- 特别适合中大型项目开发
- 学习成本略高

## 安装环境
- npm i -g create-react-app
    - react/vue 开发企业级应用，create-react-app来自于facebook官方推出的项目脚手架
    - -npm 包管理器 
    - -g 全局安装 装到什么地方去了呢？
        - 使用 npm config ls 列出项目配置
        - 再使用 create-react-app 到path中寻找prefix给出的地址
- create-react-app my-react  project-name（自己想要创建项目的名称）
    - 不再是index.html,js,css,
        因为都是从0开始
    - 不用从0开始，而是直接拿一个标准的项目模板，快速启动

- my-react 
    - src 开发目录，代码的主战场
        index.js 入口文件
        index.css 全局样式文件
    - node_modules 存放依赖包
        package.json 项目描述文件
        react 目前最新是18版本，最牛的现代开发框架
        react-dom
    - public 静态资源目录
        index.html 首页+入口文件
            - root react 功能挂载点
    - localhost:3000 -> index.html -> load index.js -> react 接管项目开发
    - package.json 项目描述文件

- create-react-app 做了什么事
    - git clone 项目模板
    - npm i 依赖 
        核心是 react react-dom
    - npm run start
        - web server 3000
            是public/index.html 首页
    - src/ 所有react开发代码回打包成 /public/js/bundle.js
        动态地加载到idnex.html
    - react的功能 
        接管root，开启react的世界

- defer 异步加载
    - 会将加载推迟到 DOMContentLoaded 之后
- async 异步加载 
    - 不会被阻塞，不会推迟到 DOMContentLoaded 之后
    - 脚本将在后台加载，同时页面继续渲染。
    - 脚本在加载完成后立即执行，但执行顺序不确定，因为它们是并行加载的。
- 如果想要确保页面以最快的速度打开，可以把script放在最底下，或者使用script defer
- 如果想要将js快速启动，可以使用async

## App.css
- @media 媒体(终端)查询 适配的高级技巧 选定设备进行定制的样品开发
    - 可再次对需要调试的样式进行修改

## index.js
- 入口文件
- root 内部就是react的世界，root变成了react的根节点
- 获取挂载点，以后react就不用再做DOM操作了
    - document.getElementById('root')
- head 标签
    const element = ( <h1>碳烤断秋风</h1> );
    root.render(element);
效果与
    root.render( <h1>碳烤断秋风</h1>)
相同
- div 标签
    const element1 = React.createElement('div',{id:'name'},'红烧断秋风')
    root.render(element1);
## 热更新与冷更新
- 在开发模式下，如使用 npm start 或 yarn start，构建工具通常会提供热更新（hot reloading）或快照更新（fast refresh），这意味着当源代码改变时，浏览器中的页面会自动更新而不需刷新。然而，使用 serve 命令运行的静态文件不具备这样的功能，因为它们是预编译的成品，不包含任何动态更新的机制。
## 模块化的作用：职责分离
- index.js 就负责根节点的接洽
    - root 
        - 根节点，挂载点，react接管
    - JSX
        - 本质是根组件 根节点挂载根组件再挂载其他的组件
- App.jsx 是根组件，负责渲染
- components文件夹负责存放组件