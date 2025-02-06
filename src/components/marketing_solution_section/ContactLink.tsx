import { GoArrowLeft } from "react-icons/go";
import translations from "../../tanslations/translations";
import { useContext } from "react";
import { WebsiteLangContext } from "../../App";

type propsType = {
  bgColorClassName?: string;
};

function ContactLink({ bgColorClassName = "bg-white" }: propsType) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <a href="#" className={`group flex w-fit items-center gap-2 rounded-full ${bgColorClassName} px-4 py-2 duration-medium hover:bg-main`}>
      <span className="font-semibold capitalize text-main group-hover:text-white">{translations.contact_now[websiteLang]}</span>
      <span className="flex items-center justify-center rounded-full bg-main p-1 text-white group-hover:bg-white group-hover:text-main">
        <GoArrowLeft className="ltr:rotate-180" />
      </span>
    </a>
  );
}
export default ContactLink;
