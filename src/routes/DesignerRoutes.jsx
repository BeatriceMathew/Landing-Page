import React from 'react'
//import Sidebar from '../designer/components/sidebar/Sidebar'
import Home from '../designer/pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import EditProfile from '../designer/pages/editprofile/EditProfile'

const DesignerRoutes = () => {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/EditProfile" element={<EditProfile/>}/>
        
      </Routes>
    </div>
  )
}

export default DesignerRoutes