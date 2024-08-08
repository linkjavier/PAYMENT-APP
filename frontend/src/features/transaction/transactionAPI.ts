import axios from 'axios';

// Configuración de Axios con base URL
const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // Tiempo máximo de espera en milisegundos
});

// Crear una transacción
export const createTransaction = async (transaction: { cardNumber: string; deliveryAddress: string }) => {
  try {
    const response = await apiClient.post('/transactions', transaction);
    return response.data;
  } catch (error) {
    // Manejo de errores
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};

// Completar una transacción
export const completeTransaction = async (transactionId: string) => {
  try {
    const response = await apiClient.put(`/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    // Manejo de errores
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};
