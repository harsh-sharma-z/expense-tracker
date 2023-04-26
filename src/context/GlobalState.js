import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from "../../context/AppReducer";

const initialTransactions = {
  transactions: [
    { id: 1, text: "Salary", amount: 400 },
    { id: 2, text: "Food", amount: -200 },
    { id: 3, text: "GirlFriend ke kharche", amount: -150 },
    { id: 4, text: "Vasooli", amount: 500 },
  ],
};

export const GlobalContext = createContext(initialTransactions);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialTransactions);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
