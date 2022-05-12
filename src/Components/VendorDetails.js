import React from "react";
import SideNav from "./SideNav";

function VendorDetails() {
  return (
   <div className="main">
    <div className="lefty">
     <SideNav />
     </div>
   <div className="righty">
        <div className="all-data">
            <div className="data-container">
    <div className="row">
       
        <div className="column">
            <span className="txt">Vendor </span>
            <span className="txt1">Vinit Roy</span>
            <span className="txt1">Rahul Shaw</span>
            <span className="txt1">Karan Jain</span>
            <span className="txt1">Manpreet</span>
        </div>
    
       
        <div className="column">
            <span className="txt">Store Name</span>
            <span className="txt1">Vinit store</span>
            <span className="txt1">Rahul Store</span>
            <span className="txt1">Karan Store</span>
            <span className="txt1">Manu Store</span>
        </div>
        <div className="column">
            <span className="txt">Address</span>
            <span className="txt1">Shyam Residency, A-206, Surat, Gujrat, India</span>
            <span className="txt1">Shyam Residency, A-206, Surat, Gujrat, India</span>
            <span className="txt1">Shyam Residency, A-206, Surat, Gujrat, India</span>
            <span className="txt1">Shyam Residency, A-206, Surat, Gujrat, India</span>
        </div>
        <div className="column">
            <span className="txt">Phone</span>
            <span className="txt1">87936547855</span>
            <span className="txt1">87936547855</span>
            <span className="txt1">87936547855</span>
            <span className="txt1">87936547855</span>
        </div>
        <div className="column">
            <span className="txt">Status</span>
            <div className="column1">
            <button className="btn">
                <span className="btnText">Approved</span>
              </button>
            </div>
              <div className="column1">
                <button className="btn">
                    <span className="btnText">Approved</span>
                  </button>
                </div>
                  <div className="column1">
                    <button className="btn">
                        <span className="btnText">Approved</span>
                      </button>
                      </div>
                      <div className="column1">
                        <button className="btn">
                            <span className="btnText">Approved</span>
                          </button>
                          </div>
                     
        </div>
        <div className="column">
            <span className="txt">Status</span>
            <div className="column1">
              <button type="button" className="btn" data-toggle="modal" data-target="#vendor">
               <span className="btnText"> Click Here</span>
            </button>
            </div>
            <div className="column1">
                <button className="btn">
                    <span className="btnText">Click Here</span>
                  </button>
                </div>
                <div className="column1">
                    <button className="btn">
                        <span className="btnText">Click Here</span>
                      </button>
                    </div>
                    <div className="column1">
                        <button className="btn">
                            <span className="btnText">Click Here</span>
                          </button>
                        </div>
    
        </div>
    
    </div>
    
    
            </div>
        </div>
        <div class="modal fade" id="vendor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="vendor">Vendor Details</h5>
    
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    
                        <div className="data-container">
                          <div className="row">
                            <div className="column">
                              
                                <span className="txt3">Name</span>
                                <span className="txt3">Store</span>
                                <span className="txt3">Phone </span>
                                <span className="txt3">Email</span>
                                <span className="txt3">Liscense</span>
                                <span className="txt3">GST</span>
                                <span className="txt3">Aadhar</span>
                                <span className="txt3">PAN</span>
                                <span className="txt3">Type</span>
                                
                              
                            </div>
                          
                              <div className="column">
                                
                                  <span className="txt1">Rohit Kumar</span>
                                  <span className="txt1">RK Store</span>
                                  <span className="txt1">7452167894</span>
                                  <span className="txt1">rk.singh@gmail.com</span>
                                  <span className="txt1">245137798545</span>
                                  <span className="txt1">41357123654875</span>
                                  <span className="txt1">95714465883214</span>
                                  <span className="txt1">ADE4515EF78</span>
                                  <span className="txt1">Seller</span>
                                 
                             
                              </div>
                              
                            <div className="row">
                              <div className="column">
                               
                                  <span className="txt3">UPI Id</span>
                                  <span className="txt3">Manager</span>
                                  <span className="txt3">WhatsappUpdate</span>
                                  <span className="txt3">Categories</span>
                                  <span className="txt3">Services</span>
                                  <span className="txt3">Active</span>
                                  <span className="txt3">Document</span>
                                  <span className="txt3">Cancelleed-Cheque</span>
                                  <span className="txt3">Aadhar Front</span>
                                  <span className="txt3">Aadhar Back</span>
                                  <span className="txt3">PAN Upload</span>
                             
                              </div>
                              <div className="column">
                               
                                  <span className="txt1">564565341</span>
                                  <span className="txt1">Owner</span>
                                  <span className="txt1">true</span>
                                  <span className="txt1">Vegetable</span>
                                  <span className="txt1">Home Delivery</span>
                                  <span className="txt1">True</span>
                                  <span className="txt1">Uploads/docs/abc.jpg</span>
                                  <span className="txt1">Uploads/docs/abc.jpg</span>
                                  <span className="txt1">Uploads/docs/abc.jpg</span>
                                  <span className="txt1">Uploads/docs/abc.jpg</span>
                                  <span className="txt1">Uploads/docs/abc.jpg</span>
                              
                              </div>
                            </div>
                    
                          </div>
                    
                        </div>
                      
                </div>
              
            </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default VendorDetails;
