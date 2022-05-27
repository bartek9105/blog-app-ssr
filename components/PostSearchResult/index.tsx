import { Post } from "../../types/Post.type";
import Image from "next/image";

type PostSearchResultProps = {
  post: Post;
};

const PostSearchResult = ({
  post: { title, img_url, categories },
}: PostSearchResultProps) => {
  return (
    <article className="flex text-white gap-4 bg-zinc-700 p-4 rounded-lg">
      <div className="relative">
        <Image
          src={img_url}
          alt={title}
          layout="fixed"
          width={72}
          height={72}
          className="rounded"
        />
      </div>
      <div className="flex flex-col justify-between text-sm">
        <span className="text-gray-400">{categories.name}</span>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default PostSearchResult;
