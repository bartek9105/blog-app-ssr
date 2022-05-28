import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = ({ label, error, ...restProps }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-yellow-400 text-xs font-bold mb-4 text-widest">
          {label}
        </label>
      ) : null}
      <input
        className="border-2 border-gray-600 bg-zinc-900 p-3 rounded-lg mb-4 outline-none text-xs text-white"
        {...restProps}
      />
      {error ? (
        <span className="text-gray-400 text-sm mb-4">{error}</span>
      ) : null}
    </div>
  );
};

export default Input;
