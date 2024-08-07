// productAPI.ts
import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
};