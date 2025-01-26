function Overlay({ open, setOpen }: { open: boolean; setOpen: Function }) {
  return <div onClick={() => setOpen(false)} className={`${!open ? 'hidden' : ''} w-screen h-screen bg-[#000000d5] fixed left-0 top-0 z-40`}></div>;
}
export default Overlay;
