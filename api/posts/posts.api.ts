import supabase from "../../config/supabase.config";
import { Post } from "../../types/Post.type";

export const getPosts = async () => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      "id, title, created_at, img_url, upvotes_count, categories ( id, name, img_url )"
    );
  return posts;
};

export const upVotePost = async (postId: number) => {
  const { data, error } = await supabase.rpc("increment_upvotes_count", {
    row_id: postId,
  });
};

export const getPost = async (postId: number) => {
  const { data: post, error } = await supabase
    .from<Post>("posts")
    .select(
      "id, title, content, created_at, img_url, upvotes_count, categories ( id, name, img_url )"
    )
    .eq("id", postId);
  return post?.[0];
};

export const getPostsByCategory = async (categoryId: number) => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      "id, title, content, created_at, img_url, upvotes_count, categories ( id, name, img_url )"
    )
    .eq("category", categoryId);

  return posts;
};
