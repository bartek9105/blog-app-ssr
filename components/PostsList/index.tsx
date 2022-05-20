import { Post } from "../../types/Post.type";
import PostA from "../Post";
import Link from "next/link";

type PostsListProps = {
  posts: Post[];
  onUpVote?: (postId: number) => void;
  upvotesCount?: number;
};

const PostsList = ({ posts, onUpVote, upvotesCount }: PostsListProps) => {
  const title = "Post List";
  return (
    <>
      <h6 className="text-gray-400 text-md mb-6 tracking-widest">
        {title.toUpperCase()}
      </h6>
      <ul>
        {posts?.map(({ id, title, img_url, categories, upvotes_count }) => (
          <li key={id} className="mb-6">
            <Link href={`post/${id}`}>
              <a>
                <PostA
                  id={id}
                  onUpVote={onUpVote}
                  title={title}
                  img_url={img_url}
                  categories={categories}
                  comments_count={12}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
