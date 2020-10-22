// jshint esversion: 6
import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">ASSIGNMENT</span>
          </div>
          <div className="justify-content-end">
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