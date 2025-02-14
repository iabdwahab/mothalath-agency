import { Fragment, useContext } from "react";
import StepMobile from "./StepMobile";
import { HomePageDataContext } from "../../../pages/HomePage";

function StepsContainerMobile({ className }: { className?: string }) {
  const {
    steps: { steps_list },
  } = useContext(HomePageDataContext);

  return (
    <div className={`relative mt-6 grid grid-cols-[60px,1fr] ${className}`}>
      {Object.values(steps_list).map((step, index) => (
        <Fragment key={index}>
          {index !== 0 && <div className="col-start-1 mx-auto h-10 w-[2px] bg-[#ffffff]"></div>}
          <StepMobile
            key={index}
            title={step.title}
            description={step.description}
            className={`col-span-2 even:bg-white`}
          />
        </Fragment>
      ))}
      <span className="absolute left-0 top-1/2 -z-10 h-[334px] max-h-[50vh] w-[334px] max-w-[35vw] -translate-y-1/2 bg-background blur-[334px]"></span>
    </div>
  );
}
export default StepsContainerMobile;
