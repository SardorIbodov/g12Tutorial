import React, { useContext } from "react";
import { StudentContext } from "../../context";

export const Body = () => {
  const [students, setStudents] = useContext(StudentContext);
  const onDelete = (id) => {
    let res = students.filter((s) => s.id !== id);
    setStudents(res);
  };
  return (
    <div>
      <h2>O'quvchilar soni: {students.length}</h2>
      {students.map((s) => {
        return (
          <h2 key={s.id}>
            {s.id}.{s.fullName}-{s.age}
            <button onClick={() => onDelete(s.id)}>Delete</button>
          </h2>
        );
      })}
    </div>
  );
};

export default Body;
