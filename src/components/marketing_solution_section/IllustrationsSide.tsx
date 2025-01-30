import ConsultationIllustration from "./ConsultationIllustration";
import ConsultationLink from "./ConsultationLink";
import HeroIllustration from "./HeroIllustration";

function IllustrationsSide() {
  return (
    <div className="relative grid gap-4 lg:grid-cols-[350px,1fr]">
      <p className="absolute -top-5 right-64 z-10 -rotate-[19.57deg] rounded-full bg-[#A7FFBC05] px-14 py-3 text-center font-semibold outline outline-[1px] outline-[#a7ffbc69] backdrop-blur-[25px] max-lg:hidden">
        شريكك الأفضل
      </p>
      <div className="flex flex-col gap-4 max-lg:order-1">
        <ConsultationIllustration />
        <ConsultationLink />
      </div>
      <HeroIllustration />
    </div>
  );
}
export default IllustrationsSide;
