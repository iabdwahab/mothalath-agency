import Container from '../Container';

import ImageSide from './ImageSide';
import TextSide from './TextSide';

function SliderSection() {
  return (
    <section className="py-section bg-lines bg-no-repeat bg-contain">
      <Container className="grid lg:grid-cols-2 gap-12">
        <TextSide />
        <div className="w-full max-lg:-order-1">
          <ImageSide />
        </div>
      </Container>
    </section>
  );
}

export default SliderSection;
