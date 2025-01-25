type propsType = {
  direction: string;
};

function BlurryCircle({ direction = 'left' }: propsType) {
  return <div className={`bg-[#A7FFBC] absolute -z-10 ${direction === 'left' ? '-left-1/4' : '-right-1/4 '} top-[100px] w-1/2 h-[300px] rounded-full blur-[775px]`}></div>;
}
export default BlurryCircle;
