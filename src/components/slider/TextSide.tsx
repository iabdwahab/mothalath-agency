import SectionButtonLink from "../global/SectionButtonLink";
import { useContext } from "react";
import { SliderContext } from "./context";
import BackButton from "./buttons/BackButton";
import NextButton from "./buttons/NextButton";

function TextSide() {
  const { slide } = useContext(SliderContext);
  const { textSide: data } = slide;

  return (
    <div className="flex flex-col justify-center gap-8 max-lg:text-center">
      <h4 className="text-3xl">{data.title}</h4>
      <p className="text-xl font-light">{data.description}</p>
      <div className="flex gap-3 max-lg:justify-center max-md:flex-col">
        <SectionButtonLink className="light-button">
          احجز خدمتك الآن
        </SectionButtonLink>
        <SectionButtonLink className="dark-button">
          استشارة مجانية
        </SectionButtonLink>
      </div>
      <div className="flex gap-3 max-lg:justify-center">
        <BackButton />
        <NextButton />
      </div>
    </div>
  );
}
export default TextSide;
