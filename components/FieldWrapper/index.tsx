import { PropsWithChildren } from "react";

type FieldWrapperProps = PropsWithChildren<{
  label?: string;
  error?: string;
}>;

const FieldWrapper = ({ children, label, error }: FieldWrapperProps) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-yellow-400 text-xs font-bold mb-4 text-widest">
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <span className="text-gray-400 text-sm mb-4">{error}</span>
      ) : null}
    </div>
  );
};

export default FieldWrapper;
