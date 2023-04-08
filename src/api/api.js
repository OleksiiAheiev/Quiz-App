import axios from './service';
import axiosCollections from './collections';

const categories = {
  fetch: () => axios.get('/categories').then((data) => data),
};

const html = {
  fetch: () => axios.get('/html').then((data) => data),
};

const css = {
  fetch: () => axiosCollections.get('/css').then((data) => data),
};

const js = {
  fetch: () => axiosCollections.get('/java-script').then((data) => data),
};

export {
  categories,
  html,
  css,
  js,
};
