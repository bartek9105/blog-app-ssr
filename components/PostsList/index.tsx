import { Post } from "../../types/Post.type";
import PostA from "../Post";

type PostsListProps = {
  posts: Post[];
};

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      <h6 className="text-gray-400 text-md mb-3 tracking-wider">Post List</h6>
      <ul>
        {posts?.map(({ id, title, img_url, categories }) => (
          <li key={id} className="mb-2">
            <PostA title={title} img_url={img_url} categories={categories} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
