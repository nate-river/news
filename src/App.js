import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// import Splash from './components/Spalash'
import Login from './components/Login';
import Main from './components/Main';
import Hot from './components/Hot';
import Discover from './components/Discover';
import Me from './components/Me';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>

          <Route path="/login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="/hot" component={Hot}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/me" component={Me}/>
        </div>
      </Router>
    );
  }
}

export default App;

// 1.启动了一个web服务器(=apache) webpack-dev-server
// 2.自动打开浏览器 localhost:3000
// 3.服务器给我们回应页面  回应编译合并后的js  bundle.js
// 4.同时回应一个socket.js
//
//
// 5.服务器监听文件变化 src下如果发生变化
//   就向浏览器发送一个信号
//   浏览器收到信号调用location.reload()刷新页面;
