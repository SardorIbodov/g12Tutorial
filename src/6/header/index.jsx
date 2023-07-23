import React from "react";
import { HeaderContainer, HeaderItem, Notification } from "./style";

class Header extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <HeaderContainer>
        <HeaderItem>
          Home <Notification>{data?.length}</Notification>
        </HeaderItem>
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Gallery</HeaderItem>
        <HeaderItem>Contact</HeaderItem>
      </HeaderContainer>
    );
  }
}

export default Header;
