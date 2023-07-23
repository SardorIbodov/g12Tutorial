import React, { createContext, useState } from "react";


export const StudentContext = createContext();

export const StudentList = ({children}) => {
	const [students, setStudents] = useState([
    { id: 1, fullName: "Rasulov Jamshidbek", age: 21 },
    { id: 2, fullName: "Akbar Ochilov", age: 30 },
    { id: 3, fullName: "MuhammadYahyo Latifov", age: 22 },
    { id: 4, fullName: "Turgunaliev Abdulahad", age: 18 },
    { id: 5, fullName: "Bahriddinov Zuhriddin", age: 24 },
    { id: 6, fullName: "Xabibullayev Dilmurod", age: 20 },
  ]);
  return <StudentContext.Provider value={[students, setStudents]}>
		{children}
	</StudentContext.Provider>
};
