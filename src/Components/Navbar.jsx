import React, { useState } from 'react';
import { FaUser, FaBell } from 'react-icons/fa';
import Sidebar from '../dashboard/Sidebar'; 
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleUserClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="font-poppins bg-white shadow">
      
        <div className="font-poppins p-3 ml-10 flex justify-between items-center">
        <h2 className='font-poppins text-blue-500 font-semibold text-xxl flex items-center justify-center'>RAC</h2>

          <div className="font-poppins flex items-center ">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search product, supplier, order..."
              className="font-poppins border rounded-md p-2 mr-5 w-80"
            />
            <button className="font-poppins flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Search
        </button>
          </div>

          {/* Notification and User Icons */}
          <div className="font-poppins flex items-center">
            
            <div className="font-poppins mr-4">
              {/* Notification Icon (replace with your icon or component) */}
              <span className="font-poppins text-xl">🔔</span>
            </div>
            <div>
              {/* User Icon (replace with your icon or component) */}
              <span className="font-poppins text-xl"> <FaUser className='font-poppins cursor-pointer'/> </span>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
