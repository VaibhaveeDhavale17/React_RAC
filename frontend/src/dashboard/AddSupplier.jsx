import React from 'react'

const AddSupplier = () => {
  return (
    <div className="card-body mt-2 pb-5 overflow-y-hidden">
        <div className="row" >
          <div className="col-lg-8 mx-auto mt-5 p-5 "  style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)' }} >

          <div className="flex flex-col items-center mb-2 ">
  <h5 className="mb-4 text-center">PARTY DETAILS</h5>
</div>
    <form >
            <div className="row g-3">
              <div className="">
                <label className="form-label font-poppins text-[#000000] font-bold" htmlFor="supplierName">Supplier Name (Bill From)</label>
                <input type="text" id="supplierName" name="supplierName" className="form-control" placeholder=""/>
              </div>

              <div className="">
                <label className="form-label font-poppins text-[#000000] font-bold" htmlFor="mailingName">Mailing Name</label>
                <input type="text" id="mailingName" name="mailingName" className="form-control" placeholder=""/>
              </div>

              <div className="col-12">
                <label className="form-label font-poppins text-[#000000] font-bold" htmlFor="address">Address</label>
                <textarea name="address" className="form-control" id="address" rows="2" placeholder=""></textarea>
              </div>


              <div className="col-md-6">
                <label className="form-label font-poppins text-[#000000] font-bold" htmlFor="stateName">State</label>
                <input type="text" id="stateName" name="stateName" className="form-control phone-mask" placeholder=""/>
              </div>


              <div className="col-md-6">
                <label className="form-label font-poppins text-[#000000] font-bold" htmlFor="countryName">Country</label>
                <input type="text" id="countryName" name="countryName" className="form-control phone-mask" placeholder=""/>
              </div>
              
              <div className="">
                <label className="form-label font-poppins text-[#000000] font-bold" htmlFor="gstNumber">GSTIN/UIN</label>
                <input type="text" id="gstNumber" name="gstNumber" className="form-control" placeholder=""/>
              </div>
              
 
              <div className="flex justify-center">
        <button className="flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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

export default AddSupplier