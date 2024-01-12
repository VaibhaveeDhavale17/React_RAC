import React from 'react'
import './CreateItem.css'


const CreateItem = () => {
  return (
    <div className="card-body mt-5">
        <div className="row" >
          <div className="col-lg-8 mx-auto mt-5 pd-5 p-5" style={{ backgroundColor: 'white' }}>

          <div className="flex flex-col items-center mb-2">
  <h5 className="mb-4 text-center">Insert new Item</h5>
  {/* Other content goes here */}
</div>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="refNumber">Product Reference Number</label>
                <input type="text" id="refNumber" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="name">Product Name</label>
                <div className="input-group input-group-merge">
                  <input className="form-control" type="text" id="name" name="name"/>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label" htmlFor="description">Product Decription</label>
                <textarea name="address" className="form-control" id="description" rows="2" placeholder=""></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="price">Product Price</label>
                <input type="text" id="price" className="form-control phone-mask"/>
              </div>

              <div className="col-md">
                <label className="form-label" htmlFor="month">Entry Month</label>
                <div className="position-relative"><select id="month" className="select2 form-select select2-hidden-accessible" data-allow-clear="true" data-select2-id="month" tabindex="-1" aria-hidden="true">
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
                  
                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{ width: '288.781px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-state-container"><span className="select2-selection__rendered" id="select2-state-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder"></span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></div>
              </div>

              
{/* <div date-rangepicker className="flex items-center">
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
  </div>
  <span className="mx-4 text-gray-500">to</span>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
</div>
</div> */}


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

              
              <div className="col-12">
              <div className="col-md mb-5">
                <label className="form-label " htmlFor="totalPrice">Total Price</label>
                <input type="text" id="totalPrice" className="form-control" placeholder=""/>
              </div>
              </div>
              <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-5">
    Submit
  </button>
</div>



              </div>
              </div>
              </div>
              </div>


  )
}

export default CreateItem