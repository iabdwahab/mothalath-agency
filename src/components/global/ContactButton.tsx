import { useContext } from "react";
import translations from "../../tanslations/translations";
import SectionButtonLink from "./SectionButtonLink";
import { WebsiteLangContext } from "../../App";
import { phoneNumber } from "../../agency_data/agencyData";

function ContactButton({}) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <SectionButtonLink
      className="light-button capitalize"
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
    >
      {translations.contact_us[websiteLang]}
    </SectionButtonLink>
  );
}
export default ContactButton;
