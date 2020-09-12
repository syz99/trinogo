import React from 'react';

import { Navbar as NavBar, Nav, NavLink as Link } from 'react-bootstrap';

import Logo from 'images/logo.png';
import './style.css';

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <ul className="primary-nav">
          <li className="left">
            <a href="/">
              <img src={Logo} id="logo" />
            </a>
          </li>
          <li className="right">
            <a href="/leaderboard">leaderboard</a>
          </li>
          <li className="right">
            <a href="/plan">plan your (not) trip</a>
          </li>
          <li className="right">
            <a href="/transport">transport me</a>
          </li>
          <li className="right">
            <a href="/passport">my (expired) passport</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
