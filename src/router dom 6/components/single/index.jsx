import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
  const params = useParams();
  const id = params.id.slice(5, params.id.length);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(Object.entries(data));
  return (
    <div>
      {Object.entries(data).map((info) => {
        return (
          <div>
            <h2>
              {typeof info[0] !== "object" &&
                typeof info[1] !== "object" &&
                `${info[0]} - ${info[1]}`}
            </h2>
          </div>
        );
        console.log(info);
      })}
    </div>
  );
};
