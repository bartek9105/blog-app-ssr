import supabase from "../../config/supabase.config";
import { Category } from "../../types/Category.type";

export const getCategories = async () => {
  const { data: categories } = await supabase
    .from<Category>("categories")
    .select("*");
  return categories;
};

export const getPopularCategories = async () => {
  const { data: postCategories } = await supabase
    .from("posts")
    .select("category");

  const result = postCategories?.reduce(
    (acc: any, o: any) => ((acc[o.category] = (acc[o.category] || 0) + 1), acc),
    {}
  );

  const popularCategories = Object.keys(result)
    .sort((a: any, b: any) => result[b] - result[a])
    .splice(0, 4);

  const { data: categories } = await supabase.from("categories").select("*");

  return popularCategories.map((popularCategory) =>
    categories?.find(({ id }) => id === Number(popularCategory))
  );
};
