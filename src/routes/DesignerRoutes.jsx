import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../designer/pages/home/Home'

import Create from '../designer/pages/create/Create'
import OrderView from '../designer/pages/vieworders/OrderView'
import Explore from '../designer/pages/explore/Explore'
// import Profile from '../designer/pages/profile/Profile'


const DesignerRoutes = () => {
  return (
    <div>
      <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/profile" element={<Profile/>}/> */}
    <Route path='/explore' element={<Explore/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/orderview' element={<OrderView/>}/>
    

     </Routes>
    </div>
  )
}

export default DesignerRoutes