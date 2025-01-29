import triangleIcon from "/icons/triangle-icon.png";

function ConsultationLink() {
  return (
    <a
      href="#"
      className="relative mx-auto flex w-fit items-center gap-4 overflow-hidden rounded-lg border border-background p-4 text-background"
    >
      <div className="absolute -left-28 top-0 -z-10 aspect-square w-1/2 bg-[#244441] blur-[142px]"></div>
      <div className="absolute -right-28 top-0 -z-10 aspect-square w-1/2 bg-[#244441] blur-[142px]"></div>
      <p>إذا كنت ترغب في معرفة المزيد فاحجز استشارتك الآن</p>
      <img src={triangleIcon} alt="Icon" className="w-7" />
    </a>
  );
}
export default ConsultationLink;
