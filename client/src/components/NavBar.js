import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function NavBar({ isShopOwner }) {
  return (
    <nav className='fixed-top'>
      
      <Link  className="title">Online Market</Link>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
      <li>
        <NavLink to='/'>Sign Up</NavLink>
      </li>
        <li>
          <NavLink to='/'>Login</NavLink> 
        </li>
        <li>
          <NavLink to='/shops'>Shops</NavLink>
        </li>
        {isShopOwner && (
          <li>
            <NavLink to='/add-products'>Add Products</NavLink>
          </li>
        )}
        <li>
          <NavLink to='/newShop'>New Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
