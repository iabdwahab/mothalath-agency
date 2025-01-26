import Container from '../Container';

import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import ContactButton from './ContactButton';
import ToggleButton from './ToggleButton';
import LogoContainer from './LogoContainer';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 mx-auto w-[calc(100%-24px)] top-3 left-0 right-0 max-w-[940px]">
      {/* Hey, I put this here because "backdrop-blur" didn't work inside Container */}
      <MobileNavbar open={open} />

      <Container className="flex justify-between items-center py-4 px-6 rounded-full border-[0.1px] border-[#ffffff34] bg-[#1E1E1E1A] backdrop-blur-[27px] ">
        <LogoContainer />
        <DesktopNavbar />
        <ContactButton className="max-md:hidden" />
        <ToggleButton open={open} setOpen={setOpen} />
      </Container>
    </header>
  );
}

export default Header;
