import { ReactNode } from "react";

function MainHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="gradient-text text-3xl font-black !leading-snug md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}
export default MainHeading;
