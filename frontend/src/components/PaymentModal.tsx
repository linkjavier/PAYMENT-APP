import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTransaction } from '../features/transaction/transactionAPI';
import SummaryModal from './SummaryModal';

const PaymentModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    // Validate card number and delivery address
    if (cardNumber && deliveryAddress) {
      dispatch(await createTransaction({ cardNumber, deliveryAddress }));
      setShowSummary(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-semibold">Payment Information</h2>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </label>
        <label className="mt-2">
          Delivery Address:
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </label>
        <button
          onClick={handlePayment}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Proceed to Summary
        </button>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Cancel
        </button>
        {showSummary && <SummaryModal onClose={() => setShowSummary(false)} />}
      </div>
    </div>
  );
};

export default PaymentModal;
