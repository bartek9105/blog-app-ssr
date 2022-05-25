import { TextareaHTMLAttributes } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

const Textarea = ({ label, error, ...restProps }: TextareaProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-yellow-400 text-xs font-bold mb-4 text-widest">
        {label}
      </label>
      <textarea
        className="border-2 border-gray-600 bg-zinc-900 p-3 rounded-lg mb-4 outline-none text-xs text-white"
        {...restProps}
      />
      <span className="text-gray-400 text-sm mb-6">{error}</span>
    </div>
  );
};

export default Textarea;
