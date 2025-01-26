import Container from "../Container";
import SectionButtonLink from "../global/SectionButtonLink";
import SectionHeading from "../global/SectionHeading";
import Article from "./Article";

function Articles() {
  return (
    <section className="py-section">
      <Container className="flex flex-col gap-section py-section">
        <SectionHeading>مقالاتنا</SectionHeading>

        <div className="grid-cards-cols gap-cards">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>

        <SectionButtonLink className="light-button mx-auto block">
          جميع المقالات
        </SectionButtonLink>
      </Container>
    </section>
  );
}

export default Articles;
