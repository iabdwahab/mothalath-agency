import { useContext } from "react";
import triangleIcon from "/icons/triangle-icon.png";
import { WebsiteLangContext } from "../../App";
import { HomePageDataContext } from "../../pages/HomePage";

function ConsultationLink() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const {
    marketing_solutions: { illustrations_side },
  } = useContext(HomePageDataContext);
  const { consultation_link_text } = illustrations_side;

  return (
    <a
      href="#"
      className="relative mx-auto flex w-fit items-center gap-4 overflow-hidden rounded-lg border border-background p-4 text-background"
    >
      <div className="absolute -left-28 top-0 -z-10 aspect-square w-1/2 bg-[#244441] blur-[142px]"></div>
      <div className="absolute -right-28 top-0 -z-10 aspect-square w-1/2 bg-[#244441] blur-[142px]"></div>
      <p>{consultation_link_text[websiteLang]}</p>
      <img src={triangleIcon} alt="Icon" className="w-7" />
    </a>
  );
}
export default ConsultationLink;
