import { useContext } from "react";
import correctIcon from "/icons/correct-circle.svg";
import personOne from "/imgs/person/person-1.png";
import personTwo from "/imgs/person/person-2.png";
import triangle from "/imgs/slider/triangle-icon.png";
import { SliderContext } from "./context";

function ImageSide() {
  const { slide } = useContext(SliderContext);
  const { id, ImageSide: data } = slide;

  return (
    <div className="max-w-[500px relative mx-auto">
      <div className="relative top-10 grid max-w-[320px] grid-cols-[auto,1fr,auto] items-center gap-4 rounded-xl bg-light-green p-3 text-main max-md:right-2 md:absolute md:p-4">
        <img src={correctIcon} alt="Icon" />
        <div className="grid gap-1">
          <h5 className="font-bold">{data.title}</h5>
          <p className="text-xs font-bold">{data.description}</p>
        </div>
        <div className="flex items-center">
          <img src={personOne} alt="Person" />
          <img src={personTwo} alt="Person" className="-mr-6" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[450px] overflow-hidden rounded-[40px] bg-white md:w-[90%]">
        <img
          src={`/mothalath-agency/imgs/slider/hero/hero-${id}.png`}
          alt="Photo"
          className="max-h-[500px] w-full object-cover"
        />
      </div>

      <div className="relative -mt-[100px] mr-auto grid w-fit grid-cols-[40px,140px] gap-8 rounded-md bg-[#79FD730D] bg-opacity-10 bg-clip-padding pr-4 pt-4 backdrop-blur-sm backdrop-filter md:grid-cols-[1fr,auto] md:gap-12">
        <img
          src={triangle}
          alt="Triangle"
          className="w-14 max-w-full justify-self-start"
        />
        <img
          src={`/mothalath-agency/imgs/slider/illustrations/illustration-${id}.png`}
          alt="Photo"
          className="justify-self-end"
        />
      </div>
    </div>
  );
}
export default ImageSide;
