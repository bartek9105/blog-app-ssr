import { addNewPost } from "../../../api/posts/posts.api";
import NewPostForm from "../../../components/NewPostForm";
import { useGetCategories } from "../../../hooks/useGetCategories";
import { Category } from "../../../types/Category.type";

const NewPostPage = () => {
  const { categories, isCategoriesLoading } = useGetCategories();

  const categoriesTransformer = (categories: Category[]) => {
    return categories?.map((category: Category) => {
      return {
        value: category.id,
        label: category.name,
      };
    });
  };

  return (
    <div className="px-4 py-6 bg-zinc-900">
      <h3 className="text-white tracking-wider mb-12 font-bold">
        Create New Post
      </h3>
      <NewPostForm
        onSubmit={(values: any) => addNewPost({ category: 1, ...values })}
        categories={categoriesTransformer(categories)}
      />
    </div>
  );
};

export default NewPostPage;
