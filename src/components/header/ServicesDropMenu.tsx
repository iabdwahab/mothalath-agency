import { Link } from "react-router-dom";
import useServicesList from "../../data/useServicesList";
import triangle from "/icons/triangle-icon.png";
import { useContext } from "react";
import { WebsiteLangContext } from "../../App";

function ServicesDropMenu({ isOpen }: { isOpen: boolean }) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { list } = useServicesList();

  return (
    <div
      className={`absolute ${isOpen ? "block" : "hidden"} top-[calc(100%+20px)] w-fit max-w-full animate-fadeInToTop rounded-lg border border-main bg-[#000000dc] px-8 py-4 pb-6 backdrop-blur-xl duration-medium`}
    >
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-x-[10px] border-b-[10px] border-t-0 border-solid border-x-transparent border-b-main"></div>
      <div className="grid gap-3">
        {list.map((service) => (
          <div className="flex items-center gap-2">
            <img src={triangle} alt="Triangel Icon" className="w-5" />
            <Link
              to={`/services/${service.slug}`}
              className="font-bold duration-medium hover:text-supporter"
            >
              {service.acf.name[websiteLang]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServicesDropMenu;
