import React from "react";
import SideNav from "./SideNav";

function Users() {
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
                <span className="txt">First Name</span>
                <span className="txt">Last Name</span>
                <span className="txt">Email</span>
                <span className="txt">Address</span>
                <span className="txt">Phone Number</span>
                <span className="txt">Password</span>
                <span className="txt">Created At</span>
                <span className="txt">Updated At</span>
            </div>
            
            
              <div className="column">
                  <span className="txt3">Nitin</span>
                  <span className="txt3">Raj</span>
                  <span className="txt3">nkdev847@gmail.com</span>
                  <span className="txt3">Shyam Residency, A-206, Surat, India, Gujrat, 395010</span>
                  <span className="txt3">7452634896</span>
                  <span className="txt3">password@123</span>
                  <span className="txt3">2022-04-29T04:56:28.028+00:00</span>
                  <span className="txt3">2022-04-29T04:56:28.028+00:00</span>
              </div>
          
    
          </div>
    
    
        </div>
      </div>
      </div>
      </div>
    );
}
export default Users;