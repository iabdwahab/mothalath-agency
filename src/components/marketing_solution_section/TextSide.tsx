import { useContext } from "react";
// import greenCircle from "/imgs/marketing_section/green-circle.png";
import { WebsiteLangContext } from "../../App";
import { HomePageDataContext } from "../../pages/HomePage";

function TextSide() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const {
    marketing_solutions: {
      text_side: { first_text, middle_text, last_text },
    },
  } = useContext(HomePageDataContext);

  return (
    <div className="grid content-center items-center gap-10 max-md:text-center md:grid-cols-3 md:grid-rows-[auto,auto]">
      <p
        className="md:row-start-2"
        dangerouslySetInnerHTML={{ __html: first_text[websiteLang] }}
      >
        {/* نحن في <span className="text-background">مثلث</span>، متخصصون في التسويق
        الالكتروني نقدم حلولاً تسويقية مبتكرة تساعد الشركات على تحقيق نمو مستدام
        في عالم التجارة الإلكترونية. من خلال افضل الاستراتيجيات، نضمن لك زيادة
        وصول علامتك التجارية إلى الجمهور المستهدف وتحويل{" "}
        <span className="text-background">الزوار</span> إلى{" "}
        <span className="text-background">عملاء</span>. */}
      </p>
      <div className="relative flex items-center justify-center md:col-start-2 md:row-span-2">
        <span className="absolute -z-20 h-full w-3/4 bg-[#ffffff2d] blur-3xl"></span>
        <h2
          className="flex flex-col text-center text-5xl font-black leading-normal"
          dangerouslySetInnerHTML={{ __html: middle_text[websiteLang] }}
        >
          {/* <span>لنسلط</span>
          <span className="relative flex justify-center">
            <img
              src={greenCircle}
              alt="Circle"
              className="absolute -top-1 -z-10 w-[230px] -rotate-6"
            />
            <img
              src={greenCircle}
              alt="Circle"
              className="absolute -top-1 -z-10 w-[230px]"
            />
            الـــضــوء
          </span>
          <span>على ما يميز</span>
          <span>شركــتــــــك</span> */}
        </h2>
      </div>
      <p
        className="md:col-start-3"
        dangerouslySetInnerHTML={{ __html: last_text[websiteLang] }}
      >
        {/* <span className="text-background">حل مشاكل العملاء</span>: تحديد المشاكل
        التي تواجهها الشركات في مجال التسويق الإلكتروني وكيف يمكن لخدماتك حل هذه
        المشاكل. */}
      </p>
    </div>
  );
}
export default TextSide;
