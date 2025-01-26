import { phoneNumber } from "../../agency_data/agencyData";
import SectionButtonLink from "./SectionButtonLink";

function ConsultationButton({ className }: { className: string }) {
  const msg = `هلا والله يا شركة مثلث، أبغى أستشيركم.`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(msg)}`;

  return (
    <SectionButtonLink href={url} className={`${className}`}>
      استشارة مجانية
    </SectionButtonLink>
  );
}
export default ConsultationButton;
