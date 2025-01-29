import ConsultationIllustration from "./ConsultationIllustration";
import ConsultationLink from "./ConsultationLink";
import HeroIllustration from "./HeroIllustration";

function IllustrationsSide() {
  return (
    <div className="relative grid gap-4 lg:grid-cols-[350px,1fr]">
      <div className="flex flex-col gap-4 max-lg:order-1">
        <ConsultationIllustration />
        <ConsultationLink />
      </div>
      <HeroIllustration />
    </div>
  );
}
export default IllustrationsSide;
