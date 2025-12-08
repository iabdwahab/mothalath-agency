import { useContext } from "react";
import trinagleIcon from "/icons/triangle-icon.png";
import { WebsiteLangContext } from "../../App";
import { FeatureItemType } from "../../types/homepageTypes";

type propsType = {
  data: FeatureItemType;
};

function SpecialCard({ data }: propsType) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { feature_title, feature_description } = data;

  return (
    <div
      data-aos="fade-up"
      className="flex min-h-[210px] flex-col gap-4 rounded-lg bg-background p-8 pl-12 text-xl backdrop-blur-2xl"
    >
      <h3 className="font-black text-main">{feature_title[websiteLang]}</h3>
      <p className="text-black">{feature_description[websiteLang]}</p>
      <img
        src={trinagleIcon}
        alt="Icon"
        className="absolute bottom-4 left-4 mr-auto w-8 rotate-180"
      />
    </div>
  );
}
export default SpecialCard;
