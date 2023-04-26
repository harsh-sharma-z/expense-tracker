import React from 'react'
import "./TransactionList.css";
export const TransactionList = () => {
  return (
    <div>
        <h3>
            History
        </h3>
        <hr></hr>
        <ul>
            <li>
                Payment
                <span>
                    <button>X</button>
                </span>
            </li>
        </ul>

        <hr></hr>
    </div>
  )
}


export default TransactionList;
