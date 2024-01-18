import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react';
import {  HiChartPie, HiInbox,  HiOutlineCloudUpload, HiUser, HiLogout} from 'react-icons/hi';
import { FaList, FaUserFriends} from 'react-icons/fa';
import {useLocation} from 'react-router-dom'; 

const MySidebar = () => {

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState('/dashboard');

  useEffect(()=>{
    setActiveRoute(location.pathname);

  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', height: '100%', position:'relative', boxShadow: '0px 2px 5px rgba(0, 0, 1, 0.3)',borderTopLeftRadius: 0,borderTopRightRadius: 0 }}>
      <Sidebar style={{ overflowY: 'auto' }}>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard' ? 'bold' : 'normal' }}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/upload" icon={HiOutlineCloudUpload} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard/upload' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard/upload' ? 'bold' : 'normal' }}>
            Create Item
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/manage" icon={HiInbox} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard/manage' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard/manage' ? 'bold' : 'normal' }}>
            Manage items
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/manageusers" icon={HiUser} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard/manageusers' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard/manageusers' ? 'bold' : 'normal' }}>
            Manage Users
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/allitems" icon={FaList} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard/allitems' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard/allitems' ? 'bold' : 'normal' }}>
            All Products
          </Sidebar.Item>

          <Sidebar.Item href="/dashboard/supplier" icon={FaUserFriends} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard/supplier' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard/supplier' ? 'bold' : 'normal' }}>
            Add Supplier
          </Sidebar.Item>
          
          <Sidebar.Item href="/logout" icon={HiLogout} className='font-poppins p-3' style={{ color: activeRoute === '/dashboard/logout' ? 'blue' : 'black', fontWeight: activeRoute === '/dashboard/logout' ? 'bold' : 'normal' }}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default MySidebar