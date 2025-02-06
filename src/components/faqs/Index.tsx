import { useContext } from "react";
import translations from "../../tanslations/translations";
import Container from "../Container";
import SectionHeading from "../global/SectionHeading";
import Question from "./Question";
import { WebsiteLangContext } from "../../App";
import useFAQsData from "./data/useFAQsData";
import { QuestionType } from "./types/types";

function FAQs() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { faqs } = useFAQsData();

  return (
    <section className="py-section pb-40">
      <Container className="flex flex-col gap-section">
        <SectionHeading>{translations.faqs[websiteLang]}</SectionHeading>
        <div className="grid gap-4">
          {faqs.map((faq: { acf: QuestionType }, index) => {
            const { acf } = faq;

            return <Question key={index} title={acf.title} description={acf.description} />;
          })}
        </div>
      </Container>
    </section>
  );
}
export default FAQs;
