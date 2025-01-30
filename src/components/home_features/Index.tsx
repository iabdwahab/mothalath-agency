import Container from "../Container";
import ConsultationButton from "../global/ConsultationButton";
import RegularCard from "./RegularCard";
import SpecialCard from "./SpecialCard";

function HomeFeatures() {
  return (
    <section className="py-section">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 max-lg:text-center lg:max-w-[55%]">
          <h2 className="gradient-text text-4xl font-black leading-snug">
            <span className="bg-gradient-to-l from-supporter to-background bg-clip-text text-supporter text-transparent">
              نحن لا نقوم
            </span>{" "}
            فقط بالتسويق، بل نبني علامتك التجارية ونحقق{" "}
            <span className="bg-gradient-to-l from-supporter to-background bg-clip-text text-supporter text-transparent">
              النمو المستدام
            </span>
          </h2>
          <p className="gradient-text">
            هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة
            من خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل
            التواصل الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة
            (PPC).
          </p>
        </div>

        <div className="relative grid gap-6 pt-7 md:grid-cols-2 lg:grid-cols-3">
          <RegularCard positionX="right" positionY="top" />
          <RegularCard positionX="left" positionY="bottom" />
          <div className="relative md:col-span-2 lg:-top-7 lg:col-span-1">
            <SpecialCard />
          </div>
        </div>

        <ConsultationButton className="dark-button mx-auto w-fit px-20" />
      </Container>
    </section>
  );
}
export default HomeFeatures;
