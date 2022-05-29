import { Post } from "../../types/Post.type";
import PostA from "../Post";

type PostsListProps = {
  posts?: Post[];
  onSave?: (id: number | undefined) => void;
};

const PostsList = ({ posts, onSave }: PostsListProps) => {
  const title = "Post List";
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h6 className="text-gray-400 text-xs tracking-wider font-bold">
            {title.toUpperCase()}
          </h6>
        </div>
      </div>
      <ul>
        {posts?.map(
          ({ id, title, img_url, categories, created_at, comments }) => (
            <li key={id} className="mb-6">
              <PostA
                href={`/post/${id}`}
                id={id}
                onSave={() => onSave?.(id)}
                title={title}
                img_url={img_url}
                categories={categories}
                commentsCount={comments?.length}
                created_at={created_at}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default PostsList;
