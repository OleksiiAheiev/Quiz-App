import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import fetchQuizes from '../../../helper/constants';

const fetchQuizzes = createAsyncThunk(`${moduleName}/fetchQuizzes`, async (name) => {
  const { data } = await fetchQuizes[name]();
  return data;
});

export default { fetchQuizzes };
