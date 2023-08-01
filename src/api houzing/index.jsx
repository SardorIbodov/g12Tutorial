import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const HouzingAPI = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const send = () => {
    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.authenticationToken);
      });
  };
  const houses = () => {
    fetch("http://localhost:8081/api/v1/houses/list")
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  };
  const deleteHouse = () => {
    fetch("http://localhost:8081/api/v1/houses/41", {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>HouzingAPI</h1>
      <input type="text" placeholder="login" ref={loginRef} />
      <input type="text" placeholder="password" ref={passwordRef} />
      <button onClick={send}>Send</button>
      <button onClick={houses}>Houses</button>
      <button onClick={deleteHouse}>Delete</button>
    </div>
  );
};

export default HouzingAPI;
