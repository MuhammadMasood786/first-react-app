import React from 'react';
import Header from './Component/Header';
import Balance from './Component/Balance';
import IncomeExpense from './Component/IncomeExpense';
import Transaction from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction';
function App() {
 
  return (
    <div>
      <div className="container Center">
      <div className="row justify-content-start  ">
          <Header/> 
        </div>
        <div className="row justify-content-start ">
          <Balance/> 
        </div>
        <div className="row justify-content-start">
          <IncomeExpense/>
        </div>
        <div className="row justify-content-start  ">
          <Transaction/>
        </div>
        <div className="row justify-content-start  ">
          <AddTransaction/>
        </div>
      </div>
    </div>
  );
}


export default App;