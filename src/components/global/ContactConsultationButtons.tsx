import ConsultationButton from "./ConsultationButton";
import ContactButton from "./ContactButton";

function ContactConsultationButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid gap-4 md:grid-cols-[repeat(2,minmax(0,200px))] ${className}`}
      data-aos="fade-up"
    >
      <ContactButton />
      <ConsultationButton className="dark-button" />
    </div>
  );
}
export default ContactConsultationButtons;
