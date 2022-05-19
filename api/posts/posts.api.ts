import supabase from "../../config/supabase.config";

export const getPosts = async () => {
  const { data: posts, error } = await supabase.from("posts").select("*");
  return posts;
};
