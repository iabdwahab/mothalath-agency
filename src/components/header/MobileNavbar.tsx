import ContactButton from "./ContactButton";
import { NavLinksElements } from "./data";

function MobileNavbar({ open }: { open: boolean }) {
  return (
    <nav
      className={`${open ? "flex" : "hidden"} animate-fadeInToTop absolute left-0 top-[calc(100%+20px)] w-full flex-col gap-2 rounded-2xl border border-[#ffffff31] bg-[#1E1E1E1A] px-6 py-4 backdrop-blur-md md:hidden`}
    >
      <ul className="flex w-full flex-col items-center">
        <NavLinksElements />
      </ul>
      <ContactButton className="py-3 text-center" />
    </nav>
  );
}
export default MobileNavbar;
