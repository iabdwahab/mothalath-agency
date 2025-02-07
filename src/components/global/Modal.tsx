import { useState } from "react";
import triangle from "/icons/triangle-icon.png";

function Modal() {
  const [open, setOpen] = useState(true);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <div
      className={`absolute left-0 top-0 ${open ? "flex" : "hidden"} h-screen w-screen items-center justify-center bg-black bg-opacity-50 px-2`}
    >
      <div className="w-fit max-w-full animate-fadeInToTop rounded-lg border border-main bg-[#00000034] px-8 py-4 pb-6 backdrop-blur-xl duration-medium">
        {/* <h5 className="mb-4 text-center text-2xl font-bold text-background">خدماتنا</h5>
        <hr className="h-[1px] border-0 bg-[#a7ffbc25]" /> */}
        <div className="mt-4 grid gap-3"></div>
      </div>
    </div>
  );
}
export default Modal;
