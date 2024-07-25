import React from "react";
import classNames from "embla-carousel-class-names";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";

const CarouselComponent = () => {
  return (
    <Carousel options={{ loop: true }}>
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide} className="pl-0 md:h-[100vh] h-[43vh]">
            <img
              className="h-full"
              src={"https://picsum.photos/700/350?v=1"}
              alt="Carousel Item"
            />
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <div className="absolute top-1/2 -translate-y-1/2 -left-[27%]">
          <CarouselPrevButton className="" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-[27%]">
          <CarouselNextButton />
        </div>
        <CarouselIndicators className="absolute left-1/2 -translate-x-1/2 z-50 bottom-[5%]" />
      </CarouselControl>
    </Carousel>
  );
};

export default CarouselComponent;
