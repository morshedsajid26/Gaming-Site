import React from 'react'


import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout