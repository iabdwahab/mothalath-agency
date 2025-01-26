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
      <SectionButtonLink className="dark-button">
        استشارة مجانية
      </SectionButtonLink>
    </div>
  );
}
export default ContactConsultationButtons;
