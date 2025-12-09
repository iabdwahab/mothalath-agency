import facebook from "/icons/social/facebook.svg";
import twitter from "/icons/social/twitter.svg";
import linkedin from "/icons/social/linkedin.svg";
import instagram from "/icons/social/instagram.svg";
import { SyntheticEvent, useContext } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Contact() {
  const { websiteLang } = useContext(WebsiteLangContext);

  const socialLinks = [
    { id: 4, img: instagram, link: "#", text: "instagram" },
    { id: 3, img: linkedin, link: "#", text: "linkedin" },
    { id: 2, img: twitter, link: "#", text: "twitter" },
    { id: 1, img: facebook, link: "#", text: "facebook" },
  ];

  const socialLinksElements = socialLinks.map((socialLink) => {
    return (
      <li key={socialLink.id} className="h-fit">
        <a
          href={socialLink.link}
          className="duration-hover flex aspect-square w-11 items-center justify-center rounded-full border border-white bg-main-placeholder hover:bg-supporter"
        >
          <img src={socialLink.img} alt={socialLink.text} className="aspect-square w-5" />
        </a>
      </li>
    );
  });

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div className="grid content-start gap-6">
      <h4 className="text-xl capitalize">{translations.contact_us[websiteLang]}</h4>
      <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-[1fr,55px] grid-rows-[55px] gap-4">
          <input
            className="rounded-full bg-main-placeholder px-6 outline outline-1 outline-white placeholder:capitalize placeholder:text-black focus:outline-main focus-visible:outline"
            type="email"
            name="email"
            placeholder={`${translations.enter_your_email[websiteLang]}...`}
          />
          <button className="flex aspect-square items-center justify-center rounded-full border border-white bg-main-placeholder duration-slow hover:bg-supporter">
            {websiteLang === "en" ? (
              <IoIosArrowForward className="text-2xl font-bold" />
            ) : (
              <IoIosArrowBack className="text-2xl font-bold" />
            )}
          </button>
        </form>
      </div>
      <ul className="flex gap-4 max-md:justify-center">{socialLinksElements}</ul>
      <p className="text-base font-bold capitalize max-md:text-center">
        {translations.copyright_text[websiteLang]}
      </p>
    </div>
  );
}
export default Contact;
