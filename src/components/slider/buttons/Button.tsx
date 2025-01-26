import { ReactNode } from "react";

type propsType = {
  children: ReactNode;
  onClick: VoidFunction;
  disabled: boolean;
};

function Button({ children, onClick, disabled }: propsType) {
  const classNames = `${disabled ? "text-[#A7FFBC1C]" : "bg-[#FFFFFF0D] text-[#A7FFBC] hover:bg-[#A7FFBC] hover:text-[black]"}  duration-medium text-3xl rounded-full w-14 h-14 flex justify-center items-center`;

  return (
    <button onClick={onClick} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
}
export default Button;
