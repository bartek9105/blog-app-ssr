import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPostsByCategory } from "../../api/posts/posts.api";
import PostNavigation from "../../components/PostNavigation";
import PostsList from "../../components/PostsList";

const CategoryPage = () => {
  const {
    query: { id },
  } = useRouter();

  const categoryId = Number(id);

  const { data: posts } = useQuery(["posts", categoryId], async () => {
    if (categoryId) return getPostsByCategory(categoryId);
  });

  return (
    <>
      <PostNavigation />
      <div className="llg:grid lg:grid-cols-2 lg:gap-4 lg:max-w-7xl mx-auto">
        <div>{posts ? <PostsList posts={posts} /> : null}</div>
      </div>
    </>
  );
};

export default CategoryPage;
