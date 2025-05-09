// 根组件
// react 使用函数创建组件，返回JSX才是组件，否则只是一段函数
// 组件不同于html，html+css+js
// 页面由组件组成（利于复用）
import AppHeader from './components/app-header';

const App = () =>{
    const element = (
        <div className="conatiner">
            <AppHeader name="碳烤"/>
            <AppHeader name="断秋风"/>
        </div>
      )
    return element
}
// module输出 此处的App是一个组件、一个类
export default App;