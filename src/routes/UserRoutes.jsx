import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../user/pages/profile/Profile'
import Home from '../user/pages/home/home'
import Reel from '../user/pages/reels/Reel'
import Explore from '../user/pages/explore/Explore'
import Search from '../user/pages/search/Search'
import Order from '../user/pages/order/Order'
import Payment from '../user/pages/payment/Payment'
import DesignerProfile from '../user/pages/Account/DesignerProfile'
import OrderView from '../user/pages/vieworders/OrderView'

const UserRoutes = () => {
  return (
        <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/reel' element={<Reel/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/designerprofile' element={<DesignerProfile/>}/>
        <Route path='/orderview' element={<OrderView/>}/>
        
      </Routes>
    </div>
  )
}

export default UserRoutes