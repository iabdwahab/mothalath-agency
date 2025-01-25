import Container from '../Container';
import SectionButtonLink from '../global/SectionButtonLink';
import SectionHeading from '../global/SectionHeading';
import Article from './Article';

function Articles() {
  return (
    <section className="py-section">
      <Container className="py-section flex flex-col gap-section">
        <SectionHeading>مقالاتنا</SectionHeading>

        <div className="grid-cards-cols gap-cards">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>

        <SectionButtonLink className="light-button block mx-auto">جميع المقالات</SectionButtonLink>
      </Container>
    </section>
  );
}

export default Articles;
