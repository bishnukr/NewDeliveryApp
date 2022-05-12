import React from "react";
import SideNav from "./SideNav";

function DeliveryProfile() {
  return (
   <div className="main">
     <div className="lefty">
     <SideNav />
     </div>
     <div className="righty">
    <div className="all-data">
    <div className="data-container">
      <div className="column">
        <div className="row">
            <span className="txt">Name</span>
            <span className="txt">Email</span>
            <span className="txt">Phone No.</span>
            <span className="txt">Password</span>
            <span className="txt">Is Available</span>
            <span className="txt">Order Reference</span>
            <span className="txt">Created At</span>
            <span className="txt">Updated At</span>
            <span className="txt">Status</span>
        </div>
        

        <div className="column">
          <div className="row">
              <span className="txty">Ramu</span>
              <span className="txty">ramushah@gmail.com</span>
              <span className="txty">7452167894</span>
              <span className="txty">password@123</span>
              <span className="txty">true</span>
              <span className="txty">620fa2700n</span>
              <span className="txty">2022-04-29</span>
              <span className="txty">2022-04-29</span>
              <button className="appbtn">
          <span className="btnText">Approved</span>
          <i className="uil uil-navigator"></i>
        </button>
              
          </div>
          <div className="row">
              <span className="txty">Ramu</span>
              <span className="txty">ramushah@gmail.com</span>
              <span className="txty">7452167894</span>
              <span className="txty">password@123</span>
              <span className="txty">true</span>
              <span className="txty">620fa2700n</span>
              <span className="txty">2022-04-29</span>
              <span className="txty">2022-04-29</span>
              <button className="appbtn">
          <span className="btnText">Approved</span>
          <i className="uil uil-navigator"></i>
        </button>
              
          </div>
        </div>

      </div>


    </div>
  </div>
  </div>
  </div>
  );
}

export default DeliveryProfile;
