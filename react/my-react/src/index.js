// // 入口文件
// // console.log('------');
// // es6 的module dom 相关
// import ReactDOM from 'react-dom/client';

// // root 内部就是react的世界
// // root变成了react的根节点
// const root = ReactDOM.createRoot(
// // 获取挂载点，以后react 就不用再做DOM操作了
//   document.getElementById('root')
// )

// root.render( <h1>断秋风</h1> )



import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
//节点
// root.render(element)
const element1 = React.createElement('div',{id:'name'},'红烧断秋风')
// console.log(element1);


// react 法宝 JSX语法
// 不是纯js，react提供了jsx语法

// root.render( <h1>碳烤断秋风</h1>)
const element = ( <h1>碳烤断秋风</h1> );
// console.log(element);
root.render(element);
// root.render(element1);
