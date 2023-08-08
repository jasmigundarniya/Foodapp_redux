// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import addcartReducer from './addcartSlice';
import foodsReducer from './foodsSlice';
import foodsdetailReducer from './fooddetailSlice';
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    addcart: addcartReducer,
    foods: foodsReducer,
    foodsdetail: foodsdetailReducer,
    category: categoryReducer,
  },
});

export default store;

