import Container from "../Container";
import IllustrationsSide from "./IllustrationsSide";
import TextSide from "./TextSide";

function MarketingSolutions() {
  return (
    <section className="py-section">
      <Container className="grid flex-col gap-16">
        <TextSide />
        <IllustrationsSide />
      </Container>
    </section>
  );
}
export default MarketingSolutions;
