import questionMark from '/icons/question-mark.svg';
import plusIcon from '/icons/plus-icon.svg';
import { useRef, useState } from 'react';

function Question() {
  const [open, setOpen] = useState(false);
  const paragraphRef: { current: HTMLParagraphElement | null } = useRef(null);

  function handleClick() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className={`grid grid-cols-question-card gap-x-question-card border border-half-white px-3 md:px-8 py-4 rounded-2xl`}>
      <button onClick={handleClick} className="focus-visible:outline rounded-lg outline-white p-2 grid grid-cols-question-card col-span-3 gap-question-card w-full">
        <div className="bg-main flex justify-center items-center w-7 rounded-full aspect-square">
          <img src={questionMark} alt="Icon" className="w-[10px]" />
        </div>
        <p className="font-bold text-start text-lg md:text-xl">ما هو التسويق الإلكتروني؟ ولماذا هو مهم لعملي؟</p>
        <div className="bg-background flex justify-center items-center w-[30px] rounded-full aspect-square">
          <img src={plusIcon} alt="Show more" className={`w-4 duration-medium ${open ? 'rotate-45' : ''}`} />
        </div>
      </button>

      <div className={`col-start-2 font-thin max-h-0 overflow-hidden duration-300`} style={{ maxHeight: open ? paragraphRef.current?.offsetHeight : '0' }}>
        <p ref={paragraphRef} className="pt-4 text-lg">
          يعتمد الوقت الذي تستغرقه لرؤية النتائج على العديد من العوامل، بما في ذلك طبيعة عملك، وحجم المنافسة، والميزانية المخصصة. ومع ذلك، نعمل على تقديم نتائج ملموسة في أقرب وقت ممكن.
        </p>
      </div>
    </div>
  );
}
export default Question;
