import supabase from "../../config/supabase.config";
import { Post } from "../../types/Post.type";

export const getPosts = async () => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      "id, title, created_at, img_url, categories ( id, name, img_url ), comments (*)"
    )
    .order("created_at", { ascending: false });
  return posts;
};

export const getPost = async (postId: number) => {
  const { data: post, error } = await supabase
    .from<Post>("posts")
    .select(
      "id, title, content, created_at, img_url, categories ( id, name, img_url ), comments (*, user (*))"
    )
    .eq("id", postId);
  return post?.[0];
};

export const getPostsByCategory = async (categoryId: number | undefined) => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      "id, title, content, created_at, img_url, categories ( id, name, img_url ), comments (*)"
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

export const getSavedPosts = async ({ id }: any) => {
  const { data, error } = await supabase
    .from("saved")
    .select("post(*, categories (*), comments (*))")
    .eq("user", id);
  const transformedData = data?.map(({ post }) => {
    return {
      ...post,
    };
  });

  return transformedData;
};

type SavePostConfig = {
  post: number;
  user: number;
};

export const savePost = async ({ post, user }: SavePostConfig) => {
  const { data, error } = await supabase
    .from("saved")
    .insert([{ post }, { user }]);

  return data;
};
