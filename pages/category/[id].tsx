import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPostsByCategory } from "../../api/posts/posts.api";
import PostNavigation from "../../components/PostNavigation";
import PostsList from "../../components/PostsList";
import Image from "next/image";
import Spinner from "../../components/Spinner";
import { useGetCategories } from "../../hooks/useGetCategories";
import Layout from "../../components/Layout";

const CategoryPage = () => {
  const {
    query: { id },
  } = useRouter();

  const categoryId = Number(id);

  const { categories, isCategoriesLoading } = useGetCategories();

  const currentCategory = categories?.find(({ id }) => id === categoryId);

  const { data: posts, isLoading: isPostsLoading } = useQuery(
    ["posts", categoryId],
    async () => {
      return getPostsByCategory(currentCategory?.id);
    }
  );

  return (
    <Layout>
      <div className="relative w-1/1 h-24 flex items-center justify-center">
        {currentCategory && !isCategoriesLoading ? (
          <>
            <Image
              alt={currentCategory.name}
              layout="fill"
              objectFit="cover"
              src={currentCategory.img_url}
              className="opacity-50"
            />
            <span className="text-gray-200 text-2xl z-10">
              {currentCategory.name}
            </span>
          </>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="pb-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:max-w-7xl mx-auto">
        {isPostsLoading ? (
          <Spinner />
        ) : (
          <div className="mt-6">
            {posts ? <PostsList posts={posts} /> : null}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
