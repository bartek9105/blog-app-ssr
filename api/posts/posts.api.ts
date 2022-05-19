import supabase from "../../config/supabase.config";

export const getPosts = async () => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, created_at, img_url, categories ( id, name, img_url )");
  return posts;
};
