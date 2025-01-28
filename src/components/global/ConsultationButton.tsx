import { phoneNumber } from "../../agency_data/agencyData";
import SectionButtonLink from "./SectionButtonLink";

type propsType = {
  className?: string;
  color?: "dark" | "light";
};

function ConsultationButton({ className, color = "dark" }: propsType) {
  const msg = `هلا والله يا شركة مثلث، أبغى أستشيركم.`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(msg)}`;

  return (
    <SectionButtonLink
      href={url}
      className={`${color === "dark" ? "dark-button" : "light-button"} ${className}`}
    >
      استشارة مجانية
    </SectionButtonLink>
  );
}
export default ConsultationButton;
