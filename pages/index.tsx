import type { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPosts, upVotePost } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";
import PostsList from "../components/PostsList";
import Spinner from "../components/Spinner";
import { useGetCategories } from "../hooks/useGetCategories";

const postsQueryKey = "postsQueryKey";

const Home: NextPage = (props: any) => {
  const { categories, isCategoriesLoading } = useGetCategories();
  const { data: posts, isLoading: isPostsLoading } = useQuery(
    postsQueryKey,
    getPosts,
    {
      initialData: props.posts,
    }
  );
  const [upvotesCount, setUpvotesCount] = useState(posts.upvotes_count);

  const handleUpvotesCountIncrement = (postId: number | undefined) => {
    if (postId) {
      setUpvotesCount((upvotesCount: number) => upvotesCount + 1);
      upVotePost(postId);
    }
  };

  return (
    <div className="px-4 py-6">
      <div className="mb-6 lg:max-w-7xl mx-auto">
        {isCategoriesLoading ? (
          <Spinner />
        ) : (
          <CategoriesList categories={categories} />
        )}
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:max-w-7xl mx-auto">
        <div>
          {isPostsLoading ? (
            <Spinner />
          ) : (
            <PostsList
              posts={posts}
              upvotesCount={upvotesCount}
              onUpVote={handleUpvotesCountIncrement}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
