import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="topnav">
      <div>
        <Link to="/">People</Link>
      </div>
    </div>
  );
};

export default Header;
