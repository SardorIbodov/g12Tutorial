import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {data.map((user) => {
        return (
          <div key={user.id} style={{ display: "flex" }}>
            <h3>
              {user.id}.{user.name}
            </h3>
            <button onClick={() => navigate(`/home:${user.id}`)}>
              See more
            </button>
          </div>
        );
      })}
    </div>
  );
};
