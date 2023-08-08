// foodsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchFoodsdetail = createAsyncThunk('foods/fetchFoodDetails', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log('data', data)
    return data;
  });

const foodsSlice = createSlice({
  name: 'food',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodsdetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFoodsdetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFoodsdetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default foodsSlice.reducer;