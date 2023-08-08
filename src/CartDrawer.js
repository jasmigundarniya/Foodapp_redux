import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { toggleCart } from "./store/cartSlice";
import img from "../src/assets/images/banner.jpg";
import { GrFormClose } from "react-icons/gr";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./store/addcartSlice";
import { NavLink } from "react-router-dom";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector((state) => state.addcart.cartItems);

  const handleCartClose = () => {
    dispatch(toggleCart());
  };

  const title = localStorage.getItem("title1");
  const price = localStorage.getItem("price1");
  const images = localStorage.getItem("images1");


  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <div
        className={`bg-white h-[100vh] w-[450px] fixed top-0 right-0 overflow-y-scroll text-3xl flex flex-col min-h-screen p-4 transition-transform transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoIosCloseCircle
          className="cursor-pointer mb-5"
          onClick={handleCartClose}
        />

        {/* {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt="Card Image"
              className="h-[112px] w-[85px] object-contain"
            />
            <div className="p-1 mx-5">
              <h2 className="text-sm font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-xl mb-3">
                ${item.price}
              </p>
            </div>
          </div>
        ))} */}

<div className=" overflow-y-scroll">
         {cartItems.map((item) => {
          const totalItemPrice = item.price * item.quantity;
          return (
          
         <div class="flex bg-white shadow-md rounded-lg my-4 overflow-hidden"  key={item.id}>
           {totalItemPrice > 0 && (
            <>
          <img
             src={item.image}
            alt="Card Image"
            class="h-[112px] w-[85px]"
          />
          <div class="p-1 mx-5">
            <h2 class="text-sm font-bold mb-2 w-60">{item.title}</h2>
            <p class="text-gray-600 text-xl mb-3">Total: ${Math.floor(totalItemPrice)}</p>
            {/* <p class="text-gray-600 text-xl mb-3">${item.price}</p> */}

            <div class="">
              <button class="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 text-lg rounded">
                <span class="mr-2"  onClick={() => handleDecreaseQuantity(item.id)} >-</span>
                {item.quantity}
                <span class="ml-2" onClick={() => handleIncreaseQuantity(item.id)}>+</span>
              </button>
            </div>
          </div>
          <GrFormClose className="cursor-pointer"  onClick={() => handleRemoveFromCart(item.id)} />
          </>
           )}
             </div>
        )})}
</div>

<div class="p-4 bg-gray-100  mt-auto">
  <div class="flex items-center justify-between mb-4">
    <span class="text-xl font-bold">Subtotal: ${Math.floor(totalPrice)}</span>
    <NavLink to='/carts'>
    <button class="px-4 py-2 text-white bg-blue-300 rounded hover:bg-blue-400">Checkout</button>
    </NavLink>
  </div>
</div>

      </div>
    </>
  );
};

export default CartDrawer;
