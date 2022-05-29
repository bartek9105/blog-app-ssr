import { Bookmark } from "react-feather";
import { useQuery } from "react-query";
import { getSavedPosts } from "../../api/posts/posts.api";
import Layout from "../../components/Layout";
import PostsList from "../../components/PostsList";
import supabase from "../../config/supabase.config";

const SavedPage = () => {
  const user = supabase.auth.user();

  const { data: savedPosts } = useQuery("queryKey", () => getSavedPosts(user));

  return (
    <Layout>
      <div className="flex items-center gap-3 mb-12">
        <Bookmark />
        <h2 className="font-bold">Your saved posts</h2>
      </div>
      <PostsList posts={savedPosts} />
    </Layout>
  );
};

export default SavedPage;
