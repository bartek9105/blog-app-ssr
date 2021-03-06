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
      <div className="w-8 h-8 relative">
        <Image
          src={imgUrl}
          alt={categoryName}
          objectFit="cover"
          layout="fill"
          className="rounded"
        />
      </div>
      <span className="flex text-white text-xs font-bold ml-3">
        {categoryNameFormat}
      </span>
    </div>
  );
};

export default CategoryHint;
