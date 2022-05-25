import Link from "next/link";
import { routes } from "../../config/routes.config";
import { Category } from "../../types/Category.type";
import CategoryBadge from "../CategoryBadge";

type CategoriesListProps = {
  categories: Category[] | null;
};

const CategoriesList = ({ categories }: CategoriesListProps) => {
  const title = "Categories";
  return (
    <>
      <h6 className="text-gray-400 text-xs mb-3 tracking-wider font-bold">
        {title.toUpperCase()}
      </h6>
      <ul className="flex overflow-y-hidden">
        {categories?.map(({ id, name, img_url }) => (
          <li className="mr-4 last-of-type:mr-0" key={id}>
            <Link href={routes.category(id)}>
              <a>
                <CategoryBadge key={id} name={name} img_url={img_url} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesList;
