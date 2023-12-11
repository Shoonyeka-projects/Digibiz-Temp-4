import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default class Header extends Component {
  render() {
    return (
      <div className="wrapper bgded overlay" style={{backgroundImage: "url('images/demo/backgrounds/01.png')"}}>
        <div className="row1">
          <header id="header" className="hoc clear">
            <div id="logo" className="fl_left">
              <h1>
                <Link to="/index.html">Cooban</Link>
              </h1>
            </div>
            <nav id="mainav" className="fl_right">
              <ul className="clear">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                  <ul>
                    <li>
                      <Link to="./pages/Gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/pages/full-width.html">Full Width</Link>
                    </li>
                    <li>
                      <Link to="/pages/sidebar-left.html">Sidebar Left</Link>
                    </li>
                    <li>
                      <Link to="/pages/sidebar-right.html">Sidebar Right</Link>
                    </li>
                    <li>
                      <Link to="/pages/basic-grid.html">Basic Grid</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/dropdown">Dropdown</Link>
                  <ul>
                    <li>
                      <Link to="/level2">Level 2</Link>
                    </li>
                    <li>
                      <Link to="/level2-drop">Level 2 + Drop</Link>
                      <ul>
                        <li>
                          <Link to="/level3">Level 3</Link>
                        </li>
                        <li>
                          <Link to="/level3">Level 3</Link>
                        </li>
                        <li>
                          <Link to="/level3">Level 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/level2">Level 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='./pages/LinkText'>Link Text</Link>
                </li>
                <li>
                  <Link to="/link-text">Link Text</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}
