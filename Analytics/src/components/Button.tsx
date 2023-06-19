import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classes?: string;
}

const Button = ({ children, classes = "" }: ButtonProps) => {
  return (
    <button
      className={`bg-red-main text-white flex items-center justify-center rounded-full py-4 px-10 w-full lg:w-3/5 cursor-pointer ${classes}`}
    >
      {children}
    </button>
  );
};
export default Button;
