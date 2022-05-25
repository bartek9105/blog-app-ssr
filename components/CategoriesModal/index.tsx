import { Category } from "../../types/Category.type";
import CategoryBadge from "../CategoryBadge";
import { X } from "react-feather";
import { routes } from "../../config/routes.config";
import Link from "next/link";

type CategoriesModalProps = {
  categories: Category[];
  onClose: () => void;
};

const CategoriesModal = ({ categories, onClose }: CategoriesModalProps) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-zinc-800 z-50 p-8">
      <div className="my-0 mx-auto mw-1/2">
        <div className="flex items-center text-gray-200 cursor-pointer mb-12 gap-2">
          <X onClick={onClose} />
          <h1 className="text-sm">Categories</h1>
        </div>
        <ul className="grid grid-cols-2 gap-y-8 justify-items-center overflow-y-hidden">
          {categories.map(({ id, name, img_url }) => (
            <li key={id} onClick={onClose}>
              <Link href={routes.category(id)}>
                <a>
                  <CategoryBadge name={name} img_url={img_url} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesModal;
