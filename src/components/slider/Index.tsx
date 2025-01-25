import Container from '../Container';
import SectionButtonLink from '../global/SectionButtonLink';

import correctIcon from '/icons/correct-circle.svg';
import personOne from '/imgs/person/person-1.png';
import personTwo from '/imgs/person/person-2.png';

function SliderSection() {
  return (
    <section className="py-section">
      <Container className="gid grid-cols-2">
        <div className="flex flex-col gap-8">
          <h4 className="text-3xl">حول حلمك إلى واقع.. ابنِ متجرك الإلكتروني الخاص بك معنا!</h4>
          <p className="font-light text-xl">هل لديك منتجات أو خدمات مميزة ترغب في عرضها للعالم؟ هل تبحث عن طريقة فعالة لزيادة مبيعاتك وتوسيع نطاق عملك؟ نحن هنا لمساعدتك في تحقيق ذلك</p>
          <div className="flex gap-3">
            <SectionButtonLink className="light-button">احجز خدمتك الآن</SectionButtonLink>
            <SectionButtonLink className="dark-button">استشارة مجانية</SectionButtonLink>
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
        <div>
          <div className="max-w-96 flex items-center gap-4 text-main bg-light-green p-4 rounded-xl">
            <img src={correctIcon} alt="Icon" />
            <div className="">
              <h5 className="font-bold">الوصول إلى جمهور أوسع</h5>
              <p className="font-bold text-xs">عرض منتجاتك وخدماتك لعملاء جدد على مدار الساعة طوال أيام الأسبوع.</p>
            </div>
            <div className="flex items-center">
              <div className="flex">
                <img src={personTwo} alt="Person" />
                <img src={personOne} alt="Person" className="" />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </section>
  );
}
export default SliderSection;
