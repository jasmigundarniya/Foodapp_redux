import React from "react";
import { FaLuggageCart } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "./store/cartSlice";

const Navbar = () => {

  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  const Items = useSelector((state) => state.addcart.cartItems);

  return (
    <>
      <nav class="bg-gray-800 p-4 fixed w-full py-5">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <div class="text-white font-semibold text-xl">
              My Website
            </div>

            <ul class="flex space-x-4">
              <li>
                <a href="#" class="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/carts" class="text-white hover:text-gray-300">
                  Carts
                </a>
              </li>
              <li>
                <a href="#" class="text-white hover:text-gray-300">
                  Services
                </a>
              </li>

              <div className="text-white hover:text-gray-300" onClick={handleCartClick}>
                <span className="relative inline-block">
                  <FaLuggageCart className="h-6 w-6" />
                  <span className="absolute -top-4 -right-3">
                    <span className="bg-red-500 text-white text-xs rounded-full px-1">
                      { Items.length }
                    </span>
                  </span>
                </span>
              </div>
            </ul>

          </div>
        </div>
      </nav>
   
    </>
  );
};

export default Navbar;
