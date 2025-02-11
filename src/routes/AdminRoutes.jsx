import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../admin/pages/home/Home'
import { Category } from '../admin/pages/Category/Category'
import Subcategory from '../admin/pages/subcategory/Subcategory'
import { Type } from '../admin/pages/type/Type'


const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/subcategory' element={<Subcategory/>}></Route>
        <Route path='/type' element={<Type/>}></Route>
      </Routes>
    </div>
  )
}

export default AdminRoutes