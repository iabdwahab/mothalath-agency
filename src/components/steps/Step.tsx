import { IoTriangle } from "react-icons/io5";

function Step() {
  return (
    <div className="flex w-fit flex-col items-center gap-4 text-[8px]">
      <span className="text-xs">الخطوة الأولى</span>
      <div className="flex w-fit flex-col items-center gap-2">
        <span className="block h-10 w-[2px] bg-white"></span>
        <span>
          <IoTriangle className="rotate-180" />
        </span>
      </div>
      <span className="rounded-full bg-white px-4 py-[2px] text-black">
        نجاح متحرك
      </span>
    </div>
  );
}
export default Step;
