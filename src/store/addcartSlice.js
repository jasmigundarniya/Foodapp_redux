// const { createSlice } = require('@reduxjs/toolkit');
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const addcartSlice = createSlice({
  name: "addcart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = action.payload;
    //   state.cartItems.push(item);
    // },
    addToCart: (state, action) => {
      const item = action.payload;
      // If the item is already in the cart, increase its quantity
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrease = state.cartItems.find((item) => item.id === itemId);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrease = state.cartItems.find((item) => item.id === itemId);
      if (itemToDecrease) {
        itemToDecrease.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = addcartSlice.actions;
export default addcartSlice.reducer;
