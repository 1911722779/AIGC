# root 挂载点，react接管
- 根节点
- react/vue 开启了前端开发的新篇章
    - sat goodbye to dom coding
    - 是 mvvm 的世界
- React.createElement('div',props,children)创建节点挂载到root上
- react提供了JSX语法，<div>{name}</div> html 也是一种xml，xml in js 提升界面表现力
    -src/index.js 的 JSX 编译一下（stylus）
- ReactDom.render()

## create-react-app 生产工艺流程的理解


## react 不同的环境
    - /src 开发目录 （development）
    - 经过 npm run build 打包 上线 （production）
    - test 
    - 外网没法访问

    - 开发流程
        - 领取开发任务 例如登录功能
        - 在src/ 进行功能开发
        - 在localhost:3000 进行调试
        - npm run build 打包一个上线的代码包 在./build目录
        - serve -s  可在本地模拟线上环境
        - PC 局域网 移动设备也可以测试
        - deploy 真正的push上线

    - vercel
        - 云开发
        - 本地一键上云
            vercel login
            ercel deploy
        - 免费的二级域名，指向你上传的build目录
        http://localhost:3000/ development
        http://localhost:3867/ build
        test
        https://react-lakf1l3bz-cns-projects-ace0af62.vercel.app production
- JSX 拥有强大的表现力
    React.createElement() 太繁琐 和写html一样
    - 本质是根组件 根节点挂载根组件再挂载其他的组件

## 模块化的作用：职责分离
- index.js 就负责根节点的接洽
- App.jsx 是根组件，负责渲染
- components文件夹负责存放组件