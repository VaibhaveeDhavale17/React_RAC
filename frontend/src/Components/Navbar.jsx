import React, { useState } from 'react';
import { FaUser, FaBell } from 'react-icons/fa';
import Sidebar from '../dashboard/Sidebar'; 
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleUserClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow">
      
        <div className="p-3 ml-10 flex justify-between items-center">
        <h2 className='text-blue-500 font-semibold text-xxl flex items-center justify-center'>RAC</h2>

          <div className="flex items-center ">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search product, supplier, order..."
              className="border rounded-md p-2 mr-5 w-80"
            />
            <button className="flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Search
        </button>
          </div>

          {/* Notification and User Icons */}
          <div className="flex items-center">
            
            <div className="mr-4">
              {/* Notification Icon (replace with your icon or component) */}
              <span className="text-xl">🔔</span>
            </div>
            <div>
              {/* User Icon (replace with your icon or component) */}
              <span className="text-xl"> <FaUser className='cursor-pointer'/> </span>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
