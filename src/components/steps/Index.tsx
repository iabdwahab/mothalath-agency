import Container from "../Container";
import ContactConsultationButtons from "../global/ContactConsultationButtons";
import OurCustomers from "./OurCustomers";
import StepsContainer from "./StepsContainer";

function StepsSection() {
  return (
    <section className="pb-28 pt-section">
      <Container className="grid gap-8">
        <StepsContainer />
        <OurCustomers />
        <ContactConsultationButtons className="md:mx-auto" />
      </Container>
    </section>
  );
}
export default StepsSection;
