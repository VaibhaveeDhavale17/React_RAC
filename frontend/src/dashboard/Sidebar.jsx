import React from 'react'
import { Sidebar } from 'flowbite-react';
import {  HiChartPie, HiInbox,  HiOutlineCloudUpload, HiUser, HiLogout} from 'react-icons/hi';
import { FaList, FaUserFriends} from 'react-icons/fa';

const MySidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100%', position:'relative', boxShadow: '0px 2px 5px rgba(0, 0, 1, 0.3)',borderTopLeftRadius: 0,borderTopRightRadius: 0 }}>
      <Sidebar style={{ overflowY: 'auto' }}>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/upload" icon={HiOutlineCloudUpload}>
            Create Item
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/manage" icon={HiInbox}>
            Manage items
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/manageusers" icon={HiUser}>
            Manage Users
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/allitems" icon={FaList}>
            All Products
          </Sidebar.Item>

          <Sidebar.Item href="/dashboard/supplier" icon={FaUserFriends}>
            Add Supplier
          </Sidebar.Item>
          
          <Sidebar.Item href="/logout" icon={HiLogout}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default MySidebar