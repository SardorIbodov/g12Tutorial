import { styled, css, keyframes } from "styled-components";

const scaleAnimation = keyframes`
	0%{
		transform: scale(1);
	} 50% {
		transform: scale(0.5);
	} 100% {
		transform: scale(1);
	}
`;

const bgRed = css`
  background: red;
`;

const center = css`
  margin: 0 auto;
`;

const Title = styled.h1`
  /* ${(props) => console.log(props.large, "props")} */
  font-size: ${(props) => (props.large ? "32px" : "24px")};
  color: red;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  animation: ${scaleAnimation} 1s infinite;
`;

const NewImage = styled(Image)`
  border-radius: 50%;
  width: 100px;
`;

const getSize = (size) => {
  switch (size) {
    case "large":
      return "500px";
    case "medium":
      return "300px";
    case "small":
      return "100px";
    default:
      return "300px";
  }
};

const Container = styled.div`
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  border: 1px solid red;
  ${center}
`;

export { Title, Image, Container, NewImage, bgRed };
