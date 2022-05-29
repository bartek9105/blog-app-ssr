import supabase from "../../config/supabase.config";

type CommentConfig = {
  post_id: number;
  content: string;
  user: string;
};

export const addComment = async (data: CommentConfig) => {
  await supabase.from("comments").insert([data]);
};
