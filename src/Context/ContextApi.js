import React, { createContext , useReducer} from 'react';
import AppReducer from './AppReducer'

const transaction = [
        {
            'id':0,
            'text':'Gas Bill',
            'amount':-200
        },
        {
            'id':1,
            'text':'Electricity Bill',
            'amount':-500
        },
        {
            'id':0,
            'text':'Salary',
            'amount':15000
        }
    ]
  ];

//Create Context 
export const ContextApi = createContext(initialState);

// Create Provider Function
export const ContextProvider = ({ children }) => {
    // Create useReducer
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }
  
    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      });
    }
  
    return (<ContextApi.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </ContextApi.Provider>);
  }

