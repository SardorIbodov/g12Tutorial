import React, { useReducer } from "react";
import reducer from "./reducer";

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>UseReducer</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: "plus"})}>Plus</button>
      <button onClick={() => dispatch({type: "minus"})}>Minus</button>
      <button onClick={() => dispatch({type: "byAmount", payload: 5})}>Add 5</button>
      <button onClick={() => dispatch({type: "byAmount", payload: 50})}>Add 50</button>
    </div>
  );
};

export default UseReducer;
