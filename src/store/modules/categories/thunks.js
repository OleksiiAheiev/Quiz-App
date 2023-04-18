import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { categories } from '../../../api/api';

const fetchCategories = createAsyncThunk(`${moduleName}/fetchCategories`, async () => {
  const { data } = await categories.fetch();
  return data;
});

const createCategory = createAsyncThunk(
  `${moduleName}/createCategory`,
  async (categoryData, { dispatch }) => {
    try {
      const response = await categories.create(categoryData);
      dispatch(fetchCategories());
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export default { fetchCategories, createCategory };
