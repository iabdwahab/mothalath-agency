function RegularCard() {
  return (
    <div className="relative flex min-h-[210px] flex-col gap-4 overflow-hidden rounded-lg bg-[#00000054] p-8 pl-12 text-xl shadow-lg shadow-[#192e2b2f] backdrop-blur-2xl">
      <span className="absolute -bottom-1/3 -left-1/2 -z-10 h-1/2 w-full bg-[#244441] blur-[123px]"></span>
      <h3 className="font-black text-background">تفاعل أكبر مع العملاء</h3>
      <p className="font-light">
        ننشئ حملات تسويقية تفاعلية تزيد من تفاعل العملاء مع علامتك التجارية.
      </p>
    </div>
  );
}
export default RegularCard;
