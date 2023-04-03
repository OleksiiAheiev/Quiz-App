import axios from './service';
import axiosCollections from './collections';

const quizes = {
  fetchCategories: () => axios.get('/categories').then((data) => data),
  fetchHtml: () => axios.get('/html').then((data) => data),
  fetchCss: () => axiosCollections.get('/css').then((data) => data),
  fetchJs: () => axiosCollections.get('/java-script').then((data) => data),
};

export { quizes };
