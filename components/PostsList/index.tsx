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
      <h6 className="text-gray-400 text-xs mb-6 tracking-wider font-bold">
        {title.toUpperCase()}
      </h6>
      <ul>
        {posts?.map(
          ({
            id,
            title,
            img_url,
            categories,
            upvotes_count,
            created_at,
            comments,
          }) => (
            <li key={id} className="mb-6">
              <PostA
                href={`/post/${id}`}
                id={id}
                onUpVote={onUpVote}
                title={title}
                img_url={img_url}
                categories={categories}
                comments_count={comments.length}
                created_at={created_at}
              />
            </li>
          )
        )}
      </ul>
      {posts.length === 0 ? (
        <p className="text-lg text-gray-500 text-center mt-12">
          No posts found for this category
        </p>
      ) : null}
    </>
  );
};

export default PostsList;
