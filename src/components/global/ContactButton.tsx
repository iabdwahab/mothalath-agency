import { useContext } from "react";
import translations from "../../tanslations/translations";
import SectionButtonLink from "./SectionButtonLink";
import { WebsiteLangContext } from "../../App";

function ContactButton({}) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <SectionButtonLink className="light-button capitalize">
      {translations.contact_us[websiteLang]}
    </SectionButtonLink>
  );
}
export default ContactButton;
