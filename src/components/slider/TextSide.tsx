import SectionButtonLink from "../global/SectionButtonLink";
import { useContext } from "react";
import { SliderContext } from "./context";
import BackButton from "./buttons/BackButton";
import NextButton from "./buttons/NextButton";
import ConsultationButton from "../global/ConsultationButton";

function TextSide() {
  const { slide } = useContext(SliderContext);
  const { textSide: data } = slide;

  return (
    <div className="flex flex-col justify-center gap-8 max-lg:text-center">
      <h4 className="text-3xl">{data.title}</h4>
      <p className="text-xl font-light">{data.description}</p>
      <div className="flex flex-col gap-16 lg:flex-col-reverse lg:gap-8">
        <div className="flex gap-3 max-lg:justify-center">
          <BackButton />
          <NextButton />
        </div>
        <div className="flex gap-3 max-lg:justify-center max-md:flex-col">
          <SectionButtonLink className="light-button">
            احجز خدمتك الآن
          </SectionButtonLink>
          <ConsultationButton />
        </div>
      </div>
    </div>
  );
}
export default TextSide;
