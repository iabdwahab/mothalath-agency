import { useContext } from "react";
import translations from "../../tanslations/translations";
import Container from "../Container";
import SectionButtonLink from "../global/SectionButtonLink";
import SectionHeading from "../global/SectionHeading";
import Article from "./Article";
import { WebsiteLangContext } from "../../App";
import useArticlesData from "./data/useArticlesData";
import { ArticleType } from "./types/types";

function Articles() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { articles, isLoading } = useArticlesData();
  console.log(articles);

  return (
    <section className="py-section">
      <Container className="flex flex-col gap-section py-section">
        <SectionHeading>{translations.our_articles[websiteLang]}</SectionHeading>

        <div className="grid-cards-cols gap-cards">
          {articles.map((article: ArticleType) => (
            <Article key={article.slug} data={article} />
          ))}
        </div>

        <SectionButtonLink className="light-button mx-auto block capitalize">
          {translations.all_articles[websiteLang]}
        </SectionButtonLink>
      </Container>
    </section>
  );
}

export default Articles;
