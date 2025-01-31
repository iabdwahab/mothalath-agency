import facebook from "/icons/social/facebook.svg";
import twitter from "/icons/social/twitter.svg";
import linkedin from "/icons/social/linkedin.svg";
import instagram from "/icons/social/instagram.svg";
import { SyntheticEvent } from "react";

function Contact() {
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
          <img
            src={socialLink.img}
            alt={socialLink.text}
            className="aspect-square w-5"
          />
        </a>
      </li>
    );
  });

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div className="grid content-start gap-6">
      <h4 className="text-xl">تواصل معنا</h4>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-[1fr,55px] grid-rows-[55px] gap-4"
        >
          <input
            className="rounded-full bg-main-placeholder px-6 outline outline-1 outline-white placeholder:text-black focus:outline-main focus-visible:outline"
            type="email"
            name="email"
            placeholder="أدخل بريدك الإلكتروني"
          />
          <button className="flex aspect-square items-center justify-center rounded-full border border-white bg-main-placeholder duration-slow hover:bg-supporter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
              stroke="currentColor"
              strokeWidth={0.6}
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
      <ul className="flex gap-4 max-md:justify-center">
        {socialLinksElements}
      </ul>
      <p className="text-base font-bold max-md:text-center">
        كل الحقوق محفوظة لشركة مثلث.
      </p>
    </div>
  );
}
export default Contact;
