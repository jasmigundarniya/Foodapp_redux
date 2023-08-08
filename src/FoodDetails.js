import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import img from "../src/assets/images/banner.jpg";
import { GrFormClose } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodsdetail } from "./store/fooddetailSlice";

const FoodDetails = () => {
  
  // const [foods1, setFoods1] = useState([]);
  // console.log("foods1", foods1);
  // const idname = useParams();
  // console.log("idname", idname);

  // const title = localStorage.getItem("title");
  // const price = localStorage.getItem("price");
  // const images = localStorage.getItem("images");

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${idname?.id}`)
  //     .then((data) => data.json())
  //     .then((result) => setFoods1(result));
  // }, []);

  const { id } = useParams();
  console.log("idredux", id);
  const dispatch = useDispatch();
  const foodDetails = useSelector((state) => state.foodsdetail.items);
  console.log("foodDetails", foodDetails);
  const status = useSelector((state) => state.foodsdetail.status);

  useEffect(() => {
    dispatch(fetchFoodsdetail(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <>
      <Navbar />

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={foodDetails?.image}
              alt="Food Image"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">
              {foodDetails?.title}
            </h2>
            <p class="text-gray-600 mb-6">
              {foodDetails?.description}
            </p>
            <div class="flex items-center mb-4">
              <span class="text-gray-500 mr-2">Price:</span>
              <span class="text-blue-600 font-bold">
                ${foodDetails?.price}
              </span>
            </div>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
