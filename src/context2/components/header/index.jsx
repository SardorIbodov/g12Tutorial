import React from "react";
import { HeaderContainer, HeaderItem } from "./style";
import { UseStudentContext } from "../../context/context";
import { UseStudentContextSecond } from "../../context/context_second";
import { UseStudentContextThird } from "../../context/context_third";

export const Header = () => {
  const [students, dispatch] = UseStudentContext();
  const [students2, dispatch2] = UseStudentContextSecond();
  const [students3, dispatch3] = UseStudentContextThird();
  console.log(students2);
  console.log(students3);
  return (
    <HeaderContainer>
      <HeaderItem>
        Home <span>{students.length}</span>
      </HeaderItem>
      <HeaderItem>About</HeaderItem>
      <HeaderItem>Gallery</HeaderItem>
      <HeaderItem>Contact</HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
