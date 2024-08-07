import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Transaction {
  id: string;
  productName: string;
  amount: number;
  deliveryAddress: string;
  status: string;
}

interface TransactionState {
  currentTransaction: Transaction | null;
  transactionResult: Transaction | null;
}

const initialState: TransactionState = {
  currentTransaction: null,
  transactionResult: null,
};

export const createTransaction = createAsyncThunk('transaction/createTransaction', async (transaction: { cardNumber: string, deliveryAddress: string }) => {
  const response = await axios.post('/api/transactions', transaction);
  return response.data;
});

export const completeTransaction = createAsyncThunk('transaction/completeTransaction', async (transactionId: string) => {
  const response = await axios.put(`/api/transactions/${transactionId}`);
  return response.data;
});

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.currentTransaction = action.payload;
      })
      .addCase(completeTransaction.fulfilled, (state, action) => {
        state.transactionResult = action.payload;
      });
  },
});

export default transactionSlice.reducer;
