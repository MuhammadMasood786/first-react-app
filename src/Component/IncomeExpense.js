import React from 'react';
import '../App.css';


const IncomeExpense = () => {
    return ( 
        <div className="row justify-content-center box">
            <div className="col-6 line">
                <h4 id="incomeExpense">INCOME</h4>
                <p id="money-plus">+$0.00</p>
            </div>
            <div className="col-6 ">
                <h4 id="incomeExpense">EXPENSE</h4>
                <p id="money-minus">-$0.00</p>
            </div>
        </div>
     );
}
 
export default IncomeExpense;