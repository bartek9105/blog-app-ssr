import { omit } from "lodash";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPostsByCategory } from "../../api/posts/posts.api";
import CategoryBanner from "../../components/CategoryBanner";
import CategoryHint from "../../components/CategoryHint";
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

  const category = posts?.[0].categories;

  return (
    <>
      <PostNavigation />
      <div className="px-4 py-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:max-w-7xl mx-auto">
        {category ? (
          <CategoryHint
            categoryName={category.name}
            imgUrl={category.img_url}
          />
        ) : null}
        <div className="mt-6">{posts ? <PostsList posts={posts} /> : null}</div>
      </div>
    </>
  );
};

export default CategoryPage;
