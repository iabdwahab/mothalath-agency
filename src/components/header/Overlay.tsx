function Overlay({ open, setOpen }: { open: boolean; setOpen: Function }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`${!open ? "hidden" : ""} fixed left-0 top-0 z-40 h-screen w-screen bg-[#000000d5]`}
    ></div>
  );
}
export default Overlay;
