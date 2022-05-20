import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPost } from "../../api/posts/posts.api";
import UpVoteButton from "../../components/UpVoteButton";
import PostNavigation from "../../components/PostNavigation";
import CategoryHint from "../../components/CategoryHint";

const PostDetailsPage = () => {
  const {
    query: { id },
  } = useRouter();
  const postId = Number(id);

  const { data: post } = useQuery(["post", postId], async () =>
    getPost(postId)
  );

  return (
    <>
      {post ? (
        <>
          <PostNavigation />
          <div className="px-4 py-6">
            <CategoryHint
              imgUrl={post.categories.img_url}
              categoryName={post.categories.name}
            />
            <h2 className="text-white mt-4 mb-4">{post.title}</h2>
            <UpVoteButton upVotesCount={post.upvotes_count} />
            <p className="text-gray-400 text-sm tracking-wider mt-4">
              {post?.content}
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default PostDetailsPage;
