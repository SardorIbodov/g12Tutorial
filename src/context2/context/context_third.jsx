import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const StudentContextThird = createContext();

export const UseStudentContextThird = () => useContext(StudentContextThird);

export const StudentListThird = ({ children }) => {
  const [students, dispatch] = useReducer(reducer, [
    { id: 1, fullName: "Rasulov Jamshidbek", age: 21 },
  ]);
  return (
    <StudentContextThird.Provider value={[students, dispatch]}>
      {children}
    </StudentContextThird.Provider>
  );
};