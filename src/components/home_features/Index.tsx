import Container from "../Container";
import BlurryCircle from "../global/BlurryCircle";
import ConsultationButton from "../global/ConsultationButton";
import RegularCard from "./RegularCard";
import SpecialCard from "./SpecialCard";

function HomeFeatures() {
  return (
    <section className="py-32">
      <Container className="flex flex-col gap-8">
        <div className="flex max-w-[55%] flex-col gap-4">
          <h2 className="gradient-text text-4xl font-black leading-snug">
            نحن لا نقوم فقط بالتسويق، بل نبني علامتك التجارية ونحقق النمو
            المستدام
          </h2>
          <p className="gradient-text">
            هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة
            من خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل
            التواصل الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة
            (PPC).
          </p>
        </div>

        <div className="relative grid gap-8 pt-7 md:grid-cols-2 lg:grid-cols-3">
          <RegularCard />
          <RegularCard />
          <SpecialCard />
        </div>

        <ConsultationButton className="dark-button mx-auto w-fit px-20" />
      </Container>
    </section>
  );
}
export default HomeFeatures;
