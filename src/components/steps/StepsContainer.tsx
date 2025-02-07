import { useContext } from "react";
import waves from "/imgs/steps/waves.png";
import { WebsiteLangContext } from "../../App";

function StepsContainer() {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <div className="grid items-center gap-4 lg:grid-cols-[1fr,auto]">
      <div className="relative overflow-hidden">
        <img src={waves} alt="Waves" />
        <span className="absolute -left-40 top-0 block h-full w-52 bg-[#000000b9] blur-[40px]"></span>
        <span className="absolute -right-40 top-0 block h-full w-52 bg-[#000000b9] blur-[40px]"></span>
      </div>
      <div className="relative">
        <h2 className="gradient-text lead flex-col text-4xl font-black capitalize leading-relaxed max-lg:text-center lg:flex">
          <span>{websiteLang === "ar" ? "خطوات" : "simple"} </span>
          <span>{websiteLang === "ar" ? "بسيطة معنا" : "steps with us to"} </span>
          <span>{websiteLang === "ar" ? "لترتقي بمتجرك" : "upgrade your store"}</span>
        </h2>
      </div>
    </div>
  );
}
export default StepsContainer;
