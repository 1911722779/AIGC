// 根组件 返回JSX的函数就是组件
import AppHeader from './components/app-header';

const App = () => {
// App 的数据
  const name = "碳烤断秋风"


  return (
    <div className="container">
      {/* 将App的数据作为参数参数传递给子组件 */}
      {/* <h1 className="title">{num}</h1> */}
      <AppHeader name={name} theme="day"/>
    </div>
  )
}

export default App;