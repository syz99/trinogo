import React, { useEffect, useState } from 'react';

// import { Navbar as NavBar, Nav, NavLink as Link } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import Logo from 'images/logo.png';
import './style.css';

const Navbar = () => {
  const [activePath, setActivePath] = useState(useLocation().pathname);

  const uppdateActivePath = (path: string) => {
    setActivePath(path);
  };

  return (
    <div className="container">
      <nav>
        <ul className="primary-nav">
          <li className="nav-logo">
            <a href="/">
              <img src={Logo} id="logo" alt="trinogo logo" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/leaderboard">leaderboard</a>
          </li>
          <li className="nav-item">
            <a href="/plan">plan your (not) trip</a>
          </li>
          <li className="nav-item">
            <a href="/transport">transport me</a>
          </li>
          <li className="nav-item">
            <a href="/passport">my (expired) passport</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
