import { useContext } from "react";
import { phoneNumber } from "../../agency_data/agencyData";
import translations from "../../tanslations/translations";
import SectionButtonLink from "./SectionButtonLink";
import { WebsiteLangContext } from "../../App";

type propsType = {
  className?: string;
  color?: "dark" | "light";
};

function ConsultationButton({ className, color = "dark" }: propsType) {
  const { websiteLang } = useContext(WebsiteLangContext);

  const msg = `هلا والله يا شركة مثلث، أبغى أستشيركم.`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(msg)}`;

  return (
    <SectionButtonLink
      href={url}
      className={`${color === "dark" ? "dark-button" : "light-button"} capitalize ${className}`}
    >
      {translations.free_consultation[websiteLang]}
    </SectionButtonLink>
  );
}
export default ConsultationButton;
