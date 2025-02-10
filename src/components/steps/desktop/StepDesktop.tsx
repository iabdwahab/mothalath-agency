import { GoTriangleDown } from "react-icons/go";
import { StepType } from "../../../types/homepageTypes";
import { WebsiteLangContext } from "../../../App";
import { useContext } from "react";

function StepDesktop({ data }: { data: StepType }) {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-nowrap text-sm">{data.title[websiteLang]}</p>
      <div>
        <div className="h-16 w-[1px] bg-white max-sm:h-10"></div>
      </div>
      <GoTriangleDown className="text-xl" />
      <p className="mt-8 text-nowrap rounded-full bg-white px-4 py-1 text-xs text-black max-sm:text-[10px]">
        {data.description[websiteLang]}
      </p>
    </div>
  );
}
export default StepDesktop;
