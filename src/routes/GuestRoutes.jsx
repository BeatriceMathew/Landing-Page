import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Index from '../guest/pages/index/Index'
import Register from '../guest/pages/register/Register'
import Login from '../guest/pages/login/Login'
import Home from '../guest/pages/home/Home'

const GuestRoutes = () => {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
      </Routes>

    </div>
  )
}

export default GuestRoutes