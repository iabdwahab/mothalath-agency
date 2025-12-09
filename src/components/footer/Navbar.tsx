import { useContext } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";

function Navbar() {
  const { websiteLang } = useContext(WebsiteLangContext);

  const navLinks = [
    { id: 1, text: translations.home, link: "#" },
    { id: 2, text: translations.about_us, link: "#" },
    { id: 3, text: translations.services, link: "#" },
    { id: 4, text: translations.faqs, link: "#" },
    { id: 5, text: translations.contact_us, link: "#" },
  ];

  const navLinksElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.id}>
        <a href={navLink.link} className="text-base capitalize duration-slow hover:text-supporter">
          {navLink.text[websiteLang]}
        </a>
      </li>
    );
  });

  return (
    <div className="font-bold text-main lg:mx-auto">
      <h4 className="text-h4 mb-4 capitalize">{translations.short_links[websiteLang]}</h4>
      <nav>
        <ul className="grid gap-4">{navLinksElements}</ul>
      </nav>
    </div>
  );
}
export default Navbar;
