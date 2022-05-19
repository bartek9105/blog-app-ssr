import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";
import { getPosts } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";

const Home: NextPage = () => {
  const { data: categories } = useQuery("someKey", getCategories);
  const { data: posts } = useQuery("anotherKey", getPosts);

  console.log(posts);

  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
};

export default Home;
