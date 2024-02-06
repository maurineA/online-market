import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom';
import Shops from './Shops';
import ShopProducts from './ShopProducts';
function App() {
  return (
    <div>
        <NavBar />
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/shops' element={<Shops/>}></Route>
        <Route path='/shops/:productsId' element={<ShopProducts/>}></Route>
        </Routes>
    </div>
  )
}

export default App