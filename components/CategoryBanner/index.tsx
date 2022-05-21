import { Category } from "../../types/Category.type";
import Image from "next/image";

type CategoryBannerProps = {
  category: Category;
};

const CategoryBanner = ({
  category: { name, img_url },
}: CategoryBannerProps) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={img_url}
          alt={name}
          layout="responsive"
          objectFit="fill"
          width={128}
          height={16}
          className="rounded"
        />
        <span className="absolute text-white top-0 left-0 px-2 py-1 rounded-lg">
          {name}
        </span>
      </div>
    </div>
  );
};

export default CategoryBanner;
