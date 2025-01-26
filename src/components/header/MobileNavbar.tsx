import ContactButton from './ContactButton';
import { navLinksElements } from './data';

function MobileNavbar({ open }: { open: boolean }) {
  return (
    <nav className={`${open ? 'flex' : 'hidden'} md:hidden flex-col  gap-2 absolute left-0 top-[calc(100%+20px)] w-full py-4 px-6 rounded-2xl border border-[#4e4e4e] bg-[#1E1E1E1A] backdrop-blur-md`}>
      <ul className="flex flex-col items-center w-full gap-2">{navLinksElements}</ul>
      <ContactButton className="text-center py-[10px]" />
    </nav>
  );
}
export default MobileNavbar;
