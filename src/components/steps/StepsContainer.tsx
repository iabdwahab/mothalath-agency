import waves from "/imgs/steps/waves.png";

function StepsContainer() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr,350px]">
      <div className="relative overflow-hidden">
        <img src={waves} alt="Waves" />
        <span className="absolute -left-40 top-0 block h-full w-52 bg-[#000000b9] blur-[40px]"></span>
        <span className="absolute -right-40 top-0 block h-full w-52 bg-[#000000b9] blur-[40px]"></span>
      </div>
      <div className="relative">
        <h2 className="gradient-text lead flex-col text-4xl font-black leading-relaxed max-lg:text-center lg:flex">
          <span>خطوات </span>
          <span>بسيطة معنا </span>
          <span>لترتقي بمتجرك </span>
        </h2>
      </div>
    </div>
  );
}
export default StepsContainer;
