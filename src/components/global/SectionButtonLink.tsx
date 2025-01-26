import { ReactNode } from "react";

type propsType = {
  children: ReactNode;
  className?: string;
  href?: string;
};

function SectionButtonLink({
  children,
  className = "",
  href = "#",
}: propsType) {
  return (
    <a
      href={href}
      className={`block rounded-full px-8 py-4 text-center text-sm font-black ${className}`}
    >
      {children}
    </a>
  );
}
export default SectionButtonLink;
