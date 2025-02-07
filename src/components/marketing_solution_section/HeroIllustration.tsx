import illustration from "/imgs/marketing_section/hero-illustration.png";
import ContactLink from "./ContactLink";
import { HomePageDataContext } from "../../pages/HomePage";
import { useContext } from "react";
import { WebsiteLangContext } from "../../App";

function HeroIllustration() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const {
    marketing_solutions: {
      illustrations_side: { hero_title, hero_description, hero_image },
    },
  } = useContext(HomePageDataContext);

  return (
    <div className="relative z-0 grid h-full overflow-hidden rounded-lg bg-[#0D0D0D] pt-10 max-lg:px-[20px] lg:grid-cols-[1fr_58%] lg:pt-20 ltr:pl-10">
      {/* Blurry Dots: */}
      <div className="absolute left-0 top-0 -z-10 aspect-square w-[334px] -translate-x-3/4 translate-y-3/4 bg-[#A7FFBC] blur-[417.8px]"></div>
      <div className="absolute right-0 top-0 -z-10 aspect-square w-[334px] -translate-y-3/4 translate-x-3/4 bg-[#A7FFBC] blur-[417.8px]"></div>
      {/* Blurry Dots ^ */}

      <div className="flex flex-col gap-8 max-lg:items-center max-lg:text-center lg:pb-20">
        <h3 className="text-2xl font-black">{hero_title[websiteLang]}</h3>
        <p>{hero_description[websiteLang]}</p>
        <ContactLink bgColorClassName="bg-background" />
      </div>

      <div className="bottom-0 mx-auto mt-auto lg:absolute lg:w-[72%] ltr:right-0 rtl:left-0">
        <img src={hero_image || illustration} alt="Illustration" className="w-full" />
      </div>
    </div>
  );
}
export default HeroIllustration;
