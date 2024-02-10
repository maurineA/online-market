import React from 'react'
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
function App() {
  return (
    <div>
        <NavBar />
        <Routes>
          <Route path="/about" element={<AddProducts/>} />
          <Route path='/' element={<Signup/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shops' element={<Shops/>}></Route>
          <Route path='/shops/:shopId' element={<ShopProducts />} />
          <Route path='/add-products/:shopId' element={<AddProducts/>}></Route>


        <Route path='/newShop' element={<NewShop/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App