import SectionButtonLink from './SectionButtonLink';

function ContactConsultationButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`grid md:grid-cols-[repeat(2,minmax(0,200px))] gap-4 ${className}`}>
      <SectionButtonLink className="light-button">تواصل معنا</SectionButtonLink>
      <SectionButtonLink className="dark-button">استشارة مجانية</SectionButtonLink>
    </div>
  );
}
export default ContactConsultationButtons;
