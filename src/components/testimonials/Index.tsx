import Container from '../Container';
import SectionButtonLink from '../global/SectionButtonLink';
import SectionHeading from '../global/SectionHeading';
import TestimonialsCard from './TestimonialsCard';

function Testimonials() {
  return (
    <section className="bg- py-section">
      <Container className="flex flex-col gap-section">
        <SectionHeading>آراء عملائنا</SectionHeading>

        <div className="grid-cards-cols gap-4">
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>

        <div className="grid  md:grid-cols-[repeat(2,minmax(0,200px))] md:justify-center gap-4">
          <SectionButtonLink className="light-button">تواصل معنا</SectionButtonLink>
          <SectionButtonLink className="dark-button">استشارة مجانية</SectionButtonLink>
        </div>
      </Container>
    </section>
  );
}
export default Testimonials;
