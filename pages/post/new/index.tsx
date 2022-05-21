import { useQuery } from "react-query";
import { getCategories } from "../../../api/categories/categories.api";
import { addNewPost } from "../../../api/posts/posts.api";
import NewPostForm from "../../../components/NewPostForm";
import { Category } from "../../../types/Category.type";

const NewPostPage = () => {
  const { data: categories } = useQuery("asdfasdfas", getCategories);

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
      <h3 className="text-white tracking-wider">Create New Post</h3>
      <NewPostForm
        onSubmit={(values: any) => addNewPost({ category: 1, ...values })}
        categories={categoriesTransformer(categories)}
      />
    </div>
  );
};

export default NewPostPage;
