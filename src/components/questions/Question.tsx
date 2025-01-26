import questionMark from "/icons/question-mark.svg";
import plusIcon from "/icons/plus-icon.svg";
import { useRef, useState } from "react";

function Question() {
  const [open, setOpen] = useState(false);
  const paragraphRef: { current: HTMLParagraphElement | null } = useRef(null);

  function handleClick() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div
      className={`grid grid-cols-question-card gap-x-question-card rounded-2xl border border-half-white px-3 py-4 md:px-8`}
    >
      <button
        onClick={handleClick}
        className="col-span-3 grid w-full grid-cols-question-card gap-question-card rounded-lg p-2 outline-white focus-visible:outline"
      >
        <div className="flex aspect-square w-7 items-center justify-center rounded-full bg-main">
          <img src={questionMark} alt="Icon" className="w-[10px]" />
        </div>
        <p className="text-start text-lg font-bold md:text-xl">
          ما هو التسويق الإلكتروني؟ ولماذا هو مهم لعملي؟
        </p>
        <div className="flex aspect-square w-[30px] items-center justify-center rounded-full bg-background">
          <img
            src={plusIcon}
            alt="Show more"
            className={`w-4 duration-medium ${open ? "rotate-45" : ""}`}
          />
        </div>
      </button>

      <div
        className={`col-start-2 max-h-0 overflow-hidden font-thin duration-300`}
        style={{ maxHeight: open ? paragraphRef.current?.offsetHeight : "0" }}
      >
        <p ref={paragraphRef} className="pt-4 text-lg">
          يعتمد الوقت الذي تستغرقه لرؤية النتائج على العديد من العوامل، بما في
          ذلك طبيعة عملك، وحجم المنافسة، والميزانية المخصصة. ومع ذلك، نعمل على
          تقديم نتائج ملموسة في أقرب وقت ممكن.
        </p>
      </div>
    </div>
  );
}
export default Question;
