import { NavLinksElements } from "./data";

function DesktopNavbar() {
  return (
    <nav className="max-md:hidden">
      <ul className="flex w-full items-center md:gap-12">
        <NavLinksElements />
      </ul>
    </nav>
  );
}
export default DesktopNavbar;
