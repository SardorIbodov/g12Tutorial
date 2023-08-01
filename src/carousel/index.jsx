import React, { useRef } from "react";
import {
  CarouselContainer,
  ButtonContainer,
  Button,
  Images,
  CarouselContent,
  Image,
} from "./style";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Image6 from "./images/6.jpg";

export const Carousel = () => {
  const ImagesRef = useRef();
  const ImageRef = useRef();
  const next = () => {
    const distance = ImageRef.current.width;
    ImagesRef.current.scrollBy({
      top: 0,
      left: distance,
      behavior: "smooth",
    });
  };
	const prev = () => {
    const distance = ImageRef.current.width;
    ImagesRef.current.scrollBy({
      top: 0,
      left: -distance,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Carousel</h1>
      <CarouselContainer>
        <CarouselContent>
          <Images ref={ImagesRef}>
            <Image ref={ImageRef} src={Image1} alt="" />
            <Image src={Image2} alt="" />
            <Image src={Image3} alt="" />
            <Image src={Image4} alt="" />
            <Image src={Image5} alt="" />
            <Image src={Image6} alt="" />
          </Images>
        </CarouselContent>
        <ButtonContainer>
          <Button onClick={prev}>Prev</Button>
          <Button onClick={next}>Next</Button>
        </ButtonContainer>
      </CarouselContainer>
    </div>
  );
};

export default Carousel;
