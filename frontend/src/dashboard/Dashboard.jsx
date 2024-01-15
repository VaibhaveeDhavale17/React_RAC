import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.9)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('salesChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: chartData,
    });
  }, [chartData]);
  //Expiry Items display
  const items = [
    { name: "Item 1", expiryDays: 7, imageUrl: "https://example.com/image1.jpg" },
    { name: "Item 2", expiryDays: 14, imageUrl: "https://example.com/image2.jpg" },
    // Add more items as needed
  ];

  // Function to display items in the itemList div
  const displayItems = () => {
    const itemListDiv = document.getElementById("itemList");

    // Clear existing content
    itemListDiv.innerHTML = "";

    // Iterate through items and create elements for each
    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      // Set the content for the item
      itemDiv.innerHTML = `
        <h2>${item.name}</h2>
        <p>Expiry Days: ${item.expiryDays}</p>
        <img src="${item.imageUrl}" alt="${item.name} image" width="100" height="100">
      `;

      // Append the item to the itemList div
      itemListDiv.appendChild(itemDiv);
    });
  };

  // Call the displayItems function on component mount
  useEffect(() => {
    // displayItems();
  }, []);



  return (
    <div>
      {/* Header */}
      {/* <Navbar/> */}

      {/* Main Body - Recent Orders and Sales Overview */}
      <div class="grid grid-cols-2 divide-x ">
    
        <div className="flex flex-col space-y-4 ...">                   
            {/* Order 1 */}
            <div className="mt-4 bg-white p-4 rounded-md shadow">
            <h2 className="text-2xl font-semibold mb-4">Recent Overview</h2> 
              <h3 className="text-lg font-semibold mb-2">
                Total Stock Available{' '}
              </h3>
              <p className="text-gray-600">Count: 50</p>
            </div>          

           {/* Sales Overview */}
        
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
          <canvas id="salesChart" width="400" height="200"></canvas>
        </div>

        <div className="bg-white p-4 rounded-md shadow bg-white">
        <div class="w-[690px] h-[308px] relative  rounded-[10px]">
    <div class="absolute text-zinc-700 text-xl font-medium font-['Inter'] ">Top Requirements</div>
    <div class="left-[10px]  top-[82px] absolute text-gray-500 text-sm font-medium font-['Inter'] leading-tight">Name</div>
    <div class="left-[94px] top-[82px] absolute text-gray-500 text-sm font-medium font-['Inter'] leading-tight">Used Quantity</div>
    <div class="left-[240px] top-[82px] absolute text-gray-500 text-sm font-medium font-['Inter'] leading-tight">Price</div>
    <div class="left-[312px] top-[82px] absolute text-gray-500 text-sm font-medium font-['Inter'] leading-tight">Remaining Quantity</div>
    <div class="left-[10px] top-[136px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">Paint</div>
    <div class="left-[10px] top-[201px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">xyz</div>
    <div class="left-[10px] top-[266px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">abc</div>
    <div class="left-[140px] top-[136px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">30</div>
    <div class="left-[140px] top-[201px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">21</div>
    <div class="left-[140px] top-[266px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">19</div>
    <div class="left-[362px] top-[136px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">12</div>
    <div class="left-[362px] top-[201px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">15</div>
    <div class="left-[362px] top-[266px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">17</div>
    <div class="left-[240px] top-[136px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">₹ 100</div>
    <div class="left-[240px] top-[201px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">₹ 207</div>
    <div class="left-[240px] top-[266px] absolute text-stone-500 text-sm font-medium font-['Inter'] leading-tight">₹ 105</div>
    <div class="left-[400px] top-[10px] absolute text-blue-800 text-sm font-normal font-['Inter']">See All</div>
</div>
        </div>


       {/* </div> */}
        </div>



        {/* Half side*/}
        <div className="mt-2 p-2"> 
        <div className="flex flex-col space-y-5 ...">                        
            {/* Order 1 */}

            <div className=''>
  <div className="mt-2 pb-4 bg-white p-4 rounded-md shadow">
    <div className="text-[#383e49] font-['Inter'] text-xl font-medium leading-[1.875rem]">Inventory Summary</div>

    <div className="flex flex-row gap-20"> {/* Use flex-row to have Quantity and To be received in the same line */}
      <div className='flex-col '>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-1 ">
            <div className="text-[#444] font-['Inter'] text-sm font-medium leading-5">Quantity in Hand</div>
            <div className="text-[#5d6679] font-['Inter'] font-semibold leading-6">868</div>
          </div>
          <div className="flex justify-center items-center pt-[0.1875rem] pb-[0.1875rem] px-0 w-[1.875rem] h-[1.875rem] rounded bg-[#ffeedb]">
            <svg width={27} height={25} viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg width={27} height={25} viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.9026 0.900208C4.3361 0.900208 3.76817 1.18245 3.45024 1.65814L0.889879 5.23069L0.885262 5.23713L0.881717 5.24422C0.880535 5.24658 0.879321 5.249 0.878081 5.25147C0.851126 5.3052 0.811743 5.38369 0.811743 5.4676V22.9799C0.811743 23.8987 1.54146 24.6287 2.4605 24.6287H24.3509C25.271 24.6287 25.9997 23.8678 25.9997 22.9799L25.9994 5.48752C26.0117 5.45306 26.0137 5.41949 26.0102 5.38873H26.0645L25.9511 5.23048L23.3898 1.65659L23.3891 1.6557C23.0439 1.18502 22.5084 0.9 21.9384 0.9L15.7436 0.900208H4.9026ZM16.2989 5.51111V10.7522L13.4682 9.22143L13.4202 9.19546L13.3724 9.22181L10.5426 10.781V5.54104L11.6494 1.69576H15.2214L16.2989 5.51111ZM4.0907 2.10054L4.09071 2.10055L4.09125 2.09977C4.27891 1.83174 4.57389 1.69576 4.90287 1.69576H10.8165L9.86062 5.06965H1.97003L4.0907 2.10054ZM16.7363 11.4862L16.7447 11.4825L16.7523 11.4775C16.9564 11.3415 17.0948 11.1029 17.0948 10.8582L17.0944 5.86528H25.2336L25.2338 22.9798C25.2338 23.4585 24.834 23.8329 24.3807 23.8329H2.46051C1.98175 23.8329 1.60736 23.433 1.60736 22.9798V5.86528H9.74655V10.8582C9.74655 11.1353 9.88706 11.3431 10.0891 11.4775C10.1985 11.5505 10.3383 11.5836 10.4721 11.5836C10.5775 11.5836 10.7144 11.5501 10.8214 11.4801L13.4207 10.0783L16.0229 11.4817C16.2691 11.6217 16.513 11.5818 16.7363 11.4862ZM21.9386 1.69576C22.2617 1.69576 22.5606 1.85729 22.752 2.10227L24.8715 5.06967H17.0107L16.0548 1.69578L21.9386 1.69576Z" fill="#DBA362" stroke="#DBA362" strokeWidth="0.2" />
        <path d="M11.038 5.06959H10.938V5.16959V5.76519V5.86519H11.038H15.8033H15.9033V5.76519V5.16959V5.06959H15.8033H11.038Z" fill="#DBA362" stroke="#DBA362" strokeWidth="0.2" />
      </svg>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-px h-[5.6875rem] bg-[#f0f1f3]" />

      <div className="flex-col space-between items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="text-[#444] font-['Inter'] text-sm font-medium leading-5">To be received</div>
          <div className="text-[#5d6679] font-['Inter'] font-semibold leading-6">200</div>
        </div>
        <div className="flex justify-center items-center pb-[0.1875rem] pl-[0.3125rem] pr-[0.1875rem] p-0 w-[1.875rem] h-[1.875rem] rounded bg-[#eceaff]">
          <svg width={22} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <svg width={22} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M10.3119 0C7.82548 0 5.44094 0.987739 3.68307 2.74572C1.92487 4.50391 0.937134 6.88846 0.937134 9.37511C0.937134 14.375 9.48704 23.7498 9.84971 24.1751C9.96899 24.3038 10.1368 24.3762 10.3122 24.3752C10.4875 24.3762 10.6554 24.3038 10.7746 24.1751L11.5621 23.2813V23.7501C11.5621 24.0816 11.6939 24.3996 11.9283 24.634C12.1627 24.8684 12.4805 25 12.8122 25H20.3121C20.6436 25 20.9615 24.8684 21.1958 24.634C21.4304 24.3996 21.562 24.0816 21.562 23.7501V16.2502C21.562 15.9187 21.4304 15.6006 21.1958 15.3663C20.9615 15.1319 20.6436 15.0003 20.3121 15.0003H17.6683C19.0057 12.6877 19.6871 10.8004 19.6871 9.37532C19.6871 7.72968 19.2539 6.11297 18.4311 4.68787C17.6083 3.26262 16.4247 2.07924 14.9996 1.2564C13.5745 0.433549 11.9578 0.000428535 10.3122 0.000428535L10.3119 0ZM20.312 23.7495H12.8121V16.2496H14.687V18.7497C14.6877 18.9663 14.8005 19.1672 14.985 19.2804C15.1696 19.3938 15.3998 19.4034 15.5932 19.3059L16.5618 18.8246L17.5305 19.3059H17.5307C17.6178 19.3505 17.714 19.3741 17.812 19.3745C17.9289 19.3749 18.0438 19.3425 18.1432 19.2808C18.3263 19.1663 18.4374 18.9656 18.437 18.7497V16.2496H20.312L20.312 23.7495ZM17.1871 16.2496V17.7371L16.8745 17.5684C16.6976 17.4793 16.4888 17.4793 16.312 17.5684L15.9681 17.7371V16.2496H17.1871ZM15.3121 14.9997H12.8121C12.4804 14.9997 12.1625 15.1313 11.9282 15.3657C11.6938 15.6001 11.5619 15.9181 11.5619 16.2496V21.3495C11.0557 21.9746 10.6182 22.4682 10.312 22.8121C8.5308 20.7808 2.18695 13.2936 2.18695 9.37489C2.18695 6.472 3.73568 3.79014 6.24954 2.33837C8.76341 0.886597 11.8605 0.886919 14.3741 2.33837C16.8876 3.78981 18.4367 6.47189 18.4367 9.37489C18.4367 10.6811 17.6618 12.6249 16.2116 14.9998L15.3121 14.9997Z" fill="#817AF3" fillOpacity="0.6" />
        <path d="M10.3119 4.99988C9.15157 4.99988 8.0389 5.46088 7.21841 6.28118C6.39792 7.10168 5.93689 8.21456 5.93689 9.3749C5.93689 10.535 6.39789 11.6479 7.21841 12.4684C8.0389 13.2889 9.15157 13.7497 10.3119 13.7497C11.4723 13.7497 12.5849 13.2889 13.4054 12.4684C14.2259 11.6479 14.6869 10.535 14.6869 9.3749C14.6869 8.21456 14.2259 7.10168 13.4054 6.28118C12.5849 5.46091 11.4723 4.99988 10.3119 4.99988ZM10.3119 12.4998C9.48301 12.4998 8.68823 12.1706 8.10233 11.5845C7.51621 10.9985 7.18702 10.2036 7.18702 9.3749C7.18702 8.546 7.51618 7.75122 8.10233 7.1651C8.68829 6.57915 9.48301 6.24979 10.3119 6.24979C11.1408 6.24979 11.9356 6.57917 12.5215 7.1651C13.1076 7.75122 13.4368 8.546 13.4368 9.3749C13.4368 10.2036 13.1076 10.9986 12.5215 11.5845C11.9355 12.1706 11.1408 12.4998 10.3119 12.4998Z" fill="#817AF3" fillOpacity="0.6" />
      </svg>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>


<div className=''>
  <div className="mt-2 pb-4 bg-white p-4 rounded-md shadow">
    <div className="text-[#383e49] font-['Inter'] text-xl font-medium leading-[1.875rem]">Product Summary</div>

    <div className="flex flex-row gap-20"> {/* Use flex-row to have Quantity and To be received in the same line */}
      <div className='flex-col '>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-1 ">
            <div className="text-[#444] font-['Inter'] text-sm font-medium leading-5">Number of Suppliers</div>
            <div className="text-[#5d6679] font-['Inter'] font-semibold leading-6">31</div>
          </div>
          <div className="flex justify-center items-center pt-[0.1875rem] pb-[0.1875rem] px-0 w-[1.875rem] h-[1.875rem] rounded bg-[#ffeedb]">
            <svg width={27} height={25} viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg width={27} height={25} viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.9026 0.900208C4.3361 0.900208 3.76817 1.18245 3.45024 1.65814L0.889879 5.23069L0.885262 5.23713L0.881717 5.24422C0.880535 5.24658 0.879321 5.249 0.878081 5.25147C0.851126 5.3052 0.811743 5.38369 0.811743 5.4676V22.9799C0.811743 23.8987 1.54146 24.6287 2.4605 24.6287H24.3509C25.271 24.6287 25.9997 23.8678 25.9997 22.9799L25.9994 5.48752C26.0117 5.45306 26.0137 5.41949 26.0102 5.38873H26.0645L25.9511 5.23048L23.3898 1.65659L23.3891 1.6557C23.0439 1.18502 22.5084 0.9 21.9384 0.9L15.7436 0.900208H4.9026ZM16.2989 5.51111V10.7522L13.4682 9.22143L13.4202 9.19546L13.3724 9.22181L10.5426 10.781V5.54104L11.6494 1.69576H15.2214L16.2989 5.51111ZM4.0907 2.10054L4.09071 2.10055L4.09125 2.09977C4.27891 1.83174 4.57389 1.69576 4.90287 1.69576H10.8165L9.86062 5.06965H1.97003L4.0907 2.10054ZM16.7363 11.4862L16.7447 11.4825L16.7523 11.4775C16.9564 11.3415 17.0948 11.1029 17.0948 10.8582L17.0944 5.86528H25.2336L25.2338 22.9798C25.2338 23.4585 24.834 23.8329 24.3807 23.8329H2.46051C1.98175 23.8329 1.60736 23.433 1.60736 22.9798V5.86528H9.74655V10.8582C9.74655 11.1353 9.88706 11.3431 10.0891 11.4775C10.1985 11.5505 10.3383 11.5836 10.4721 11.5836C10.5775 11.5836 10.7144 11.5501 10.8214 11.4801L13.4207 10.0783L16.0229 11.4817C16.2691 11.6217 16.513 11.5818 16.7363 11.4862ZM21.9386 1.69576C22.2617 1.69576 22.5606 1.85729 22.752 2.10227L24.8715 5.06967H17.0107L16.0548 1.69578L21.9386 1.69576Z" fill="#DBA362" stroke="#DBA362" strokeWidth="0.2" />
        <path d="M11.038 5.06959H10.938V5.16959V5.76519V5.86519H11.038H15.8033H15.9033V5.76519V5.16959V5.06959H15.8033H11.038Z" fill="#DBA362" stroke="#DBA362" strokeWidth="0.2" />
      </svg>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-px h-[5.6875rem] bg-[#f0f1f3]" />

      <div className="flex-col space-between items-center gap-4">
  <div className="flex flex-col items-center gap-1">
    <div className="text-[#444] font-['Inter'] text-sm font-medium leading-5">Number of Categories</div>
    <div className="text-[#5d6679] font-['Inter'] font-semibold leading-6">21</div>
  </div>
  <div className="flex justify-center items-center pb-[0.1875rem] pl-[0.3125rem] pr-[0.1875rem] p-0 w-[1.875rem] h-[1.875rem] rounded bg-[#eceaff]">
    <svg width={22} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
     
    <svg width={22} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <svg width={22} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M10.3119 0C7.82548 0 5.44094 0.987739 3.68307 2.74572C1.92487 4.50391 0.937134 6.88846 0.937134 9.37511C0.937134 14.375 9.48704 23.7498 9.84971 24.1751C9.96899 24.3038 10.1368 24.3762 10.3122 24.3752C10.4875 24.3762 10.6554 24.3038 10.7746 24.1751L11.5621 23.2813V23.7501C11.5621 24.0816 11.6939 24.3996 11.9283 24.634C12.1627 24.8684 12.4805 25 12.8122 25H20.3121C20.6436 25 20.9615 24.8684 21.1958 24.634C21.4304 24.3996 21.562 24.0816 21.562 23.7501V16.2502C21.562 15.9187 21.4304 15.6006 21.1958 15.3663C20.9615 15.1319 20.6436 15.0003 20.3121 15.0003H17.6683C19.0057 12.6877 19.6871 10.8004 19.6871 9.37532C19.6871 7.72968 19.2539 6.11297 18.4311 4.68787C17.6083 3.26262 16.4247 2.07924 14.9996 1.2564C13.5745 0.433549 11.9578 0.000428535 10.3122 0.000428535L10.3119 0ZM20.312 23.7495H12.8121V16.2496H14.687V18.7497C14.6877 18.9663 14.8005 19.1672 14.985 19.2804C15.1696 19.3938 15.3998 19.4034 15.5932 19.3059L16.5618 18.8246L17.5305 19.3059H17.5307C17.6178 19.3505 17.714 19.3741 17.812 19.3745C17.9289 19.3749 18.0438 19.3425 18.1432 19.2808C18.3263 19.1663 18.4374 18.9656 18.437 18.7497V16.2496H20.312L20.312 23.7495ZM17.1871 16.2496V17.7371L16.8745 17.5684C16.6976 17.4793 16.4888 17.4793 16.312 17.5684L15.9681 17.7371V16.2496H17.1871ZM15.3121 14.9997H12.8121C12.4804 14.9997 12.1625 15.1313 11.9282 15.3657C11.6938 15.6001 11.5619 15.9181 11.5619 16.2496V21.3495C11.0557 21.9746 10.6182 22.4682 10.312 22.8121C8.5308 20.7808 2.18695 13.2936 2.18695 9.37489C2.18695 6.472 3.73568 3.79014 6.24954 2.33837C8.76341 0.886597 11.8605 0.886919 14.3741 2.33837C16.8876 3.78981 18.4367 6.47189 18.4367 9.37489C18.4367 10.6811 17.6618 12.6249 16.2116 14.9998L15.3121 14.9997Z" fill="#817AF3" fillOpacity="0.6" />
        <path d="M10.3119 4.99988C9.15157 4.99988 8.0389 5.46088 7.21841 6.28118C6.39792 7.10168 5.93689 8.21456 5.93689 9.3749C5.93689 10.535 6.39789 11.6479 7.21841 12.4684C8.0389 13.2889 9.15157 13.7497 10.3119 13.7497C11.4723 13.7497 12.5849 13.2889 13.4054 12.4684C14.2259 11.6479 14.6869 10.535 14.6869 9.3749C14.6869 8.21456 14.2259 7.10168 13.4054 6.28118C12.5849 5.46091 11.4723 4.99988 10.3119 4.99988ZM10.3119 12.4998C9.48301 12.4998 8.68823 12.1706 8.10233 11.5845C7.51621 10.9985 7.18702 10.2036 7.18702 9.3749C7.18702 8.546 7.51618 7.75122 8.10233 7.1651C8.68829 6.57915 9.48301 6.24979 10.3119 6.24979C11.1408 6.24979 11.9356 6.57917 12.5215 7.1651C13.1076 7.75122 13.4368 8.546 13.4368 9.3749C13.4368 10.2036 13.1076 10.9986 12.5215 11.5845C11.9355 12.1706 11.1408 12.4998 10.3119 12.4998Z" fill="#817AF3" fillOpacity="0.6" />
      </svg>
          </svg>
    </svg>
  </div>
</div>
    </div>
  </div>
</div>
  
            <div className="mt-2 bg-white p-4 rounded-md shadow">
            <div class="w-[189px] h-6 text-zinc-700 text-xl font-medium font-['Inter'] leading-[30px]">Expiring Shelf Life </div>
            <div class="w-[345px] h-20 pt-5 justify-start items-center gap-[26px] inline-flex">
    <img class="w-[60px] h-[70px] rounded" src="https://via.placeholder.com/60x70" />
    <div class="w-[181px] flex-col  justify-start items-start gap-1 inline-flex">
        <div class="text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">Paint</div>
        <div class="w-[201px] h-5 text-gray-500 text-sm font-normal font-['Inter'] leading-tight">Expiry Date : 10/12/23</div>
        <div class="w-[201px] h-5 text-gray-500 text-sm font-normal font-['Inter'] leading-tight">Quantity : 1</div>
    </div>
    <div class="mix-blend-multiply justify-start items-start flex">
        <div class="pl-1.5 pr-2 py-0.5 bg-rose-50 rounded-2xl justify-center items-center gap-1 flex">
            <div class="text-center text-orange-800 text-xs font-medium font-['Inter'] leading-[18px]">2 days</div>
        </div>
    </div>
</div>
              <div  id="itemList"></div>
            </div>
            
            <div className="mt-2 bg-white p-4 rounded-md shadow">
            <h1 className="text-2xl font-semibold mb-4">Low Quantity Stock</h1>  

            <div class="w-[351px] h-[70px] justify-start items-center gap-[26px] inline-flex">
    <img class="w-[60px] h-[70px] rounded" src="https://via.placeholder.com/60x70" />
    <div class="flex-col justify-start items-start gap-1 inline-flex">
        <div class="text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">Paint</div>
        <div class="w-[201px] text-gray-500 text-sm font-normal font-['Inter'] leading-tight">Remaining Quantity : 10 Tin</div>
    </div>
    <div class="mix-blend-multiply justify-start items-start flex">
        <div class="pl-1.5 pr-2 py-0.5 bg-rose-50 rounded-2xl justify-center items-center gap-1 flex">
            <div class="text-center text-orange-800 text-xs font-medium font-['Inter'] leading-[18px]">Low</div>
        </div>
    </div>
</div>              
            </div>
          </div> 
        </div>

      </div>
    </div>
    
  );
};

export default Dashboard;