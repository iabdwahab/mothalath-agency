import illustration from "/imgs/marketing_section/consultation-illustration.png";
import ContactLink from "./ContactLink";
import { useContext } from "react";
import { WebsiteLangContext } from "../../App";
import { HomePageDataContext } from "../../pages/HomePage";

function ConsultationIllustration() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const {
    marketing_solutions: {
      illustrations_side: { consultation_text, consultation_image },
    },
  } = useContext(HomePageDataContext);

  return (
    <div
      data-aos="fade-up"
      className="flex min-h-96 grow flex-col items-center gap-4 overflow-hidden rounded-lg bg-background px-6 pb-0 pt-6 max-lg:px-6 max-lg:text-center lg:items-start"
    >
      <h3 data-aos="fade-up" className="text-2xl font-black text-main">
        {consultation_text[websiteLang]}
      </h3>
      <ContactLink />
      <img
        data-aos="fade-up"
        src={consultation_image || illustration}
        alt="Illustration"
        className="mr-auto mt-auto"
      />
    </div>
  );
}
export default ConsultationIllustration;
