import React, { useState } from "react";
import "./AddTransaction.css";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  

  return (
    <form className="formcontrol">
      <div className="items">
        <label htmlFor="">Items</label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter text..."
        ></input>
      </div>
      <hr></hr>
      <div className="items">
        <label htmlFor="">Amount(negative-expense, positive-income</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter amount..."
        ></input>
      </div>

      <button>Add Transaction</button>
      <hr></hr>
    </form>
  );
};

export default AddTransaction;
