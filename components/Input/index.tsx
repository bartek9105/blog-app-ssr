import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = ({ label, error, ...restProps }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-yellow-400 text-sm mb-4">{label}</label>
      <input
        className="border-2 border-gray-600 bg-zinc-900 p-2 rounded mb-4 outline-none"
        {...restProps}
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
