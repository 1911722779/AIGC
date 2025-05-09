// es6 module 

import React from 'react';
import ReactDOM from 'react-dom/client';
// module 的导入
import App from './app/app';

const root = ReactDOM.createRoot(
  // ReactDOM就做这一次DOM的查找
  // DOM编程 性能很差
  document.getElementById('root')
)
// class
// const element = React.createElement('h1',{className:'title',id:'tlt'},'hello world')
// const element = React.createElement(
//   'div',
//   {className:'container'},
//   React.createElement(
//     'h1',
//     {className: "title"},
//     '断秋风'
//   )
// )
// 职责分离
root.render(
  // <h1>Hello world!</h1>
  // element
  // <div className="conatiner">
  //   <h1 className='title'>碳烤断秋风</h1>
  // </div>
  <App />
)