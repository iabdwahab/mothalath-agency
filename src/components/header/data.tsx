import { useContext } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";

export const navLinks = [
  { id: 1, text: translations.home, link: "#" },
  { id: 2, text: translations.about_us, link: "#" },
  { id: 3, text: translations.services, link: "#" },
  { id: 4, text: translations.blog, link: "#" },
];

export function NavLinksElements() {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <>
      {navLinks.map((navLink, index) => {
        return (
          <li key={navLink.id} className="max-md:w-full">
            <a href={navLink.link} className={`block font-bold capitalize duration-medium hover:text-supporter max-md:w-full max-md:py-5 max-md:text-center ${index !== 0 ? "border-[#ffffff31] max-md:border-t" : ""}`}>
              {navLink.text[websiteLang]}
            </a>
          </li>
        );
      })}
    </>
  );
}
