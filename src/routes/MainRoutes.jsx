import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Home from '../guest/pages/home/Home'
import GuestRoutes from './GuestRoutes'
import DesignerRoutes from './DesignerRoutes'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/*' element={<GuestRoutes/>}/>
        <Route path='/designer/*' element={<DesignerRoutes/>}/>
        <Route path='/admin/*' element={<AdminRoutes/>}/>
        <Route path='/user/*' element={<UserRoutes/>}/>

        </Routes>
    </div>
  )
}

export default MainRoutes
