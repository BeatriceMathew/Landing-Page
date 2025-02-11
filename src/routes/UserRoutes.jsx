import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../user/pages/profile/Profile'

const UserRoutes = () => {
  return (
        <div>
        <Routes>
        <Route path='/profile' element={<Profile/>}/>
        
      </Routes>
    </div>
  )
}

export default UserRoutes