import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { categories } from '../../../api/api';

const fetchCategories = createAsyncThunk(`${moduleName}/fetchCategories`, async () => {
  const { data } = await categories.fetch();
  return data;
});

export default { fetchCategories };
