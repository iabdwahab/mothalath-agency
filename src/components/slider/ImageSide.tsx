import correctIcon from '/icons/correct-circle.svg';
import personOne from '/imgs/person/person-1.png';
import personTwo from '/imgs/person/person-2.png';

import sliderPhoto from '/imgs/slider/photo-1.png';
import facebookAd from '/imgs/slider/facebook-ad.png';
import triangle from '/imgs/slider/triangle-icon.png';

function ImageSide() {
  return (
    <div className="relative mx-auto max-w-[500px">
      <div className="absolute top-10 max-w-[350px] grid grid-cols-[auto,1fr,auto] items-center gap-4 text-main bg-light-green p-4 rounded-xl">
        <img src={correctIcon} alt="Icon" />
        <div className="">
          <h5 className="font-bold">الوصول إلى جمهور أوسع</h5>
          <p className="font-bold text-xs">عرض منتجاتك وخدماتك لعملاء جدد على مدار الساعة طوال أيام الأسبوع.</p>
        </div>
        <div className="flex items-center">
          <img src={personOne} alt="Person" />
          <img src={personTwo} alt="Person" className="-mr-6" />
        </div>
      </div>

      <div className="md:w-4/5 mx-auto rounded-[40px] overflow-hidden bg-white">
        <img src={sliderPhoto} alt="Photo" className="w-full object-cover" />
      </div>

      <div className="grid grid-cols-[1fr,auto] gap-12 relative pt-4 pr-4 -mt-[100px] mr-auto w-fit bg-[#79FD730D] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={triangle} alt="Triangle" className="justify-self-start w-14" />
        <img src={facebookAd} alt="Photo" className="justify-self-end" />
      </div>
    </div>
  );
}
export default ImageSide;
