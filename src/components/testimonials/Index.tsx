import Container from '../Container';
import ContactConsultationButtons from '../global/ContactConsultationButtons';
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

        <ContactConsultationButtons className="md:justify-center" />
      </Container>
    </section>
  );
}
export default Testimonials;
