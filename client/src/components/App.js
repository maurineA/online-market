import React, { useState } from 'react';
import './navbar.css'; 
import Home from './Home'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom';
import Shops from './Shops';
import ShopProducts from './ShopProducts';
import NewShop from './NewShop';
import Footer from './Footer';
import Login from './Login';
import AddProducts from './AddProducts';
import Signup from './SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isShopOwner,setIsShopOwner] =useState(false)

  const  updateUserRole = (isShopOwner)=> {
    setIsShopOwner(isShopOwner)
  }

  return (
       <div><NavBar isShopOwner={isShopOwner}/>
        <Routes>
          <Route path='login' element={<Login/>}></Route>
          <Route path='/' element={<Signup updateUserRole={updateUserRole}/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shops' element={<Shops/>}></Route>
          <Route path='/shops/:shopId' element={<ShopProducts />} />
          <Route path='/add-products' element={<AddProducts/>}></Route>
         
        <Route path='/newShop' element={<NewShop/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
} 

export default App