import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import { navbar } from "./utils/navbar";

//! Switch => Routes
//! Route.component => Route.element
//! Redirect => Navigate

export const RouterDom6 = () => {
  let token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map((item) => {
            return (
              !item.isPrivate && (
                <Route key={item.id} path={item.path} element={item.element} />
              )
            );
          })}
          {navbar.map((item) => {
            return (
              item.isPrivate && (
                <Route
                  key={item.id}
                  path={item.path}
                  element={token ? item.element : <Navigate to="/login" />}
                />
              )
            );
          })}
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" exact element={<Navbar />} />
        <Route path="/home" element={<Navbar />} />
        <Route path="/about" element={<Navbar />} />
        <Route path="/gallery" element={<Navbar />} />
        <Route path="/contact" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default RouterDom6;
