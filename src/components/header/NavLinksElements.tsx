import { useContext, useState } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";
import { IoIosArrowDown } from "react-icons/io";
import ServicesDropMenu from "./ServicesDropMenu";
import { navLinks } from "./data/navLink";
import { Link } from "react-router-dom";

export function NavLinksElements() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {navLinks.map((navLink, index) => {
        if (navLink.text === translations.services) {
          return (
            <li
              onMouseOver={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              key={navLink.id}
              className="flex justify-center max-md:w-full"
            >
              <button
                className={`flex items-center justify-center gap-1 font-bold capitalize duration-medium hover:text-supporter max-md:w-full max-md:py-5 max-md:text-center ${index !== 0 ? "border-[#ffffff31] max-md:border-t" : ""}`}
              >
                {navLink.text[websiteLang]}{" "}
                <IoIosArrowDown className={`${isOpen ? "rotate-180" : ""} duration-slow`} />
              </button>
              <ServicesDropMenu isOpen={isOpen} />
            </li>
          );
        }

        return (
          <li key={navLink.id} className="max-md:w-full">
            <Link
              to={navLink.link}
              className={`flex items-center justify-center gap-1 font-bold capitalize duration-medium hover:text-supporter max-md:w-full max-md:py-5 max-md:text-center ${index !== 0 ? "border-[#ffffff31] max-md:border-t" : ""}`}
            >
              {navLink.text[websiteLang]}{" "}
            </Link>
          </li>
        );
      })}
    </>
  );
}
