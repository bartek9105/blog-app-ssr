import type { Post } from "../../types/Post.type";
import Image from "next/image";
import { capitalize } from "lodash";
import { formatDistanceToNow } from "date-fns";

type PostProps = Post;

const PostA = ({ title, img_url, created_at, categories }: PostProps) => {
  const categoryName = capitalize(categories.name);
  const createdAt = formatDistanceToNow(new Date("2022-05-19"), {
    addSuffix: true,
  });

  return (
    <article className="bg-zinc-800 rounded">
      <div className="p-3 flex justify-between">
        <div className="flex items-center">
          <Image
            src={categories.img_url}
            width={24}
            height={24}
            className="rounded"
          />
          <span className="flex text-white text-xs font-bold ml-3">
            {categoryName}
          </span>
        </div>
      </div>
      <div className="relative w-1/1 h-48">
        <Image layout="fill" objectFit="cover" src={img_url} />
      </div>
      <div className="p-4">
        <h2 className="text-white text-sm mt-3 leading-6">{title}</h2>
      </div>
    </article>
  );
};

export default PostA;
