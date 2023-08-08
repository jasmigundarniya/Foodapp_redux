// foodsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchFoods = createAsyncThunk(
  "foods/fetchFoods",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);
// export const fetchSpecificCategory = createAsyncThunk(
//   "foods/fetchSpecificCategory",
//   async (category) => {
//     const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//     const data = await response.json();
//     return data;
//   }
// );

const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    foods: [],
    selectedCategory: "All",
    filteredFoods: [],
  },
  reducers: {
    setFoods: (state, action) => {
      state.foods = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilteredFoods: (state, action) => {
      state.filteredFoods = action.payload;
    },
    setSearchQuery: (state, action) => {
      const searchQuery = action.payload;
      if (!searchQuery) {
        state.filteredFoods = state.foods;
      } else {
        state.filteredFoods = state.foods.filter((food) =>
          food.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.foods = action.payload;
        state.filteredFoods = action.payload;
      })
      .addCase(fetchFoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      // .addCase(fetchSpecificCategory.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(fetchSpecificCategory.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.items = action.payload;
      // })
      // .addCase(fetchSpecificCategory.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // });
  },
});

export const {
  setFoods,
  setSelectedCategory,
  setFilteredFoods,
  setSearchQuery,
} = foodsSlice.actions;
export default foodsSlice.reducer;
