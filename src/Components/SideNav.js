import React from "react";

function SideNav() {
  return (
    <div>
    <div className="container">
      <div className="sidebar">
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="Users">
              <i className="bx bx-user"></i>
              <span className="Users">Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-list-ul"></i>
              <span className="links-name">Categories</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-flag"></i>
              <span className="links-name">Banner</span>
            </a>
          </li>
          <li>
            <a href="DeliveryProfile">
              <i className="bx bxs-truck"></i>
              <span className="DeliveryProfile">Delivery Profile</span>
            </a>
          </li>
          <li>
            <a href="VendorDetails">
              <i className="bx bx-group"></i>
              <span className="links-name">Vendors</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Products</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-cart"></i>
              <span className="links-name">Order</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Transaction</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Payment Method</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Faqs</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-phone-call"></i>
              <span className="links-name">Support</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Settings</span>
            </a>
          </li>
        </ul>
        
      </div>
      
    </div>
    </div>
  );
}

export default SideNav;
