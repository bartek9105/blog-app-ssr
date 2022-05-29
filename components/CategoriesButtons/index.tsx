import { Category } from "../../types/Category.type";
import CategoryButton from "../CategoryButton";
import cn from "classnames";

type CategoriesButtonsProps = {
  categories?: Category[];
  onChange: (value: string) => void;
  value: string;
  className?: string;
};

const CategoriesButtons = ({
  categories,
  onChange,
  value,
  className,
}: CategoriesButtonsProps) => {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {categories?.map(({ id, name }) => (
        <li key={id} onClick={() => onChange(name)}>
          <CategoryButton categoryName={name} isActive={value === name} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesButtons;
