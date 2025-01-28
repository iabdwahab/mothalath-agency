import ConsultationIllustration from "./ConsultationIllustration";
import HeroIllustration from "./HeroIllustration";

function IllustrationsSide() {
  return (
    <div className="relative grid gap-4 lg:grid-cols-[350px,1fr]">
      <div className="to absolute z-40 flex h-full w-full items-center justify-center rounded-lg bg-[#ffffff21] p-0 text-3xl font-black text-black backdrop-blur-sm">
        <span className="rounded-md bg-white p-2">يتم العمل عليها.</span>
      </div>
      <ConsultationIllustration />
      <HeroIllustration />
    </div>
  );
}
export default IllustrationsSide;
