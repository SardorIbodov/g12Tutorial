import { styled } from "styled-components";
import Img from "./download.jpg";

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${Img});
  background-position: center;
  background-size: cover;
  &:hover {
    transform: scale(0.5);
  }
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 150px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${(p) => !p.flex && "column"};
`;

const Btn = styled.button`
  width: 100px;
  height: 35px;
  transition: 0.25s all linear;
  &:hover {
    transform: scale(0.5);
  }
`;

export { Image, Box, Btn, Container };
