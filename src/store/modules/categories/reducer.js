import { createSlice } from '@reduxjs/toolkit';
import actions from './action';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  categories: [],
  filterCategories: [],
};

/* eslint-disable no-param-reassign */
export const categoriesSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterCategories, (state, { payload }) => {
      if (payload.search === '') {
        state.filterCategories = state.categories;
      } else {
        state.filterCategories = state.categories.filter((card) => (
          card.category_name.toLowerCase().indexOf(payload.search.toLowerCase()) >= 0
        ));
      }
    });
    builder.addCase(thunks.createCategory.fulfilled, (state, { payload }) => {
      state.categories.push(payload);
      state.filterCategories = state.categories;
    });
    builder.addCase(thunks.fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.filterCategories = payload;
    });
  },
});

export default categoriesSlice.reducer;
