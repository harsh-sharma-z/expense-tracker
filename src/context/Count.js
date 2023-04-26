import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function useState(initialState) {
  return useReducer(reducer, initialState);
}   
const Count = () => {

    const[count,setCount]=useState(0);
    const[state,dispatch]= useReducer(reducer,{count:0});
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return <div>

    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>;
};

export default Count;
