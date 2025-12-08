import { ReactNode } from "react";

type propsType = { children: ReactNode; className?: string };

function SectionHeading({ children, className = "" }: propsType) {
  return (
    <h3 data-aos="fade-up" className={`text-center text-[32px] font-bold ${className}`}>
      {children}
    </h3>
  );
}
export default SectionHeading;
