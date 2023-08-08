// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
  },
  reducers: {
    // addToCart: (state) => {
    //   state.itemCount += 1;
    // },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleCart} = cartSlice.actions;
export default cartSlice.reducer;
