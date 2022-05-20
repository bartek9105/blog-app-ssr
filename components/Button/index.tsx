import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <button type="button" className={className} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
