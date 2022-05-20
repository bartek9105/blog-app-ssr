import Image from "next/image";
import { capitalize } from "lodash";

type CategoryHintProps = {
  imgUrl: string;
  categoryName: string;
};

const CategoryHint = ({ imgUrl, categoryName }: CategoryHintProps) => {
  const categoryNameFormat = capitalize(categoryName);

  return (
    <div className="flex items-center">
      <Image
        src={imgUrl}
        alt={categoryName}
        width={24}
        height={24}
        className="rounded"
      />
      <span className="flex text-white text-xs font-bold ml-3">
        {categoryNameFormat}
      </span>
    </div>
  );
};

export default CategoryHint;
