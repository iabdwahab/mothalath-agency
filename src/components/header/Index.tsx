import Container from "../Container";

import { useContext, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import ContactButton from "./ContactButton";
import ToggleButton from "./ToggleButton";
import LogoContainer from "./LogoContainer";
import Overlay from "./Overlay";
import { WebsiteLangContext } from "../../App";

function Header() {
  const [open, setOpen] = useState(false);

  // Prevent Scrolling When Nabar is open
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const { websiteLang, setWebsiteLang } = useContext(WebsiteLangContext);

  function toggleLang() {
    setWebsiteLang((prev: "ar" | "en") => (prev === "ar" ? "en" : "ar"));
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
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="rounded-full bg-main px-4 py-2 text-sm font-black capitalize text-background outline-1 outline-main duration-medium hover:bg-background hover:text-main hover:outline"
            >
              {websiteLang === "ar" ? "English" : "عربي"}
            </button>
            <ContactButton className="py-2 max-md:hidden" />
          </div>
          <ToggleButton open={open} setOpen={setOpen} />
        </Container>
      </header>
    </>
  );
}

export default Header;
