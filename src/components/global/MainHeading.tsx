import { ReactNode } from "react";

function MainHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-3xl font-black !leading-snug text-transparent md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}
export default MainHeading;
