import supabase from "../../config/supabase.config";

export const getCategories = async () => {
  const { data: categories } = await supabase.from("categories").select("*");
  return categories;
};
