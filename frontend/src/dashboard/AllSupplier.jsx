import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaCross, FaEdit, FaTrash } from 'react-icons/fa';


const GetAllItems = () => {
    const [companyData, setCompanyData] = useState([]);
    
  

  return (

    <>
      <div className='flex flex-col mt-2 p-5 mt-3 mb-1 w-full' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 1, 0.1)'}}>


        <table>
          <thead>
            <tr>
              <th className='font-poppins text-[#000000] font-bold'>Ref. Number</th>
              <th className='font-poppins text-[#000000] font-bold '>Company Name</th>
              <th className='font-poppins text-[#000000] font-bold'>Supplier Name</th>
              <th className='font-poppins text-[#000000] font-bold'>Mailing Name</th>
              <th className='font-poppins text-[#000000] font-bold'>Address</th>
              <th className='font-poppins text-[#000000] font-bold'>State</th>
              <th className='font-poppins text-[#000000] font-bold'>Country</th>

            </tr>
          </thead>
         
          <tbody>
            {

              data.map((item, index)=>(
                <tr key={index} style={{borderBottom:'1px solid rgba(211,211,211, 0.8)'}}>
                  <td className='pt-5 font-poppins text-[#000000] '>{item.refNumber}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{item.productName}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{item.productDescription}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>Rs. {item.productPrice}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{item.productCategory}</td>
                <td className='p-3 pt-5 font-poppins text-[#000000]'> <Link to={`/dashboard/edit/${item.refNumber}`}> <FaEdit className='cursor-pointer text-lg text-green-500 hover:text-green-700 transition duration-300 ease-in-out' />
</Link> </td>
                  <td className='p-3 pt-5'> <FaTrash className='text-gray-600 text-lg hover:text-red-700 hover:cursor-pointer transition duration-300 ease-in-out' onClick={() => handleButtonClick(item.refNumber)} />
</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>

  );
};

export default GetAllItems;
