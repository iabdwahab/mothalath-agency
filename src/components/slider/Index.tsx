import { useState } from "react";
import Container from "../Container";
import ImageSide from "./ImageSide";
import TextSide from "./TextSide";
import { sliderData } from "./data";
import { SliderContext } from "./context";

function SliderSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <SliderContext.Provider
      value={{
        slidesLength: sliderData.length,
        currentSlideIndex,
        setCurrentSlideIndex,
        slide: sliderData[currentSlideIndex],
      }}
    >
      <section className="p bg-lines bg-contain bg-no-repeat py-section max-lg:bg-no-repeat lg:bg-center">
        <Container className="grid gap-12 lg:grid-cols-2">
          <TextSide />
          <div className="w-full max-lg:-order-1">
            <ImageSide />
          </div>
        </Container>
      </section>
    </SliderContext.Provider>
  );
}

export default SliderSection;
