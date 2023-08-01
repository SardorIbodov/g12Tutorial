import React from "react";
import { Container, Item } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <Item
        activeStyle={{ color: "red", textDecoration: "underline" }}
        to="/"
        exact
      >
        Logo
      </Item>
      <Item
        activeStyle={{ color: "red", textDecoration: "underline" }}
        to="/home"
      >
        Home
      </Item>
      <Item
        activeStyle={{ color: "red", textDecoration: "underline" }}
        to="/about"
      >
        About
      </Item>
      <Item
        activeStyle={{ color: "red", textDecoration: "underline" }}
        to="/gallery"
      >
        Gallery
      </Item>
      <Item
        activeStyle={{ color: "red", textDecoration: "underline" }}
        to="/contact"
      >
        Contact
      </Item>
    </Container>
  );
};

export default Navbar;
