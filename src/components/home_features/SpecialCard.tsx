import trinagleIcon from "/icons/triangle-icon.png";

function SpecialCard() {
  return (
    <div className="relative -top-7 flex min-h-[210px] w-[calc(100%-32px)] flex-col gap-4 rounded-lg bg-background p-8 pl-12 text-xl backdrop-blur-2xl">
      <h3 className="font-black text-main">زيادة المبيعات</h3>
      <p className="text-black">
        نوفر لك الاستراتيجيات اللازمة لزيادة مبيعاتك وتحقيق عائد استثمار مرتفع.
      </p>
      <img
        src={trinagleIcon}
        alt="Icon"
        className="absolute -bottom-5 -left-6 w-8 rotate-180"
      />
    </div>
  );
}
export default SpecialCard;
