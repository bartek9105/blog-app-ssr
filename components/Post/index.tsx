import type { Post } from "../../types/Post.type";
import Image from "next/image";
import { capitalize } from "lodash";
import { formatDistanceToNow } from "date-fns";
import { MessageCircle, Bookmark } from "react-feather";
import CategoryHint from "../CategoryHint";
import Link from "next/link";
import { routes } from "../../config/routes.config";

type PostProps = Omit<Post, "content"> & {
  href: string;
  onSave: () => void;
  commentsCount?: number;
};

const PostA = ({
  id,
  href,
  title,
  img_url,
  created_at,
  categories,
  commentsCount,
  onSave,
}: PostProps) => {
  const categoryName = capitalize(categories.name);

  const createdAt = formatDistanceToNow(new Date(created_at.split("T")[0]), {
    addSuffix: true,
  });

  return (
    <article className="bg-zinc-800 rounded">
      <div className="p-3 flex justify-between items-center">
        <Link href={routes.category(categories.id)}>
          <a>
            <CategoryHint
              imgUrl={categories.img_url}
              categoryName={categories.name}
            />
          </a>
        </Link>
        <span className="text-gray-400 text-xs">{createdAt}</span>
      </div>
      <Link href={href}>
        <a>
          <div className="relative w-1/1 h-48">
            <Image layout="fill" objectFit="cover" src={img_url} />
          </div>
        </a>
      </Link>
      <div className="p-4">
        <Link href={href}>
          <a>
            <h2 className="text-white text-sm mt-3 leading-6 mb-4 font-bold">
              {title}
            </h2>
          </a>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-300 text-sm">
            <div className="flex">
              <MessageCircle size={20} className="mr-2" />
              {commentsCount}
            </div>
            <Bookmark size={20} className="ml-6" onClick={onSave} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostA;
