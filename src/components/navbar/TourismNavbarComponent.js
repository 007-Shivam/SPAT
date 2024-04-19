import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from "../../assets/logo.jpg"

export default function TourismNavbarComponent() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="nav_header">
      <div className="nv_logo" onClick={closeNav} style={{ cursor: 'pointer' }}>
        <Link to="/">
          <img className="logo_class" src={logo} alt="logo" />
        </Link>
      </div>
      <input type="checkbox" id="nav_check" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)} hidden />
      <nav style={{ left: isNavOpen ? '0' : '-300px', transition: 'left 0.3s ease-in-out' }}>
        <div className="nv_logo">
          <Link to="/">
            <img className="logo_class" src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/fleet" className={`${location.pathname === '/fleet' ? 'active ' : ''}carpg`} onClick={closeNav}>
              FLEET
            </Link>
          </li>
          {/* <li>
            <Link to="/propertysellpage" className={location.pathname === '/propertysellpage' ? 'active' : ''} onClick={closeNav}>
              SELL
            </Link>
          </li>
          <li>
            <Link to="/propertyrentpage" className={location.pathname === '/propertyrentpage' ? 'active' : ''} onClick={closeNav}>
              RENT
            </Link>
          </li> */}
          <li>
            <Link to="/"
              className={`${location.pathname === '/' ? 'active ' : ''}Home`} onClick={closeNav}>
              FIND A HOME
            </Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}
