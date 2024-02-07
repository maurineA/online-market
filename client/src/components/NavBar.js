import React from 'react'
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <div>
       <NavLink to="/home"style={{marginRight:"20px"}}>Home</NavLink>
      <NavLink to="/shops" style={{marginRight:"20px"}}>Shops</NavLink>
      <NavLink to="/newShop" style={{marginRight:"20px"}}>newshop</NavLink>
      </div>
        
        
  

        
  )
}

export default NavBar