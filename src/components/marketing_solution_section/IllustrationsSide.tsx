import { useContext } from "react";
import translations from "../../tanslations/translations";
import ConsultationIllustration from "./ConsultationIllustration";
import ConsultationLink from "./ConsultationLink";
import HeroIllustration from "./HeroIllustration";
import { WebsiteLangContext } from "../../App";

function IllustrationsSide() {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <div className="relative grid gap-4 lg:grid-cols-[350px,1fr]">
      <p className="absolute -top-5 z-10 rounded-full bg-[#A7FFBC05] px-14 py-3 text-center font-semibold capitalize outline outline-[1px] outline-[#a7ffbc69] backdrop-blur-[25px] max-lg:hidden ltr:left-64 ltr:rotate-[19.57deg] rtl:right-64 rtl:-rotate-[19.57deg]">
        {translations.your_best_partner[websiteLang]}
      </p>
      <div className="flex flex-col gap-4 max-lg:order-1">
        <ConsultationIllustration />
        <ConsultationLink />
      </div>
      <HeroIllustration />
    </div>
  );
}
export default IllustrationsSide;
