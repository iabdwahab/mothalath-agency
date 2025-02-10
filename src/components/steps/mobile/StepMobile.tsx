import { useContext } from "react";
import triangle from "/icons/triangle-icon.png";
import { WebsiteLangContext } from "../../../App";
import { MultiLangTextType } from "../../../types/global";

type propsType = {
  title: MultiLangTextType;
  description: MultiLangTextType;
  className?: string;
};

function StepMobile({ title, description, className }: propsType) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <div className={`grid grid-cols-[60px,1fr] gap-3 ${className}`}>
      <div className="flex items-center justify-center text-black">
        <img src={triangle} alt="Triangle Icon" className="w-8" />
      </div>
      <div>
        <p className="text-lg">{title[websiteLang]}</p>
        <p className="text-2xl text-background">{description[websiteLang]}</p>
      </div>
    </div>
  );
}
export default StepMobile;
