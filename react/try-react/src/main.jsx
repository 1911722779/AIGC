import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 新时代的前端开发，旧时代 DOM Api
// 接管 root 节点
const root = ReactDOM.createRoot(
  document.getElementById('root')
)

// const element = React.createElement(
//   'div',{className: 'container'},
//   React.createElement('header',{calssName:'header'},'Hello World'),
//   React.createElement('main',{calssName:'main'},
//     React.createElement('aside',{calssName:'aside'},'asider'),
//     React.createElement('article',{calssName:'article'},'article'),
//     React.createElement('aside',{calssName:'aside'},'asider')
//   ),
//   React.createElement('footer',{calssName:'footer'},'footer')
//   );

// JSX react表现力优于vue
// React Element（VDOM 全新打造的react节点） 不是DOM element
// const element = (
//   <div className="container">
//     <header>header</header>
//     <main>
//       <aside>aside</aside>
//       <article>article</article>
//       <aside>aside</aside>
//     </main>
//   </div>
// )


root.render(<App />);