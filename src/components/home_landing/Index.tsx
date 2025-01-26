import Container from '../Container';
import ContactConsultationButtons from '../global/ContactConsultationButtons';
import logo from '/logo.png';

function HomeLanding() {
  return (
    <main>
      <Container className="min-h-screen grid lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-center gap-6 mt-24 md:mt-20 max-lg:text-center">
          <div className="max-lg:mx-auto bg-gradient-to-bl from-[#A7FFBC50] to-[#1E1E1E] p-[1px] lg:pt-[0.43px] lg:pb-[0.6px] lg:px-[0.4px] w-full md:w-fit overflow-hidden rounded-full">
            <div className="flex items-center justify-center gap-4 md:px-12 lg:px-6 py-3 lg:pl-20 rounded-full bg-black">
              <img src={logo} alt="Logo" />
              <p className="text-sm font-medium">
                منصة <span className="text-background">مثلث</span> شريك نجاحك الأول
              </p>
            </div>
          </div>

          <h1 className="font-black text-3xl md:text-4xl lg:text-5xl !leading-snug bg-gradient-to-l from-[#999999] to-[#ffffff] text-transparent bg-clip-text">أطلق العنان لعلامتك التجارية في عالم الرقمية</h1>

          <p className="bg-gradient-to-l from-[#999999] to-[#ffffff] text-transparent bg-clip-text">هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة من خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل التواصل الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة (PPC).</p>

          <ContactConsultationButtons className="md:justify-center lg:justify-start w-full" />
        </div>
      </Container>
    </main>
  );
}
export default HomeLanding;
