import { ReactNode } from 'react';

type propsType = { children: ReactNode; className?: string };

function SectionHeading({ children, className = '' }: propsType) {
  return <h3 className={`font-bold text-center text-[32px] ${className}`}>{children}</h3>;
}
export default SectionHeading;
