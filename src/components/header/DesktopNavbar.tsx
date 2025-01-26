import { navLinksElements } from "./data";

function DesktopNavbar() {
  return (
    <nav className="max-md:hidden">
      <ul className="flex w-full items-center md:gap-12">{navLinksElements}</ul>
    </nav>
  );
}
export default DesktopNavbar;
