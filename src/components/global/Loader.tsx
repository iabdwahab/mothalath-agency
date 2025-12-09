import { TbLoader2 } from "react-icons/tb";

function Loader() {
  return (
    <div className="flex justify-center">
      <TbLoader2 className="animate-spin text-5xl text-background" />
    </div>
  );
}
export default Loader;
