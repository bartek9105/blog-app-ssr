import Image from "next/image";
import { Post } from "../../types/Post.type";

type PopularPostProps = Pick<Post, "title" | "img_url">;

const PopularPost = ({ title, img_url }: PopularPostProps) => {
  return (
    <div className="ease-in-out duration-200 flex gap-4 items-center px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700">
      <div className="relative w-8 h-8">
        <Image
          src={img_url}
          alt={title}
          className="rounded"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <span className="text-gray-300 text-sm">{title}</span>
    </div>
  );
};

export default PopularPost;
