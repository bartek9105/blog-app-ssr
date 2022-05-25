import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
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
        "text-sm flex items-center rounded gap-2 w-full justify-center ease-in-out duration-200 px-3 py-3",
        {
          "bg-yellow-400 hover:bg-yellow-500 text-black disabled:bg-yellow-100":
            variant === "primary",
        },
        {
          "bg-zinc-900 text-white": variant === "secondary",
        }
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
