import React from 'react';
import "./layout.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <span>ASSIGNMENT</span>
      </div>
      <div className="nav-right">
        <ul>
          <li><a>John Doe</a></li>
          <li><a>Log Out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
