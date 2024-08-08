import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Configuración de Axios con base URL
const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Cambia esto a la URL de tu backend si es necesario
  timeout: 10000,
});

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

// Thunk para obtener productos
export const fetchProducts = createAsyncThunk<Product[]>(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('/products');
      console.log(response)
      return response.data;
    } catch (error) {
      // Verifica si el error tiene una propiedad message
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      // Si no es un error de Axios, usa un mensaje genérico
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
