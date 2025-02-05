type propsType = {
  title: string;
  description: string;
  blurryCirclePositionX: "left" | "right";
  blurryCirclePositionY: "top" | "bottom";
};

function RegularCard({
  title,
  description,
  blurryCirclePositionX,
  blurryCirclePositionY,
}: propsType) {
  return (
    <div className="relative flex min-h-[210px] flex-col gap-4 overflow-hidden rounded-lg border-x border-[#24444131] bg-[#00000054] p-8 pl-12 text-xl shadow-lg shadow-[#192e2b2f] backdrop-blur-2xl">
      <span
        className={`absolute ${blurryCirclePositionY === "top" ? "-top-1/2" : "-bottom-1/2"} ${blurryCirclePositionX === "left" ? "-left-1/2" : "-right-1/2"} -z-10 h-full w-full bg-[#244441] blur-[123px]`}
      ></span>
      <h3 className="font-black text-background">{title}</h3>
      <p className="font-light">{description} </p>
    </div>
  );
}
export default RegularCard;
