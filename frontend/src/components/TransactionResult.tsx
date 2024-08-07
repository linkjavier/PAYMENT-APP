import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const TransactionResult: React.FC = () => {
  const transaction = useSelector((state: RootState) => state.transaction.transactionResult);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Transaction Result</h1>
      {transaction ? (
        <div>
          <p>Transaction ID: {transaction.id}</p>
          <p>Status: {transaction.status}</p>
          <p>Amount: ${transaction.amount}</p>
        </div>
      ) : (
        <p>No transaction result available.</p>
      )}
    </div>
  );
};

export default TransactionResult;
