import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.header`
  height: 60px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Item = styled(NavLink)`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
`;

export { Container, Item };
