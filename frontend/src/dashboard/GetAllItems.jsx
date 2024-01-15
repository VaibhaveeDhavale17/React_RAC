import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar';

const product = {
  refNumber: "123",
  name:"Hello",
  description:"THis is sample",
  price:"23"
};

const GetAllItems = () => {
    const [data, setMyData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:4000/rac/products");
            setMyData(response.data);
            console.log('Data Fetched successfully', response.data);
          } catch (err) {
            console.log('Error fetching data', err);
            setMyData([]); // Set an empty array in case of an error to avoid "map is not a function"
          }
        };
      
        console.log('Before fetch:', data); // Log before initiating fetch
        fetchData();
      }, []);
      
      console.log('After useEffect:', data); // Log after useEffect
      

  return (
    <>
    
    <div className='flex-col'>

    <div className='flex flex-col mt-2 p-5 mt-3 mb-1' style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)' }}>
      Helloo

    </div>
    
    <div class="flex flex-col mt-3 p-5 " style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)' }}>
    <h4 className='flex justify-center p-3'>All Products</h4>
      <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">RefNumber</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Name</h5>
          </div>
          <div class="p-2.5 text-center xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">Description</h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">Price</h5>
          </div>
          <div class="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 class="text-sm font-medium uppercase xsm:text-base">Stock</h5>
        </div>
    </div>
  <div class="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
    <div class="flex items-center gap-3 p-2.5 xl:p-5">
      <div class="flex-shrink-0">
        <p>{product.refNumber}</p>
        </div>
        <p class="hidden text-black dark:text-white sm:block">Google</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">3.5K</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">$5,768</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">590</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">4.8%</p>
        </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
          <p>hi</p>
        </div>
        <p class="hidden text-black dark:text-white sm:block">Twitter</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">2.2K</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">$4,635</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">467</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">4.3%</p>
        </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
          <p>hi</p>
        </div>
        <p class="hidden text-black dark:text-white sm:block">Github</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">2.1K</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">$4,290</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">420</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">3.7%</p>
        </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
          <p>hi</p>
        </div>
        <p class="hidden text-black dark:text-white sm:block">Vimeo</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">1.5K</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">$3,580</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">389</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">2.5%</p>
        </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 ">
          <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
          <p>hi</p>
        </div>
        <p class="hidden text-black dark:text-white sm:block">Facebook</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">3.5K</p>
        </div>
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">$6,768</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">390</p>
        </div>
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">4.2%</p>
        </div>
        </div>
        </div>

        </div>
        </>
  )

}

export default GetAllItems