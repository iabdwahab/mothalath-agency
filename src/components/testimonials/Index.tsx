import { useContext } from "react";
import translations from "../../tanslations/translations";
import Container from "../Container";
import ContactConsultationButtons from "../global/ContactConsultationButtons";
import SectionHeading from "../global/SectionHeading";
import TestimonialsCard from "./TestimonialsCard";
import useTestimonialsData from "./useTestimonialsData";
import { WebsiteLangContext } from "../../App";

function Testimonials() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { testimonials, isLoading } = useTestimonialsData();

  console.log(testimonials);

  const testimonialsElements = testimonials.map((testimonial, index: number) => {
    const { acf } = testimonial;

    return <TestimonialsCard key={index} testimonial={acf} />;
  });

  return (
    <section className="bg- py-section">
      <Container className="flex flex-col gap-section">
        <SectionHeading className="capitalize">
          {translations.our_customers_opinions[websiteLang]}
        </SectionHeading>

        <div className="grid-cards-cols gap-4">{testimonialsElements}</div>

        <ContactConsultationButtons className="md:justify-center" />
      </Container>
    </section>
  );
}
export default Testimonials;
