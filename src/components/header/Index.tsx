import Container from "../Container";

import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import ContactButton from "./ContactButton";
import ToggleButton from "./ToggleButton";
import LogoContainer from "./LogoContainer";
import Overlay from "./Overlay";

function Header() {
  const [open, setOpen] = useState(false);

  // Prevent Scrolling When Nabar is open
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <>
      <Overlay open={open} setOpen={setOpen} />
      <header className="fixed left-0 right-0 top-3 z-50 mx-auto w-[calc(100%-24px)] max-w-[940px]">
        {/* Hey, I put this here because "backdrop-blur" didn't work inside Container */}
        <MobileNavbar open={open} />

        <Container className="flex items-center justify-between rounded-full border-[0.1px] border-[#ffffff34] bg-[#1E1E1E1A] px-6 py-4 backdrop-blur-md">
          <LogoContainer />
          <DesktopNavbar />
          <ContactButton className="py-2 max-md:hidden" />
          <ToggleButton open={open} setOpen={setOpen} />
        </Container>
      </header>
    </>
  );
}

export default Header;
