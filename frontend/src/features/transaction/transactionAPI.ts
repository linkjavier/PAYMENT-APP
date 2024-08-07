// transactionAPI.ts
import axios from 'axios';

export const createTransaction = async (transaction: { cardNumber: string, deliveryAddress: string }) => {
  const response = await axios.post('/api/transactions', transaction);
  return response.data;
};

export const completeTransaction = async (transactionId: string) => {
  const response = await axios.put(`/api/transactions/${transactionId}`);
  return response.data;
};
