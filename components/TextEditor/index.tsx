import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "./TextEditor.module.css";
import cn from "classnames";

type TextEditorProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const TextEditor = ({
  value,
  onChange,
  className,
  ...restProps
}: TextEditorProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      {...restProps}
      className={cn("bg-white text-black", className)}
    />
  );
};

export default TextEditor;
