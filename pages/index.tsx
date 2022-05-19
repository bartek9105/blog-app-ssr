import type { NextPage } from "next";
import { QueryClient, useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";
import { getPosts } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";
import PostsList from "../components/PostsList";

const Home: NextPage = (props: any) => {
  const { data: categories } = useQuery("someKey", getCategories);
  const { data: posts } = useQuery("anotherKey", getPosts, {
    initialData: props.posts,
  });

  return (
    <>
      <CategoriesList categories={categories} />
      <PostsList posts={posts} />
    </>
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
