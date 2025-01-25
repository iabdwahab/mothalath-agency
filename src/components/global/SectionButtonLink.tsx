import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  className?: string;
  href?: string;
};

function SectionButtonLink({ children, className = '', href = '#' }: propsType) {
  return (
    <a href={href} className={`block font-black py-4 px-8 rounded-full text-sm text-center ${className}`}>
      {children}
    </a>
  );
}
export default SectionButtonLink;
