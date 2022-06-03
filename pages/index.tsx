import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { dehydrate, QueryClient, useMutation, useQuery } from "react-query";
import {
  getCategories,
  getPopularCategories,
} from "../api/categories/categories.api";
import { getPosts, savePost } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";
import CategoryCard from "../components/CategoryCard";
import Layout from "../components/Layout";
import PopularPost from "../components/PopularPost";
import PostsList from "../components/PostsList";
import { routes } from "../config/routes.config";
import supabase from "../config/supabase.config";
import { Post } from "../types/Post.type";

const postsQueryKey = "postsQueryKey";
const categoriesQueryKey = "categoriesQueryKey";

const Home: NextPage = (props: any) => {
  const user = supabase.auth.user();

  const { data: categories } = useQuery("categories", getCategories);
  const { data: posts } = useQuery("posts", getPosts);

  const popularPosts = posts
    ?.filter((post: Post) => post?.comments?.length)
    .sort((a: any, b: any) => b.comments.length - a.comments.length)
    .splice(0, 6);

  const { data: popularCategories } = useQuery(
    "popularCategoriesQueryKey",
    getPopularCategories
  );

  const { mutateAsync: handleSavePost } = useMutation(
    "savePostMutationQueryKey",
    (data: any) => savePost(data)
  );

  return (
    <>
      <Head>
        <title>Feather: search through posts</title>
      </Head>
      <Layout displayPostNavigation={false}>
        <div className="mb-6 lg:max-w-7xl mx-auto">
          <CategoriesList categories={categories} />
        </div>
        <div className="md:flex md:gap-16 lg:max-w-7xl mx-auto">
          <div className="w-1/1 md:w-3/5">
            {posts && (
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
          <div className="text-white hidden sm:hidden md:block">
            <div className="mb-8">
              <h6 className="text-gray-400 text-xs tracking-wider font-bold mb-6">
                Popular categories
              </h6>
              <ul className="flex flex-wrap gap-4">
                {popularCategories?.map(({ id, name, img_url }) => (
                  <li key={id} className="cursor-pointer">
                    <Link href={routes.category(id)} passHref>
                      <a aria-label="category">
                        <CategoryCard name={name} img_url={img_url} />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <h6 className="text-gray-400 text-xs tracking-wider font-bold mb-6">
              Hot posts
            </h6>
            <ul className="flex flex-col gap-4">
              {popularPosts?.map(({ id, title, img_url }: Post) => (
                <li key={id} className="cursor-pointer">
                  <Link href={routes.post.details(id)} passHref>
                    <a aria-label="category">
                      <PopularPost title={title} img_url={img_url} />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("posts", getPosts);
  await queryClient.prefetchQuery("categories", getCategories);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
