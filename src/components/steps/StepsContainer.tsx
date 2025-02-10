import StepsContainerDesktop from "./desktop/StepsContainerDesktop";
import StepsContainerMobile from "./mobile/StepsContainerMobile";
import StepsTitle from "./StepsTitle";

function StepsContainer({ className }: { className?: string }) {
  return (
    <div className={`mt-14 grid items-center gap-4 lg:grid-cols-[1fr,auto] ${className}`}>
      {/* Make it on top on Mobile */}
      <StepsTitle className="md:hidden" />
      <StepsContainerDesktop className="max-md:hidden" />
      <StepsContainerMobile className="md:hidden" />
      <StepsTitle className="max-md:hidden" />
    </div>
  );
}
export default StepsContainer;
