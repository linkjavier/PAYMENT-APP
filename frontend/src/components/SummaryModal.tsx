import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { completeTransaction } from '../features/transaction/transactionAPI';

const SummaryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch();
  const transaction = useSelector((state: RootState) => state.transaction.currentTransaction);

  const handleComplete = async () => {
    if (transaction) {
      dispatch(await completeTransaction(transaction.id));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-semibold">Transaction Summary</h2>
        <p>Product: {transaction?.productName}</p>
        <p>Amount: ${transaction?.amount}</p>
        <p>Delivery Address: {transaction?.deliveryAddress}</p>
        <button
          onClick={handleComplete}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Complete Payment
        </button>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;
