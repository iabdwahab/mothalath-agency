import ConsultationButton from "./ConsultationButton";
import SectionButtonLink from "./SectionButtonLink";

function ContactConsultationButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`grid gap-4 md:grid-cols-[repeat(2,minmax(0,200px))] ${className}`}
    >
      <SectionButtonLink className="light-button">تواصل معنا</SectionButtonLink>
      <ConsultationButton className="dark-button" />
    </div>
  );
}
export default ContactConsultationButtons;
