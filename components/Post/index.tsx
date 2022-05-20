import type { Post } from "../../types/Post.type";
import Image from "next/image";
import { capitalize } from "lodash";
import { formatDistanceToNow } from "date-fns";
import UpVoteButton from "../UpVoteButton";
import { MessageCircle, Bookmark } from "react-feather";
import CategoryHint from "../CategoryHint";

type PostProps = Post & {
  onUpVote: (postId: number) => void;
};

const PostA = ({
  id,
  title,
  img_url,
  created_at,
  categories,
  upvotes_count,
  comments_count,
  onUpVote,
}: PostProps) => {
  const categoryName = capitalize(categories.name);
  const createdAt = formatDistanceToNow(new Date("2022-05-19"), {
    addSuffix: true,
  });

  return (
    <article className="bg-zinc-800 rounded">
      <div className="p-3 flex justify-between">
        <CategoryHint
          imgUrl={categories.img_url}
          categoryName={categories.name}
        />
      </div>
      <div className="relative w-1/1 h-48">
        <Image layout="fill" objectFit="cover" src={img_url} />
      </div>
      <div className="p-4 ">
        <h2 className="text-white text-sm mt-3 leading-6 mb-3">{title}</h2>
        <div className="flex items-center justify-between">
          <div onClick={() => onUpVote(id)}>
            <UpVoteButton upVotesCount={upvotes_count} />
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <div className="flex">
              <MessageCircle size={20} className="mr-2" />
              {comments_count}
            </div>
            <Bookmark size={20} className="ml-6" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostA;
