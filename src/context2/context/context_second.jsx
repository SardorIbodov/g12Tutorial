import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const StudentContextSecond = createContext();

export const UseStudentContextSecond = () => useContext(StudentContextSecond);

export const StudentListSecond = ({ children }) => {
  const [students, dispatch] = useReducer(reducer, [
    { id: 1, fullName: "Rasulov Jamshidbek", age: 21 },
    { id: 1, fullName: "Rasulov Jamshidbek", age: 21 },
  ]);
  return (
    <StudentContextSecond.Provider value={[students, dispatch]}>
      {children}
    </StudentContextSecond.Provider>
  );
};
