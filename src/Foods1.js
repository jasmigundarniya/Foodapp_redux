import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  fetchFoods,
  setSearchQuery,
  setSelectedCategory,
} from "./store/foodsSlice";
import { addToCart } from "./store/addcartSlice";
import { fetchCategory } from "./store/categorySlice";

const Foods1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods.items);
  const categories = useSelector((state) => state.category.items);

  const filteredFoods = useSelector(
    (state) => state.foods.filteredFoods
  );

  const selectedCategory = useSelector(
    (state) => state.foods.selectedCategory
  );

  const status = useSelector((state) => state.foods.status);
  const error = useSelector((state) => state.foods.error);

  useEffect(() => {
    dispatch(fetchFoods());
    dispatch(fetchCategory());
    dispatch(setSelectedCategory(null));
    // dispatch(setFilteredFoods(foods));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // const handleAddToCart = (v) => {
  //   console.log("v", v);
  //   // navigate(`${v?.id}`)
  //   localStorage.setItem("title1", v?.title);
  //   localStorage.setItem("price1", v?.price);
  //   localStorage.setItem("images1", v?.image);
  //   // dispatch(addToCart());
  // };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleClick = (id) => {
    // console.log("idddd", id);
    navigate(`/fooddetails/${id?.id}`);
  };

  // const handleClick1 = (category) => {
  //   dispatch(setSelectedCategory(category));
  // };

  const handleClick1 = (category) => {
    // console.log('category', category)
    if (category === "All") {
      dispatch(setSelectedCategory(null));
    } else {
      dispatch(setSelectedCategory(category));
    }
  };

  // const handleSearch = (event) => {
  //   const searchQuery = event.target.value;
  //   const filteredFoods = foods.filter((food) =>
  //     food.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   dispatch(setFilteredFoods(filteredFoods));
  // };

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <>
      {/* <NavLink to="/admin">
        <div className="flex justify-end me-5">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg ml-3 mt-28 hover:bg-blue-700">
            Admin
          </button>
        </div>
      </NavLink> */}

      <div class="container mx-auto p-4 pt-28">
        <form className="flex items-center mb-10">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search..."
            className="border border-gray-300 px-4 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <NavLink to="/admin">
          <button className="bg-blue-500 text-white px-14 py-4 ml-2 rounded-lg hover:bg-blue-600">
            Admin
          </button>
          </NavLink>
        </form>

        <div className="flex gap-5">
          {/* <div class="w-64 border border-black-300 cursor-pointer mb-5 rounded-lg p-4 flex items-center justify-center space-x-4">
            <span class=" text-xl font-bold">All</span>
          </div> */}
          <div
            className={`w-64 border border-black-300 cursor-pointer mb-5 rounded-lg p-4 flex items-center justify-center space-x-4 ${
              selectedCategory === null ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick1("All")}
          >
            <span className="text-xl font-bold">All</span>
          </div>
          {categories?.map((v, i) => {
            return (
              <>
                <div
                  className={`w-64 border border-black-300 cursor-pointer mb-5 rounded-lg p-4 flex items-center justify-center space-x-4 ${
                    selectedCategory === v ? "bg-blue-200" : ""
                  }`}
                  onClick={() => handleClick1(v)}
                  // class="w-64 border border-black-300 cursor-pointer mb-5 rounded-lg p-4 flex items-center justify-center space-x-4"
                >
                  <span class=" text-xl font-bold">{v}</span>
                </div>
              </>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFoods.length > 0 ? (
            filteredFoods
              .filter(
                (v) =>
                  selectedCategory === null ||
                  v.category === selectedCategory
              )
              .map((v, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={v?.image}
                    alt="Card Image"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 text-center">
                    <h2
                      className="text-xl h-24 font-bold mb-2 cursor-pointer"
                      onClick={() => handleClick(v)}
                    >
                      {v?.title}
                    </h2>
                    <p className="text-gray-600">
                      ${Math.floor(v?.price)}
                    </p>
                    <button
                      variant="primary"
                      className="mx-auto flex bg-blue-300 text-white rounded-xl px-5 py-3 mt-3 hover:bg-blue-400"
                      onClick={() => handleAddToCart(v)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <div className="flex justify-center items-center h-20">
              <p className="text-gray-500 text-xl">Product not found.</p>
            </div>
          )}
        </div>

        {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foods
            ?.filter(
              (v) =>
                selectedCategory === null ||
                v.category === selectedCategory
            )
            .map((v, i) => {
              return (
                <>
                  <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                      src={v?.image}
                      alt="Card Image"
                      class="w-full h-48 object-contain"
                    />
                    <div class="p-4  text-center">
                      <h2
                        class="text-xl h-24 font-bold mb-2 cursor-pointer"
                        onClick={() => handleClick(v)}
                      >
                        {v?.title}
                      </h2>
                      <p class="text-gray-600">
                        ${Math.floor(v?.price)}
                      </p>
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
        </div> */}
      </div>
    </>
  );
};

export default Foods1;
