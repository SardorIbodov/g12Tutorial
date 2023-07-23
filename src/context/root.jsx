import React from "react";
import Wrapper from "./index";
import { StudentList } from "./context";

export const Context = () => {
  return (
    <StudentList>
      <Wrapper />;
    </StudentList>
  );
};
export default Context;
