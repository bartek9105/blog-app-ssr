import cn from "classnames";

type CategoryButtonProps = {
  categoryName: string;
  isActive: boolean;
};

const CategoryButton = ({ categoryName, isActive }: CategoryButtonProps) => {
  return (
    <div
      className={cn(
        "border-2 bg-zinc-700 px-4 py-2 text-sm rounded w-fit cursor-pointer",
        {
          "border-gray-500": !isActive,
          "border-yellow-400": isActive,
        }
      )}
    >
      {categoryName}
    </div>
  );
};

export default CategoryButton;
