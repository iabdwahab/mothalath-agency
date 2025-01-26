type propsType = {
  direction: string;
};

function BlurryCircle({ direction = "left" }: propsType) {
  return (
    <div
      className={`absolute -z-10 bg-[#A7FFBC] ${direction === "left" ? "-left-1/4" : "-right-1/4"} top-[100px] h-[300px] w-1/2 rounded-full blur-[775px]`}
    ></div>
  );
}
export default BlurryCircle;
