// jshint esversion: 6
import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Navbar = () => {
  return (
    <>
      <nav className="container-fluid navbar navbar-expand-lg navbar-light">
          <div className="header-nav row">
            <div className="navbar-header col-8">
              <span className="navbar-brand">ASSIGNMENT</span>
            </div>
            <div className="right col-3">
              <ul className="nav navbar">
                <li className="active pr-5">
                  <a href="#">John Doe</a>
                </li>
                <li>
                  <Link to="/">Log Out</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
    
  );
};

export default Navbar;