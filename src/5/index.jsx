import React from "react";
import { Title, Image, Container, NewImage, bgRed } from "./style";

class Lesson5 extends React.Component {
  render() {
    return (
      <div>
        <h1>Styled Components</h1>
        <Title large>Styled Components</Title>
        <Title>Styled Components</Title>
        <Image src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Container size="large"></Container>
        <Container size="medium"></Container>
        <Container size="small"></Container>
        <Image src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <NewImage src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </div>
    );
  }
}

export default Lesson5;
