import { Post } from "../../types/Post.type";
import PostA from "../Post";

type PostsListProps = {
  posts: Post[];
  onUpVote?: (postId: number) => void;
  upvotesCount?: number;
};

const PostsList = ({ posts, onUpVote, upvotesCount }: PostsListProps) => {
  const title = "Post List";
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h6 className="text-gray-400 text-xs tracking-wider font-bold">
            {title.toUpperCase()}
          </h6>
          <ul className="flex items-center text-gray-500 text-xs font-bold gap-2">
            <li>News</li>
            <li>Trends</li>
          </ul>
        </div>
      </div>
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
