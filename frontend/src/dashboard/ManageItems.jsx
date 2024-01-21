import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageItems = () => {
  const [refNumber, setRefNumber] = useState('');
  const [itemInfo, setItemInfo] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/rac/product/${refNumber}`);
      console.log('Response:', response.data);
      setItemInfo(response.data.product);
    } catch (error) {
      console.error('Error fetching item information:', error);
    }
  };

  const renderTotalPrice = () => {
    if (itemInfo && itemInfo.totalPrice && itemInfo.totalPrice["$numberDecimal"]) {
      const totalPriceValue = parseFloat(itemInfo.totalPrice["$numberDecimal"]);
      if (!isNaN(totalPriceValue)) {
        return <p>{totalPriceValue.toFixed(2)}</p>;
      }
    }
    return null;
  };

  const formatExpiryDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='flex flex-col text-center pt-4 mt-2 pr-5 mt-3 mb-1 w-full pr-3' style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)' }}>
      <div>
        <div>
          <h4 className='font-poppins font-bold text-black'>Enter the Reference Number of the item you want to edit</h4>
          <div className="text-center">
            <input
              className='m-3 border rounded-md p-2 mr-5 w-80'
              type="text"
              id='refNumber'
              name='refNumber'
              placeholder='Reference Number'
              value={refNumber}
              onChange={(e) => setRefNumber(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {itemInfo &&  (
  <div className="flex flex-col mt-5 p-3 rounded-md border border-gray-300">
  <h4 className='font-poppins font-bold text-black text-xl mb-3'>Item Information:</h4>
  <div className="item-details">

    <div class="w-[1096px] h-[809px] relative bg-white rounded-lg">
    <div class="left-[19px] top-[75px] absolute text-gray-600 text-base font-normal font-poppins text-black leading-normal">Overiew</div>
    <div class="left-[43px] top-[141px] absolute text-gray-600 text-base font-semibold font-poppins text-black leading-normal">Primary Details</div>
    <div class="left-[703px] top-[141px] absolute text-gray-600 text-base font-semibold font-poppins text-black leading-normal">Supplier Details</div>
    <div class="left-[43px] top-[530px] absolute text-gray-600 text-base font-semibold font-poppins text-black leading-normal">Total Price</div>
    <div class="left-[283px] top-[530px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">{renderTotalPrice()} </div>
    <div class="left-[43px] top-[183px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Product name</div>
    <div class="left-[703px] top-[183px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Supplier name</div>
    <div class="left-[43px] top-[641px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">RRR </div>
    <div class="left-[283px] top-[183px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">{itemInfo.productName}</div>
    <div class="left-[883px] top-[183px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">K Kumar</div>
    <div class="left-[668px] top-[641px] absolute text-blue-600 text-sm font-medium font-poppins text-black leading-tight">15</div>
    <div class="left-[43px] top-[235px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Product ID</div>
    <div class="left-[703px] top-[235px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Contact Number</div>
    <div class="left-[43px] top-[693px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">SSS</div>
    <div class="left-[283px] top-[235px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">{itemInfo.refNumber}</div>
    <div class="left-[883px] top-[235px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">1234567890</div>
    <div class="left-[668px] top-[693px] absolute text-blue-600 text-sm font-medium font-poppins text-black leading-tight">19</div>
    <div class="left-[43px] top-[287px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Product category</div>
    <div class="left-[283px] top-[287px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">{itemInfo.productCategory}</div>
    <div class="left-[43px] top-[339px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Expiry Date</div>
    <div class="left-[283px] top-[339px] absolute text-gray-500 text-sm font-medium font-poppins text-black leading-tight">{formatExpiryDate(itemInfo.productExpiryDate)}</div>
    <div class="left-[43px] top-[391px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal"> </div>
    <div class="w-[1005px] h-[0px] left-[40px] top-[111px] absolute border border-gray-100"></div>
    <div class="left-[43px] top-[400px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Opening Stock</div>
    <div class="left-[43px] top-[460px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal">Remaining  Stock</div>
    <div class="left-[43px] top-[537px] absolute text-gray-400 text-base font-normal font-poppins text-black leading-normal"> </div>
    <div class="left-[283px] top-[400px] absolute text-gray-500 text-base font-medium font-poppins text-black leading-normal">40</div>
    <div class="left-[283px] top-[460px] absolute text-gray-500 text-base font-medium font-poppins text-black leading-normal">{itemInfo.numOfProducts}</div>
    <div class="w-[75px] h-0.5 left-[16px] top-[109px] absolute bg-blue-600 rounded-[10px]"></div>
    <div class="w-[689px] h-10 left-[37px] top-[653px] absolute opacity-50 bg-gray-100 border-b border-gray-100"></div>
    <div class="left-[43px] top-[591px] absolute text-gray-500 text-sm font-semibold font-poppins text-black leading-tight">Store Name</div>
    <div class="left-[592px] top-[591px] absolute text-gray-500 text-sm font-semibold font-poppins text-black leading-tight">Stock in hand</div>
   <div className=''>
   <button
              className="bg-blue-500 hover:bg-blue-700 text-white mr-6 font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Edit
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={handleSearch}
            >
              Download
            </button>
   </div>
</div>
  </div>
</div>

)}

      </div>
    </div>
  );
};

export default ManageItems;
