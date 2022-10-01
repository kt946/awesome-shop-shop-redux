// import createSlice API from Redux Toolkit to create Redux State Slice
import { createSlice } from '@reduxjs/toolkit';

// slice requires name, initial state, and reducers
export const categorySlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {
    // update categores
    UPDATE_CATEGORIES: (state, action) => {
      return {
        ...state,
        categories: [...action.categories]
      };
    },
    // update current category
    UPDATE_CURRENT_CATEGORY: (state, action) => {
      return {
        ...state,
        currentCategory: action.currentCategory
      };
    }
  }
});

export const { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } = categorySlice.actions;

export default categorySlice.reducer;