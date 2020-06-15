import React from 'react';


const Transaction = () => {
    return ( 
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
                <li className="plus">
                    Salary <span>+$1000</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
     );
}
 
export default Transaction;