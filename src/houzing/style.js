import { styled } from "styled-components";

const Wrapper = styled.section`
  max-width: 1180px;
  width: 100%;
  margin: auto;
  border: 1px solid red;
  padding: 10px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  align-items: center;
  position: relative;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 12px 16px;
  border-radius: 2px;
  border: 1px solid var(--border, #e6e9ec);
`;

const Input = styled.input`
  color: #0d263b;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  width: 100%;
  outline: none;
  border: none;
`;

const Label = styled.label``;

const Button = styled.button`
  width: ${(props) => (props.large ? "180px" : "130px")};
  height: 44px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  border: 1px solid ${(props) => (props.large ? "#0061DF" : "#E6E9EC")};
  background: ${(props) => (props.large ? "#0061DF" : "transparent")};
  color: ${(props) => (props.large ? "#fff" : "#0D263B")};
  cursor: pointer;
`;

const FilterContainer = styled.div`
  opacity: ${(props) => props.display ? 1 : 0};
  transition: 0.5s all linear;
  position: absolute;
  top: 64px;
  right: 0;
  width: 100%;
  height: 500px;
  background: red;
`;

export {
  Wrapper,
  Container,
  InputContainer,
  Input,
  Button,
  Label,
  FilterContainer,
};
