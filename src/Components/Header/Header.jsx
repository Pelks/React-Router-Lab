import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>E-Commerce Website</h1>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/products/">Products</Link></li>
      </ul>
    </div>
  )
}

export default Header
