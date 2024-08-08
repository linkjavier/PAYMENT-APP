// productAPI.ts
import axios from 'axios';

// Configuración de Axios con base URL
const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Cambia esto a la URL de tu backend si es necesario
  timeout: 10000, // Tiempo máximo de espera en milisegundos
});

// Función para obtener productos
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Puedes manejar el error aquí o lanzarlo para ser gestionado en el componente
  }
};