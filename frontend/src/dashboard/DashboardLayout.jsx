import React from 'react'
import {Outlet} from 'react-router-dom'
import MySidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <MySidebar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout