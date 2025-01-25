import { useState } from 'react';
import Container from '../Container';
import ImageSide from './ImageSide';
import TextSide from './TextSide';
import { sliderData } from './data';
import { SliderContext } from './context';

function SliderSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <SliderContext.Provider
      value={{
        currentSlideIndex,
        setCurrentSlideIndex,
        slide: sliderData[currentSlideIndex],
      }}
    >
      <section className="py-section bg-lines bg-contain max-lg:bg-no-repeat">
        <Container className="grid lg:grid-cols-2 gap-12">
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
