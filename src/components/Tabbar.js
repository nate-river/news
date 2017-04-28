import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Tabbar extends Component {
  render() {
    return (
      <div className="tab-bar">
        <div className="item">
          <Link to="/">
            首页
          </Link>
        </div>
        <div className="item">
          <Link to="/hot">
            热门
          </Link>
        </div>
        <div className="item">
          <Link to="/discover">
            发现
          </Link>
        </div>
        <div className="item">
          <Link to="/me">
            我的
          </Link>
        </div>
      </div>
    )
  }
}

export default Tabbar;
