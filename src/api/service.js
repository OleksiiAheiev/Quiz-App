import axios from 'axios';

export default axios.create({
  baseURL: 'https://640d969b1a18a5db837a3296.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
