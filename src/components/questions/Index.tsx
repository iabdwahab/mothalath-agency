import Container from "../Container";
import SectionHeading from "../global/SectionHeading";
import Question from "./Question";

function Questions() {
  return (
    <section className="py-section pb-40">
      <Container className="flex flex-col gap-section">
        <SectionHeading>الأسئلة الأكثر شيوعًا</SectionHeading>
        <div className="grid gap-4">
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </Container>
    </section>
  );
}
export default Questions;
