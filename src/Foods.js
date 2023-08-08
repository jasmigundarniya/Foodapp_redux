import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "./store/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  console.log("foods", foods);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (v) => {
    console.log("v", v);
    // navigate(`${v?.id}`)
    localStorage.setItem("title1", v?.title);
    localStorage.setItem("price1", v?.price);
    localStorage.setItem("images1", v?.image);
    // dispatch(addToCart());
  };

  const handleClick = (id) => {
    console.log("id", id);
    navigate(`/fooddetails/${id?.id}`);
    localStorage.setItem("title", id?.title);
    localStorage.setItem("price", id?.price);
    localStorage.setItem("images", id?.image);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setFoods(result));
  }, []);

  return (
    <>
      <NavLink to="/admin">
        <div className="flex justify-end me-5">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg ml-3 mt-28 hover:bg-blue-700">
            Admin
          </button>
        </div>
      </NavLink>

      <div class="container mx-auto p-4 pt-24">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foods?.map((v, i) => {
            return (
              <>
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={v?.image}
                    alt="Card Image"
                    class="w-full h-48 object-contain"
                  />
                  <div class="p-4  text-center">
                    {/* <NavLink to="/fooddetails/${id}"> */}
                    <h2
                      class="text-xl font-bold mb-2 cursor-pointer"
                      onClick={() => handleClick(v)}
                    >
                      {v?.title}
                    </h2>
                    {/* </NavLink> */}
                    <p class="text-gray-600">${v?.price}</p>
                    <button
                      variant="primary"
                      className="mx-auto flex bg-blue-300 text-white rounded-xl px-5 py-3 mt-3 hover:bg-blue-400"
                      onClick={() => handleAddToCart(v)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Foods;
