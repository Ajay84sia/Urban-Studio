import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mens from '../UserPages/Mens'
import Register from '../UserPages/Register'
import Login from '../UserPages/Login'
import Womens from '../UserPages/Womens'
import Home from './Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/men' element={<Mens/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/women' element={<Womens/>}></Route>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
