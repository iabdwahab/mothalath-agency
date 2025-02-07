import triangle from "/icons/triangle-icon.png";

function ServicesDropMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`absolute ${isOpen ? "block" : "hidden"} top-[calc(100%+20px)] w-fit max-w-full animate-fadeInToTop rounded-lg border border-main bg-[#000000dc] px-8 py-4 pb-6 backdrop-blur-xl duration-medium`}
    >
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-x-[10px] border-b-[10px] border-t-0 border-solid border-x-transparent border-b-main"></div>
      <div className="grid gap-3">
        <div className="flex items-center gap-2">
          <img src={triangle} alt="" className="w-5" />
          <p className="font-bold">تصميم المواقع.</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={triangle} alt="" className="w-5" />
          <p className="font-bold">تصميم المواقع.</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={triangle} alt="" className="w-5" />
          <p className="font-bold">تصميم المواقع.</p>
        </div>
      </div>
    </div>
  );
}
export default ServicesDropMenu;
