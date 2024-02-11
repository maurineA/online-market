import React  from 'react'
import { NavLink ,Link} from 'react-router-dom';
import './navbar.css'; 

function NavBar() {
  return (
   <nav className='fixed-top' style={{padding:"0px"}}>
        <Link to='/home' className="title">Online Market</Link>
     
    <ul >
       <li>
        <NavLink to='/'>Login</NavLink>
      </li>
      
      <li>
        <NavLink to='/shops'>Shops</NavLink>
         </li> 
      <li>
        <NavLink to='/newShop'>New shop</NavLink>
         </li>
    </ul>
    
   </nav> 
      

        
  

        
  )
}

export default NavBar 