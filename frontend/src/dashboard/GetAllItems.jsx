import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { FaDrumstickBite, FaEdit, FaTrash } from 'react-icons/fa';

const GetAllItems = () => {
  const [data, setMyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/rac/products");
        setMyData(response.data.products);
        console.log(response.data.products);
      } catch (err) {
        console.log('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className='flex-col'>
    //   {/* <Navbar /> */}

    //   <div className='flex flex-col mt-2 p-5 mt-3 mb-1' style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)' }}>
    //     {data.map((item, index) => (
    //       <div key={index}>
    //         <p>{item.productName}</p>
    //         <p>{item.refNumber}</p>
    //         <p>{item.productDescription}</p>
    //         <p>{item.productPrice}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>


    <>
      <div className='flex flex-col mt-2 p-5 mt-3 mb-1 w-full' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 1, 0.1)'}}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reference Number</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th className=''>Edit</th>
              <th>Delete</th>

            </tr>
          </thead>

          <tbody>
            {
              data.map((item, index)=>(
                <tr key={index} style={{borderBottom:'1px solid rgba(211,211,211, 0.8)'}}>
                  <td className='pt-5'>{item.productName}</td>
                  <td className='pt-5'>{item.refNumber}</td>
                  <td className='pt-5'>{item.productDescription}</td>
                  <td className='pt-5'>{item.productPrice}</td>
                  <td className='pt-5'>{item.productCategory}</td>
                  <td className='p-3 pt-5'> <FaEdit className='cursor-pointer'/> </td>
                  <td className='p-3 pt-5'> <FaTrash className=' hover:text-red-700 hover:cursor-pointer' /></td>
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
