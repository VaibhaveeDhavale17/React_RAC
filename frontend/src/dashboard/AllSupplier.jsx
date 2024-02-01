import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const GetAllItems = () => {
    const [companyData, setCompanyData] = useState([]);

    
    useEffect(()=>{
      const fetchCompany = async () =>{
        try{
            const response = await axios.get("http://localhost:4000/rac/company/all");
            setCompanyData(response.data.allCompanyDetails);
            console.log(response.data.allCompanyDetails);
        }catch(err){
          console.log(err);
        }
    }
    fetchCompany();
    }, [])

  return (

    <>
      <div className='flex flex-col mt-2 p-5 mt-3 mb-1 w-full' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 1, 0.1)'}}>

      <h5 className="mb-4 text-center" style={{color:'black', fontSize:'2rem'}}>Suppliers</h5>


        <table className='m-4' cellSpacing='8' style={{padding:'10px'}}>
          <thead>
            <tr >
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

              companyData.map((company, index)=>(
                <tr key={index} style={{borderBottom:'1px solid rgba(211,211,211, 0.8)'}}>
                  <td className='pt-5 font-poppins text-[#000000] '>{company.refNumber}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{company.companyName}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{company.supplier}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{company.mailingName}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{company.address}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{company.state}</td>
                  <td className='pt-5 font-poppins text-[#000000]'>{company.country}</td>


                {/* <td className='p-3 pt-5 font-poppins text-[#000000]'> <Link to={`/dashboard/edit/${company.refNumber}`}> <FaEdit className='cursor-pointer text-lg text-green-500 hover:text-green-700 transition duration-300 ease-in-out' />
</Link> </td>
                  <td className='p-3 pt-5'> <FaTrash className='text-gray-600 text-lg hover:text-red-700 hover:cursor-pointer transition duration-300 ease-in-out' onClick={() => handleButtonClick(item.refNumber)} />
</td> */}
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
