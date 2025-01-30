import Container from "../Container";
import ContactConsultationButtons from "../global/ContactConsultationButtons";
import OurClients from "./OurClients";
import StepsContainer from "./StepsContainer";

function StepsSection() {
  return (
    <section className="py-section">
      <Container className="grid gap-8">
        <StepsContainer />
        <OurClients />
        <ContactConsultationButtons className="md:mx-auto" />
      </Container>
    </section>
  );
}
export default StepsSection;
