import axiosCollections from 'axios';

export default axiosCollections.create({
  baseURL: 'https://641c99711a68dc9e460d94d0.mockapi.io',
  headers: { 'Content-Type': 'application/json' },
});
