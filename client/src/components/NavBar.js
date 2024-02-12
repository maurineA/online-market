// NavBar.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function NavBar({ isShopOwner }) {
  return (
    <nav className='fixed-top'>
      <Link className="title">Online Market</Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to='/shops'>Shops</NavLink>
        </li>
        {isShopOwner && (
          <>
            <li>
              <NavLink to='/add-products'>Add Products</NavLink>
            </li>
            <li>
              <NavLink to='/newShop'>New Shop</NavLink>
            </li>
            <li>
              <NavLink to='/logout'>Logout</NavLink>
            </li>
          </>
        )}
        {!isShopOwner && (
          <>
            <li>
              <NavLink to='/signup'>Sign Up</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink> 
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
