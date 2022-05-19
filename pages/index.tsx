import type { NextPage } from "next";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";
import supabase from "../config/supabase.config";

const Home: NextPage = () => {
  const { data: categories } = useQuery("someKey", getCategories);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
