
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;