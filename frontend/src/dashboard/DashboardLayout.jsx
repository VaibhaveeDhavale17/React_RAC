import React from 'react'
import {Outlet} from 'react-router-dom'
import MySidebar from './Sidebar'
import Navbar from '../Components/Navbar'



const DashboardLayout = () => {
  return (
    <div className='flex flex-col h-2'>
      <Navbar/>
    <div className='flex gap-4 '>
    
    
      <MySidebar />
      
      <Outlet />
    </div>
  </div>
  )
}

export default DashboardLayout