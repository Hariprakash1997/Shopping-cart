import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Router';

const Navigation = (props) => <nav className="clearfix">
      <ul>
        <li className="home"><NavLink style={{textDecoration:"none"}} to='/'>Home</NavLink></li>
        <li className="cart"><NavLink style={{textDecoration:"none"}} to='/cart'>Cart</NavLink></li>
      </ul>
  </nav>

class App extends Component {
  render() {
    return(
      <div className="page-container">
          <Navigation />
          <Router />
      </div>
    )
  }
}

export default App;
