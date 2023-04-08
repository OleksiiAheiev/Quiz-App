import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  cards: [],
};

/* eslint-disable no-param-reassign */
export const quizSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuizzes.fulfilled, (state, { payload }) => {
      state.cards = payload;
    });
  },
});

export default quizSlice.reducer;
