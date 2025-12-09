import SectionButtonLink from "../global/SectionButtonLink";
import { useContext } from "react";
import { SliderContext } from "./context";
import BackButton from "./buttons/BackButton";
import NextButton from "./buttons/NextButton";
import ConsultationButton from "../global/ConsultationButton";
import { WebsiteLangContext } from "../../App";
import translations from "../../tanslations/translations";

function TextSide() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { slide } = useContext(SliderContext);
  const {
    slug,
    acf: {
      services_slider_data: { text_side },
    },
  } = slide;

  const { title, description } = text_side;

  return (
    <div className="flex flex-col justify-center gap-8 max-lg:text-center">
      <h4 className="text-3xl" data-aos="fade-up">
        {title[websiteLang]}
      </h4>
      <p className="text-xl font-light" data-aos="fade-up">
        {description[websiteLang]}
      </p>
      <div className="flex flex-col gap-16 lg:flex-col-reverse lg:gap-8">
        <div className="flex gap-3 max-lg:justify-center" data-aos="fade-up">
          <BackButton />
          <NextButton />
        </div>
        <div className="flex gap-3 max-lg:justify-center max-md:flex-col">
          <SectionButtonLink href={`/services/${slug}`} className="light-button capitalize">
            {translations.book_service_now[websiteLang]}
          </SectionButtonLink>
          <ConsultationButton />
        </div>
      </div>
    </div>
  );
}
export default TextSide;
