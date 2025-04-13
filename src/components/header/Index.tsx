import Container from "../Container";

import { useState } from "react";
import ContactButton from "./ContactButton";
import LogoContainer from "./LogoContainer";
import Overlay from "./Overlay";
import SwitchLangButton from "./SwitchLangButton";

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
        <Container className="flex items-center justify-between rounded-full border-[0.1px] border-[#ffffff34] bg-[#1E1E1E1A] px-6 py-4 backdrop-blur-md">
          <LogoContainer />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <SwitchLangButton />
              <ContactButton className="py-2 max-md:hidden" />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
