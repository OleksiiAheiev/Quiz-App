// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { categoriesReducer } from './modules/categories';
import { quizReducer } from './modules/quizzes';

const rootReducer = combineReducers({
  categoriesReducer,
  quizReducer,
});

export const store = configureStore({ reducer: rootReducer });
