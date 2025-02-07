import { useContext, useState } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ServicesDropMenu from "./ServicesDropMenu";

export const navLinks = [
  { id: 1, text: translations.home, link: "#" },
  { id: 2, text: translations.about_us, link: "#" },
  { id: 3, text: translations.services, link: "#" },
  { id: 4, text: translations.blog, link: "#" },
];

export function NavLinksElements() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {navLinks.map((navLink, index) => {
        if (navLink.text === translations.services) {
          return (
            <li key={navLink.id} className="flex justify-center max-md:w-full">
              <a
                onClick={() => setIsOpen(!isOpen)}
                href={navLink.link}
                className={`flex items-center justify-center gap-1 font-bold capitalize duration-medium hover:text-supporter max-md:w-full max-md:py-5 max-md:text-center ${index !== 0 ? "border-[#ffffff31] max-md:border-t" : ""}`}
              >
                {navLink.text[websiteLang]} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </a>
              <ServicesDropMenu isOpen={isOpen} />
            </li>
          );
        }

        return (
          <li key={navLink.id} className="max-md:w-full">
            <a
              href={navLink.link}
              className={`flex items-center gap-1 font-bold capitalize duration-medium hover:text-supporter max-md:w-full max-md:py-5 max-md:text-center ${index !== 0 ? "border-[#ffffff31] max-md:border-t" : ""}`}
            >
              {navLink.text[websiteLang]}{" "}
            </a>
          </li>
        );
      })}
    </>
  );
}
