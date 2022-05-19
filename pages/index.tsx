import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";
import CategoriesList from "../components/CategoriesList";

const Home: NextPage = () => {
  const { data: categories } = useQuery("someKey", getCategories);

  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
};

export default Home;
