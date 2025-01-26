import { ReactNode } from "react";

type propsType = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className = "" }: propsType) {
  return (
    <div className={`mx-auto max-w-7xl px-3 ${className}`}>{children}</div>
  );
}
export default Container;
