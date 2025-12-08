import { useContext } from "react";
import { WebsiteLangContext } from "../../App";

function StepsTitle({ className }: { className?: string }) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <div className={`relative ${className}`}>
      <h2
        data-aos="fade-up"
        className="gradient-text lead flex-col text-4xl font-black capitalize leading-relaxed max-lg:text-center lg:flex"
      >
        <span>{websiteLang === "ar" ? "خطوات" : "simple"} </span>
        <span>{websiteLang === "ar" ? "بسيطة معنا" : "steps with us to"} </span>
        <span>{websiteLang === "ar" ? "لترتقي بمتجرك" : "upgrade your store"}</span>
      </h2>
    </div>
  );
}
export default StepsTitle;
