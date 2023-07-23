import { styled } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background: #333;
  color: white;
`;

const Notification = styled.span`
  position: absolute;
  top: -5px;
  right: -25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderItem = styled.h2`
  position: relative;
  font-size: 20px;
`;

export { HeaderContainer, HeaderItem, Notification };
