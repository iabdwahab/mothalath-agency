import Container from "../Container";
import ContactConsultationButtons from "../global/ContactConsultationButtons";
import OurClients from "./OurClients";
import StepsContainer from "./StepsContainer";

function StepsSection() {
  return (
    <section className="pb-28 pt-section">
      <Container className="grid gap-8">
        <StepsContainer />
        <div className="py-6">
          <OurClients />
        </div>
        <ContactConsultationButtons className="md:mx-auto" />
      </Container>
    </section>
  );
}
export default StepsSection;
