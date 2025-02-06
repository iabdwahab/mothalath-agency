import { TbLoader2 } from "react-icons/tb";

function PageLoader() {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <TbLoader2 className="animate-spin text-5xl text-background" />
    </div>
  );
}
export default PageLoader;
