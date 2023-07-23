import React from "react";
import { StudentList } from "./context";
import { StudentListSecond } from "./context_second";
import { StudentListThird } from "./context_third";

export const MainContext = ({children}) => {
  return (
    <StudentListThird>
      <StudentListSecond>
        <StudentList>
					{children}
				</StudentList>
      </StudentListSecond>
    </StudentListThird>
  );
};

export default MainContext;
