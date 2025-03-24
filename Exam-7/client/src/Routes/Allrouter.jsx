import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/signup'


const Allroutes = () => {
  
  const isLoggedIn = localStorage.getItem('user');
  return (
    <div>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Allroutes