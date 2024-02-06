import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom';
import Shops from './Shops';

function App() {
  return (
    <div>
        <NavBar />
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/shops' element={<Shops/>}></Route>
        </Routes>
    </div>
  )
}

export default App