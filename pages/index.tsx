import type { NextPage } from "next";
import { useMutation, useQuery } from "react-query";
import { getPosts, savePost } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";
import Layout from "../components/Layout";
import PostsList from "../components/PostsList";
import Spinner from "../components/Spinner";
import supabase from "../config/supabase.config";
import { useGetCategories } from "../hooks/useGetCategories";

const postsQueryKey = "postsQueryKey";

const Home: NextPage = (props: any) => {
  const user = supabase.auth.user();

  const { categories, isCategoriesLoading } = useGetCategories();
  const { data: posts, isLoading: isPostsLoading } = useQuery(
    postsQueryKey,
    getPosts,
    {
      initialData: props.posts,
    }
  );

  const { mutateAsync: handleSavePost } = useMutation(
    "somequery",
    (data: any) => savePost(data)
  );

  return (
    <Layout displayPostNavigation={false}>
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
              onSave={(id) =>
                handleSavePost({
                  post: id,
                  user: user?.id,
                })
              }
              posts={posts}
            />
          )}
        </div>
      </div>
    </Layout>
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
