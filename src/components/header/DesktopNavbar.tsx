import { navLinksElements } from './data';

function DesktopNavbar() {
  return (
    <nav className="max-md:hidden">
      <ul className="flex items-center w-full md:gap-12">{navLinksElements}</ul>
    </nav>
  );
}
export default DesktopNavbar;
