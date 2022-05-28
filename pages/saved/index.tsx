import { useQuery } from "react-query";
import { getSavedPosts } from "../../api/posts/posts.api";

const SavedPage = () => {
  const { data: savedPosts } = useQuery("queryKey", () => getSavedPosts());
  console.log("saved debug", savedPosts);

  return <div>fasdfsaf</div>;
};

export default SavedPage;
