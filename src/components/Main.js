import React, {Component} from 'react';
import './Main.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from '../logo.svg';
import Tabbar from './Tabbar';

class Header extends Component {
  state = {
    show: false
  };

  render() {
    const cate = ['财经', '要闻', '军事', '娱乐', '体育'];
    var els = cate.map((v, i)=>
      <Link key={i} to={`/main/${i+1}`}
            onClick={()=>this.setState({show:false})}>
        {v}
      </Link>
    );
    return (
      <div className="header">
        <div className="menu"
             onClick={()=>this.setState({show:!this.state.show})}></div>
        <div className="logo">
          <img src={logo} height={30} alt=""/>
        </div>
        <div className={`menu-content ${this.state.show?'active':''}`}>
          {els}
        </div>
      </div>

    )
  }
}
class Content extends Component {
  render() {
    var id = Number(this.props.match.params.cate || 10);
    var els = [];
    for (let i = 0; i < id; i++) {
      els.push(<div className="card" key={i}></div>)
    }
    return (
      <div className="content">
        {els}
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div> this is B</div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Content}/>
        <Route exact path="/main" component={Content}/>
        <Route path="/main/:cate" component={Content}/>
        <Tabbar/>
      </div>
    )
  }
}
export default Main;
