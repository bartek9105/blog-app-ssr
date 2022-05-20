import type { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";
import { getPosts, upVotePost } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";
import PostsList from "../components/PostsList";

const categoriesQueryKey = "categoriesQueryKey";
const postsQueryKey = "postsQueryKey";

const Home: NextPage = (props: any) => {
  const { data: categories } = useQuery(categoriesQueryKey, getCategories);
  const { data: posts } = useQuery(postsQueryKey, getPosts, {
    initialData: props.posts,
  });
  const [upvotesCount, setUpvotesCount] = useState(posts.upvotes_count);

  const handleUpvotesCountIncrement = (postId: number | undefined) => {
    if (postId) {
      setUpvotesCount((upvotesCount: number) => upvotesCount + 1);
      upVotePost(postId);
    }
  };

  return (
    <div className="px-4">
      <div className="py-6 lg:max-w-7xl mx-auto">
        <CategoriesList categories={categories} />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:max-w-7xl mx-auto">
        <div>
          <PostsList
            posts={posts}
            upvotesCount={upvotesCount}
            onUpVote={handleUpvotesCountIncrement}
          />
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
