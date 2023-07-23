import React, { useContext } from "react";
import { HeaderContainer, HeaderItem } from "./style";
import { StudentContext } from "../../context";

export const Header = () => {
  const [students, setStudents] = useContext(StudentContext);
  return (
    <HeaderContainer>
      <HeaderItem>Home <span>{students.length}</span></HeaderItem>
      <HeaderItem>About</HeaderItem>
      <HeaderItem>Gallery</HeaderItem>
      <HeaderItem>Contact</HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
