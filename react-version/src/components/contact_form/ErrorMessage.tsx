import { ReactNode } from "react";

function ErrorMessage({ children }: { children: ReactNode }) {
  return <p className="text-sm text-red-500">{children}</p>;
}
export default ErrorMessage;
