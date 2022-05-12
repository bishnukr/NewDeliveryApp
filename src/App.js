import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav.js";
import DeliveryProfile from "./Components/DeliveryProfile.js";
import VendorDetails from "./Components/VendorDetails.js";
import Users from "./Components/Users.js";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SideNav />}></Route>
      <Route path="/DeliveryProfile" element={<DeliveryProfile />}></Route>
      <Route path="/VendorDetails" element={<VendorDetails />}></Route>
      <Route path="/Users" element={<Users />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
