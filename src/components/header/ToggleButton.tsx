function ToggleButton({ open, setOpen }: { open: boolean; setOpen: Function }) {
  function toggleOpen() {
    setOpen((prevValue: boolean) => !prevValue);
  }

  return (
    <button
      onClick={toggleOpen}
      className="rounded-md border border-background p-1 text-2xl text-background duration-700 hover:border-main hover:bg-background hover:text-main md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`size-6 duration-medium ${open ? "rotate-90" : ""}`}
      >
        <path
          fillRule="evenodd"
          d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
export default ToggleButton;
