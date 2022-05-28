import supabase from "../../config/supabase.config";
import { Post } from "../../types/Post.type";

export const getPosts = async () => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      "id, title, created_at, img_url, upvotes_count, categories ( id, name, img_url ), comments (*)"
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
      "id, title, content, created_at, img_url, upvotes_count, categories ( id, name, img_url ), comments (*, user (*))"
    )
    .eq("id", postId);
  return post?.[0];
};

export const getPostsByCategory = async (categoryId: number | undefined) => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      "id, title, content, created_at, img_url, upvotes_count, categories ( id, name, img_url ), comments (*)"
    )
    .eq("category", categoryId);

  return posts;
};

export const addNewPost = async (post: Post) => {
  const { data, error } = await supabase.from("posts").insert([post]);
};

type SearchPostsConfig = {
  query: string;
};

export const searchPosts = async ({ query }: SearchPostsConfig) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, categories (*)")
    .textSearch("content", `${query}`);
  return data;
};

export const getSavedPosts = async () => {
  const { data, error } = await supabase.from("saved").select("*");
  return data;
};
