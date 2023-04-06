import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterCategories = createAction(`${moduleName}/filterCategories`, (payload) => ({ payload }));

export default {
  filterCategories,
};
