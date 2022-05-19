import supabase from "../../config/supabase.config";
import { Category } from "../../types/Category.type";

export const getCategories = async () => {
  const { data: categories } = await supabase
    .from<Category>("categories")
    .select("*");
  return categories;
};
