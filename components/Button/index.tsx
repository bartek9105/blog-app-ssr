import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary";
};

const Button = ({
  children,
  variant,
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        className,
        "text-sm flex items-center rounded gap-2 w-full justify-center",
        {
          "bg-yellow-400 hover:bg-yellow-500 ease-in-out duration-200 text-black px-3 py-1":
            variant === "primary",
        }
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
