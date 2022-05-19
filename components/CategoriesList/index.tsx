import { Category } from "../../types/Category.type";
import CategoryBadge from "../CategoryBadge";

type CategoriesListProps = {
  categories: Category[] | null;
};

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="flex overflow-y-scroll">
      {categories?.map(({ id, name, img_url }) => (
        <div className="mr-4 last-of-type:mr-0" key={id}>
          <CategoryBadge key={id} name={name} img_url={img_url} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
