import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const loginRef = useRef();
  const passwordRef = useRef();
  const login = () => {
    if (
      loginRef.current.value === "webbrain" &&
      passwordRef.current.value === "12345"
    ) {
      localStorage.setItem("token", "accepted");
      navigate("/gallery");
      window.location.reload();
    }
    loginRef.current.value = "";
    passwordRef.current.value = "";
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/home");
    window.location.reload();
  };
  return (
    <div>
      <input
        defaultValue={loginRef.current?.value}
        type="text"
        placeholder="login"
        ref={loginRef}
      />
      <input
        defaultValue={passwordRef.current?.value}
        type="text"
        placeholder="password"
        ref={passwordRef}
      />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={logout}>Log out</button>
    </div>
  );
};
