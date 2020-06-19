 import React, { useContext } from 'react';
import { Transaction } from './Transaction.js';
import { ContextApi } from '../Context/ContextApi';

 const TransactionList = () => {
  const { transactions } = useContext(ContextApi);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}

export default TransactionList;