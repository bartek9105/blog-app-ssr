import Image from "next/image";
import { Category } from "../../types/Category.type";
import { capitalize } from "lodash";

type CategoryBadgeProps = Category;

const CategoryBadge = ({ name, img_url }: CategoryBadgeProps) => {
  const badgeName = capitalize(name);

  return (
    <div className="relative text-sm flex justify-center align-center w-32 py-3 bg-neutral-900 text-white rounded-lg">
      {" "}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50">
        <Image
          src={img_url}
          alt={name}
          layout="responsive"
          width={128}
          height={64}
          className="rounded"
        />
      </div>
      <span className="z-10 px-2 py-1 rounded-lg">{badgeName}</span>
    </div>
  );
};

export default CategoryBadge;
