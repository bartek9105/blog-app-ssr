import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...restProps }: InputProps) => {
  return (
    <input
      className="border-2 border-gray-600 bg-zinc-900 p-3 rounded-lg mb-4 outline-none text-xs text-white"
      {...restProps}
    />
  );
};

export default Input;
