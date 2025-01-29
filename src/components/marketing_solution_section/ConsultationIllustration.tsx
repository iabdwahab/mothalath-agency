import illustration from "/imgs/marketing_section/consultation-illustration.png";
import ContactLink from "./ContactLink";

function ConsultationIllustration() {
  return (
    <div className="flex min-h-96 grow flex-col items-center gap-4 overflow-hidden rounded-lg bg-background pb-0 pr-6 pt-6 max-lg:px-6 max-lg:text-center lg:items-start">
      <h3 className="text-2xl font-black text-main">
        استشر خبراءنا الآن واحصل <br /> على استشارة مجانية.
      </h3>
      <ContactLink />
      <img src={illustration} alt="Illustration" className="mr-auto mt-auto" />
    </div>
  );
}
export default ConsultationIllustration;
