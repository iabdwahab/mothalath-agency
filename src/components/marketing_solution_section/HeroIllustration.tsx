import illustration from "/imgs/marketing_section/hero-illustration.png";
import ContactLink from "./ContactLink";

function HeroIllustration() {
  return (
    <div className="relative z-0 grid overflow-hidden rounded-lg bg-[#0D0D0D] pr-10 pt-10 max-lg:pr-[30px] lg:grid-cols-2 lg:pt-20">
      <div className="absolute left-0 top-0 -z-10 aspect-square w-[334px] -translate-x-3/4 translate-y-3/4 bg-[#A7FFBC] blur-[417.8px]"></div>
      <div className="absolute right-0 top-0 -z-10 aspect-square w-[334px] -translate-y-3/4 translate-x-3/4 bg-[#A7FFBC] blur-[417.8px]"></div>
      <div className="flex flex-col gap-8 max-lg:pl-[30px] lg:pb-20">
        <h3 className="text-xl font-black">
          هل تشعر بأن موقعك الإلكتروني لا يجذب العملاء الكافين؟
        </h3>
        <p>
          تخيل أن موقعك الإلكتروني هو واجهة عملك الرقمية. إذا كانت هذه الواجهة
          غير جذابة أو غير فعالة، فستفقد الكثير من فرص تحقيق المبيعات. نحن في
          [اسم شركتك]، نقدم لك حلولاً شاملة لتحسين تجربة المستخدم على موقعك
          وزيادة معدلات التحويل.
        </p>
        <ContactLink />
      </div>

      <div className="mt-auto">
        <img src={illustration} alt="Illustration" className="w-full" />
      </div>
    </div>
  );
}
export default HeroIllustration;
