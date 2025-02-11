import { useContext } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";
import { phoneNumber } from "../../agency_data/agencyData";

function ContactButton({ className = "" }: { className?: string }) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
      className={`rounded-full bg-main px-12 text-sm font-black capitalize text-background outline-1 outline-main duration-medium hover:bg-background hover:text-main hover:outline ${className}`}
    >
      {translations.contact_us[websiteLang]}
    </a>
  );
}
export default ContactButton;
