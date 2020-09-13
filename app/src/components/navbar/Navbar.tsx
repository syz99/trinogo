import React from 'react';

// import { Navbar as NavBar, Nav, NavLink as Link } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import Logo from 'images/logo.png';
import './style.css';

const Navbar = () => {
  // const [activePath, setActivePath] = useState(useLocation().pathname);
  const currRoute = useLocation().pathname;
  // const uppdateActivePath = (path: string) => {
  //   setActivePath(path);
  // };

  return (
    <div className="container">
      <nav>
        <ul className="primary-nav">
          <li className="nav-logo">
            <a href="/">
              <img src={Logo} id="logo" alt="trinogo logo" />
            </a>
          </li>
          <li
            className={
              currRoute === '/leaderboard' ? 'nav-item-active' : 'nav-item'
            }
          >
            <a href="/leaderboard">Leaderboard</a>
          </li>
          <li
            className={currRoute === '/plan' ? 'nav-item-active' : 'nav-item'}
          >
            <a href="/plan">Plan Your (Not) Trip</a>
          </li>
          <li
            className={
              currRoute === '/transport' ? 'nav-item-active' : 'nav-item'
            }
          >
            <a href="/transport">Transport Me</a>
          </li>
          <li
            className={
              currRoute === '/passport' ? 'nav-item-active' : 'nav-item'
            }
          >
            <a href="/passport">My (Expired) Passport</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
