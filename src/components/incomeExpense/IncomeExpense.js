import React from "react";
import "./IncomeExpense.css"; 
const IncomeExpense = () => {
  return (
    <div className="income-expense">
      <div>
        <h3>Income</h3>
        <h4>$ 0.00</h4>
      </div>
      <div>
        <h3>Expense</h3>
        <h4>$ 0.00</h4>
      </div>
    </div>
  );
};

export default IncomeExpense;
