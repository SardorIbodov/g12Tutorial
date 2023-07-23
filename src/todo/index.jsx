import React, { useReducer, useState } from "react";
import reducer from "./reducer";

export const Todo = () => {
  const [inpValue, setInpValue] = useState("");
  const [state, dispatch] = useReducer(reducer, []);
  const generateTask = (name) => {
    return { id: Date.now(), name: name, checked: false };
  };
  console.log(state);
  return (
    <div>
      <h1>Todo</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", newTask: generateTask(inpValue) });
          setInpValue("");
        }}
      >
        <input
          type="text"
          value={inpValue}
          onChange={({ target: { value } }) => setInpValue(value)}
        />
      </form>
      {state.map((t) => {
        return (
          <div key={t.id} style={{ display: "flex", columnGap: "10px", backgroundColor: t.checked ? "lightgreen" : "#ffcccb" }}>
            <span style={{textDecoration: t.checked && "line-through"}}>{t.name}</span>
            <button onClick={() => dispatch({ type: "check", id: t.id })}>
              {t.checked ? "Uncheck" : "Check"}
            </button>{" "}
            <button onClick={() => dispatch({type: "delete", id: t.id})}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
