import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchProducts } from '../features/product/productSlice'; // Asegúrate de que el import sea correcto
import PaymentModal from './PaymentModal';

const ProductPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the async thunk action
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4 p-4 border border-gray-200 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Pay with credit card
            </button>
          </li>
        ))}
      </ul>
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ProductPage;

