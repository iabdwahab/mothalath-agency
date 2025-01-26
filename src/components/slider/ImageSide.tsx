import { useContext } from 'react';
import correctIcon from '/icons/correct-circle.svg';
import personOne from '/imgs/person/person-1.png';
import personTwo from '/imgs/person/person-2.png';
import triangle from '/imgs/slider/triangle-icon.png';
import { SliderContext } from './context';

function ImageSide() {
  const { slide } = useContext(SliderContext);
  const { id, ImageSide: data } = slide;

  return (
    <div className="relative mx-auto max-w-[500px">
      <div className="relative md:absolute max-md:right-2 top-10 max-w-[320px] grid grid-cols-[auto,1fr,auto] items-center gap-4 text-main bg-light-green p-3 md:p-4 rounded-xl">
        <img src={correctIcon} alt="Icon" />
        <div className="grid gap-1">
          <h5 className="font-bold">{data.title}</h5>
          <p className="font-bold text-xs">{data.description}</p>
        </div>
        <div className="flex items-center">
          <img src={personOne} alt="Person" />
          <img src={personTwo} alt="Person" className="-mr-6" />
        </div>
      </div>

      <div className="w-full md:w-[90%] max-w-[450px] mx-auto rounded-[40px] overflow-hidden bg-white">
        <img src={`/mothalath-agency/imgs/slider/hero/hero-${id}.png`} alt="Photo" className="w-full max-h-[500px] object-cover" />
      </div>

      <div className="grid grid-cols-[40px,140px] md:grid-cols-[1fr,auto] gap-8 md:gap-12 relative pt-4 pr-4 -mt-[100px] mr-auto w-fit bg-[#79FD730D] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={triangle} alt="Triangle" className="justify-self-start w-14 max-w-full" />
        <img src={`/mothalath-agency/imgs/slider/illustrations/illustration-${id}.png`} alt="Photo" className="justify-self-end" />
      </div>
    </div>
  );
}
export default ImageSide;
