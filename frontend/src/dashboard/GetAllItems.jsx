import React, { useEffect, useState } from 'react'
import axios from 'axios';

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

    <div>
    <ul>
    {/* {data.map((item) => (
  <li key={item.refNumber}>
    {item.productName}
  </li>
))} */}
    </ul>
</div>
  )

}

export default GetAllItems