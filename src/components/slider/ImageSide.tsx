import { useContext } from "react";
import correctIcon from "/icons/correct-circle.svg";
import personOne from "/imgs/person/person-1.png";
import personTwo from "/imgs/person/person-2.png";
import triangle from "/imgs/slider/triangle-icon.png";
import { SliderContext } from "./context";
import { WebsiteLangContext } from "../../App";

function ImageSide() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { slide } = useContext(SliderContext);
  const {
    acf: {
      services_slider_data: { image_side },
    },
  } = slide;

  const { title, description, hero_image, illustration_image } = image_side;

  return (
    <div className="max-w-[500px relative mx-auto">
      <div className="relative top-10 grid max-w-[320px] grid-cols-[auto,1fr,auto] items-center gap-4 rounded-xl bg-light-green p-3 text-main max-md:right-2 md:absolute md:p-4">
        <img src={correctIcon} alt="Icon" />
        <div className="grid gap-1">
          <h5 className="font-bold">{title[websiteLang]}</h5>
          <p className="text-xs font-bold">{description[websiteLang]}</p>
        </div>
        <div className="flex items-center">
          <img src={personOne} alt="Person" />
          <img src={personTwo} alt="Person" className="ltr:-ml-6 rtl:-mr-6" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[450px] overflow-hidden rounded-2xl bg-white md:w-[90%]">
        <img
          src={hero_image.url}
          alt={hero_image.alt}
          className="h-[450px] w-full object-cover"
        />
      </div>

      <div className="relative -mt-[100px] grid w-fit gap-8 rounded-md bg-[#79FD730D] bg-opacity-10 bg-clip-padding pr-4 pt-4 backdrop-blur-sm backdrop-filter md:grid-cols-[1fr,auto] md:gap-12 ltr:ml-auto ltr:grid-cols-[140px,40px] rtl:mr-auto rtl:grid-cols-[40px,140px]">
        <img
          src={triangle}
          alt="Triangle"
          className="w-14 max-w-full justify-self-start ltr:order-1"
        />
        <img
          src={illustration_image.url}
          alt={illustration_image.alt}
          className="justify-self-end"
        />
      </div>
    </div>
  );
}
export default ImageSide;
