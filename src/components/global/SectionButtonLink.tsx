import { ReactNode } from "react";
import { Link } from "react-router-dom";

type propsType = {
  children: ReactNode;
  className?: string;
  href?: string;
};

function SectionButtonLink({ children, className = "", href = "#" }: propsType) {
  return (
    <Link
      to={href}
      data-aos="fade-up"
      className={`block rounded-full px-8 py-4 text-center text-sm font-black ${className}`}
    >
      {children}
    </Link>
  );
}
export default SectionButtonLink;
