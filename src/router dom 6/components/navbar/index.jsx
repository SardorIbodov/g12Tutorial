import React from "react";
import { Container, Item } from "./style";
import { useLocation, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";

export const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <Container>
        {navbar.map((item) => {
          return !item.hidden && (
            <Item isActive={location.pathname === item.path} to={item.path}>
              {item.title}
            </Item>
          );
        })}
        {/* <Item isActive={location.pathname === "/"} to="/" exact>
        Logo
				</Item>
				<Item isActive={location.pathname === "/home"} to="/home">Home</Item>
				<Item isActive={location.pathname === "/about"} to="/about">About</Item>
				<Item isActive={location.pathname === "/gallery"} to="/gallery">Gallery</Item>
      <Item isActive={location.pathname === "/contact"} to="/contact">Contact</Item> */}
      </Container>
      <Outlet />
    </div>
  );
};

export default Navbar;
