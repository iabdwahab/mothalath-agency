import Container from "../Container";
import ContactConsultationButtons from "../global/ContactConsultationButtons";
import MainHeading from "../global/MainHeading";
import logo from "/logo.png";

function HomeLanding() {
  return (
    <main>
      <Container className="grid min-h-screen items-center lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 max-lg:text-center md:mt-20">
          <div className="w-full overflow-hidden rounded-full bg-gradient-to-bl from-[#A7FFBC50] to-[#1E1E1E] p-[1px] max-lg:mx-auto md:w-fit">
            <div className="flex items-center justify-center gap-4 rounded-full bg-black py-3 md:px-12 lg:px-6 lg:pl-20">
              <img src={logo} alt="Logo" className="w-6" />
              <p className="text-sm font-medium">
                منصة <span className="font-semibold text-background">مثلث</span>{" "}
                شريك نجاحك الأول
              </p>
            </div>
          </div>

          <MainHeading>
            أطلق العنان لعلامتك التجارية في عالم الرقمية
          </MainHeading>

          <p className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-transparent">
            هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة
            من خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل
            التواصل الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة
            (PPC).
          </p>

          <ContactConsultationButtons className="w-full md:justify-center lg:justify-start" />
        </div>
      </Container>
    </main>
  );
}
export default HomeLanding;
