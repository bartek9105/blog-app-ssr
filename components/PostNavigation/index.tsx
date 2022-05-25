import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, MoreHorizontal } from "react-feather";
import { routes } from "../../config/routes.config";
import { useGetCategories } from "../../hooks/useGetCategories";
import CategoriesModal from "../CategoriesModal";

type PostNavigationProps = {
  onGoBack?: () => void;
};

const PostNavigation = ({ onGoBack }: PostNavigationProps) => {
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const { categories } = useGetCategories();

  return (
    <div className="bg-zinc-700 p-3 flex justify-between items-center">
      <Link href={routes.root()}>
        <a className="text-gray-400 text-sm flex items-center">
          <ArrowLeft className="mr-3" />
          <span>Back</span>
        </a>
      </Link>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsCategoriesModalOpen(true)}
      >
        <MoreHorizontal size={16} className="text-gray-400" />
        <span className="text-gray-400 text-xs">Categories</span>
      </div>
      {isCategoriesModalOpen ? (
        <CategoriesModal
          categories={categories}
          onClose={() => setIsCategoriesModalOpen(false)}
        />
      ) : null}
    </div>
  );
};

export default PostNavigation;
