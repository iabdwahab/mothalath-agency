import waves from "/imgs/steps/waves.png";
import StepDesktop from "./StepDesktop";
import { HomePageDataContext } from "../../../pages/HomePage";
import { useContext } from "react";

function StepsContainerDesktop({ className }: { className?: string }) {
  const {
    steps: { steps_list },
  } = useContext(HomePageDataContext);

  return (
    <div className={`relative overflow-hidden pt-20 ${className}`}>
      <img src={waves} alt="Waves" />
      <span className="absolute -left-40 top-0 block h-full w-52 bg-[#000000b9] blur-[40px]"></span>
      <span className="absolute -right-40 top-0 block h-full w-52 bg-[#000000b9] blur-[40px]"></span>
      <div className="absolute right-0 top-0 flex w-full justify-evenly px-6 pl-7 [&>*:nth-child(even)]:pt-10">
        {Object.values(steps_list).map((step, index) => (
          <StepDesktop key={index} index={index} data={step} />
        ))}
      </div>
    </div>
  );
}
export default StepsContainerDesktop;
