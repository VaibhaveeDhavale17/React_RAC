import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox,  HiOutlineCloudUpload, HiUser, HiLogout} from 'react-icons/hi';
import user from '/img/favicon.png'
import { FaList, FaCogs } from 'react-icons/fa';

const MySidebar = () => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img={user} imgAlt="Flowbite logo">
        Name
      </Sidebar.Logo>
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
          <Sidebar.Item href="" icon={HiUser}>
            Manage Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaList}>
            All Products
          </Sidebar.Item>
          
          <Sidebar.Item href="/logout" icon={HiLogout}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default MySidebar