import triangleIcon from "/icons/triangle-icon.png";
function PlaceServiceCard() {
  return (
    <a
      href="#"
      className="flex w-full flex-col justify-between gap-4 rounded-3xl border border-[#FFFFFF14] bg-background px-8 py-10 backdrop-blur-xl"
    >
      <h5 className="text-3xl font-black text-main">احجز خدمتك الآن</h5>
      <div className="relative -left-2 top-5 mr-auto flex aspect-square w-12 items-center justify-center rounded-full bg-main pt-1">
        <img src={triangleIcon} alt="" className="w-8 rotate-180" />
      </div>
    </a>
  );
}
export default PlaceServiceCard;
