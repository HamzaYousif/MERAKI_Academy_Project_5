import "./App.css";
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return <div className="App">

    {/* <Navbar /> */}
    <Routes>

      <Route path="/" element={<Home />} />
      {/* <Route path="/register" element={<Register />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/services" element={<Services />} /> 
      <Route path="/products" element={<Products />} /> 
      <Route path="/services/details" element={<ServiceDetails />} /> 
      <Route path="/products/details" element={<ProductDetails />} /> 
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/services/orders" element={<ServiceOrders />} /> 
      <Route path="/products/orders" element={<ProductOrders />} /> 
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/worker/profile" element={<WorkerProfile />} />   */}

    </Routes>
    {/* <Footer /> */}
  </div>;
}

export default App;
