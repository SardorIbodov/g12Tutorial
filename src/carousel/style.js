import { styled } from "styled-components";

const CarouselContainer = styled.div`
  width: 800px;
  height: 500px;
  margin: 100px auto;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

const CarouselContent = styled.div`
  height: 450px;
`;

const Images = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: 1s all ease;
  overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	} 	
`;

const Image = styled.img`
  flex-shrink: 0;
  height: 100%;
  width: 800px;
  flex-grow: 1;
  flex-basis: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 25px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
`;

export {
  CarouselContainer,
  ButtonContainer,
  Button,
  CarouselContent,
  Images,
  Image,
};
