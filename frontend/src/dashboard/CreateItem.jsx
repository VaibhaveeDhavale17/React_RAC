import React, { useEffect, useRef, useState } from 'react'
import './CreateItem.css'
import 'react-tailwindcss-datepicker'
import axios from 'axios';
import {DatePicker} from 'antd';
const {RangePicker} = DatePicker;

///Push from vaibhavee try


const CreateItem = () => {

  const [dates, setDates] = useState([]);
  console.log(dates);
  

  //GET SELECTED MONTH
  const [selectedMonth, setSelelectedMonth] = useState('');

  const handleMonthChange = (e) =>{
    const selectedValue = e.target.value;
    // console.log(selectedValue);

    setSelelectedMonth(selectedValue);
    // console.log(selectedMonth);
  }

  //HANDLE INSERT ITEMS
  const handleInsertItems = (event) =>{
    event.preventDefault();
    const form = event.target;

    const refNumber = form.refNumber.value;
    const productName = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const month = selectedMonth;
    const entryDate = dates[0];
    const expiryDate = dates[1];
    const numOfProducts = form.numOfProducts.value;
    const tax = form.tax.value;
    const cgst = form.cgst.value;
    const sgst = form.sgst.value;

    const productObj = {
      refNumber, productName, description, price, category, month, 
      entryDate, expiryDate,
      numOfProducts, tax, cgst, sgst
    }

    console.log(productObj);

    //SEND DATA TO DATABASE
    // axios.post('', {productObj})
    // .then((response)=>console.log(response))
    // .catch((err)=>console.log(err));

    // console.log(productObj);

    axios.post('http://localhost:4000/rac/product/new', productObj,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(productObj)
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
    
  }

  return (
    <div className="card-body mt-2 pb-5 overflow-y-hidden">
        <div className="row" >
          <div className="col-lg-8 mx-auto mt-5 p-5 "  style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)' }} >

          <div className="flex flex-col items-center mb-2 ">
  <h5 className="mb-4 text-center">Insert new Item</h5>
</div>
    <form onSubmit={handleInsertItems}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="refNumber">Product Reference Number</label>
                <input type="text" id="refNumber" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="productName">Product Name</label>
                <div className="input-group input-group-merge">
                  <input className="form-control" type="text" id="name" name="name"/>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label" htmlFor="productDescription">Product Decription</label>
                <textarea name="address" className="form-control" id="description" rows="2" placeholder=""></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="productPrice">Product Price</label>
                <input type="text" id="price" className="form-control phone-mask"/>
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="productCategory">Product Category</label>
                <input type="text" id="category" className="form-control phone-mask"/>
              </div>

              <div className="col-md">
                <label className="form-label" htmlFor="month">Entry Month</label>
                <div className="position-relative"><select onChange={handleMonthChange} id="month" className="select2 form-select select2-hidden-accessible" data-allow-clear="true" data-select2-id="month" tabIndex="-1" aria-hidden="true">
                  <option value="" data-select2-id="2">Select</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                  
                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{ width: '288.781px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-state-container"><span className="select2-selection__rendered" id="select2-state-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder"></span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
              </div>

  <div>
    <RangePicker className='p-3' placeholder={['Entry Date', 'Expiry Date']} onChange={(values) => {
      setDates(values.map(item=>{
        return (item).format('DD-MM-YYYY');
      }))
    }}

      />
  </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="numOfProducts">Number of Products</label>
                <input type="text" id="numOfProducts" className="form-control phone-mask" placeholder=""/>
              </div>
              
              <div className="col-md-6">
                <label className="form-label" htmlFor="tax">tax</label>
                <input type="text" id="tax" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="cgst">CGST</label>
                <input type="text" id="cgst" className="form-control" placeholder=""/>
              </div>
              <div className="col-md">
                <label className="form-label" htmlFor="sgst">SGST</label>
                <input type="text" id="sgst" className="form-control" placeholder=""/>
              </div>

              
              <div className="flex justify-center">
  <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-5">
    Submit
  </button>
</div>
              </div>
              </form>
              </div>
              </div>
              </div>
  )
}

export default CreateItem