import React from "react";
import Navbar from "./Navbar";
import Foods from "./Foods";
import CartDrawer from "./CartDrawer";
import { Route, Routes } from "react-router-dom";
import FoodDetails from "./FoodDetails";
import Home from "./Home";
import Foods1 from "./Foods1";
import Admin from "./Admin";
import { useSelector } from "react-redux";
import Carts from "./Carts";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/foods" element={<Foods />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/foods1" element={<Foods1 />}></Route>
        <Route path="/cartdrawer" element={<CartDrawer />}></Route>
        <Route path="/fooddetails" element={<FoodDetails />}></Route>
        <Route path="/fooddetails/:id" element={<FoodDetails />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
};

export default App;
