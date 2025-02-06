import { useContext } from "react";
import translations from "../../tanslations/translations";
import triangleIcon from "/icons/triangle-icon.png";
import { WebsiteLangContext } from "../../App";

function PlaceServiceCard() {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <a
      href="#"
      className="group flex w-full flex-col justify-between gap-4 rounded-3xl border border-[#FFFFFF14] bg-background px-8 py-10 backdrop-blur-xl duration-medium hover:bg-main"
    >
      <h5 className="text-3xl font-black capitalize text-main group-hover:text-background">
        {translations.book_service_now[websiteLang]}
      </h5>
      <div className="relative -left-2 top-5 mr-auto flex aspect-square w-12 items-center justify-center rounded-full bg-main pt-1 group-hover:bg-background">
        <img src={triangleIcon} alt="" className="w-8 rotate-180" />
      </div>
    </a>
  );
}
export default PlaceServiceCard;
