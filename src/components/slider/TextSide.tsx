import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SectionButtonLink from '../global/SectionButtonLink';
import { useContext } from 'react';
import { SliderContext } from './context';

function TextSide() {
  const { slide } = useContext(SliderContext);
  const { textSide: data } = slide;

  return (
    <div className="flex flex-col max-lg:text-center gap-8 justify-center">
      <h4 className="text-3xl">{data.title}</h4>
      <p className="font-light text-xl">{data.description}</p>
      <div className="flex max-md:flex-col max-lg:justify-center gap-3">
        <SectionButtonLink className="light-button">احجز خدمتك الآن</SectionButtonLink>
        <SectionButtonLink className="dark-button">استشارة مجانية</SectionButtonLink>
      </div>
      <div className="flex gap-3 max-lg:justify-center">
        <button className="text-[#A7FFBC1C] text-3xl rounded-full w-14 h-14 flex justify-center items-center">
          <IoIosArrowForward />
        </button>
        <button className="bg-[#FFFFFF0D] text-[#A7FFBC] hover:bg-[#A7FFBC] hover:text-[black] duration-medium text-3xl rounded-full w-14 h-14 flex justify-center items-center">
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
}
export default TextSide;
