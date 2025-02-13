import { NavLinksElements } from "./NavLinksElements";

function DesktopNavbar() {
  return (
    <nav className="max-md:hidden">
      <ul className="flex w-full items-center text-white md:gap-12">
        <NavLinksElements />
      </ul>
    </nav>
  );
}
export default DesktopNavbar;
