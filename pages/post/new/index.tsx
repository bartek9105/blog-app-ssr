import { useMutation } from "react-query";
import { addNewPost } from "../../../api/posts/posts.api";
import Layout from "../../../components/Layout";
import NewPostForm from "../../../components/NewPostForm";
import { useGetCategories } from "../../../hooks/useGetCategories";

const NewPostPage = () => {
  const { categories, isCategoriesLoading } = useGetCategories();
  const { mutateAsync: addNewPostMutation } = useMutation(
    "addNewPostQuery",
    (data: any) => addNewPost(data)
  );

  const getCategoryId = (categoryName: string) => {
    const category = categories?.find(({ name }) => name === categoryName);
    return category?.id as number;
  };

  const handleAddNewPost = (values: any) => {
    const categoryId = getCategoryId(values.category);
    addNewPostMutation({ ...values, category: categoryId });
  };

  return (
    <Layout>
      <h3 className="tracking-wider mb-8 font-bold">Create New Post</h3>
      {categories && (
        <NewPostForm
          onSubmit={(values) => handleAddNewPost(values)}
          categories={categories}
        />
      )}
    </Layout>
  );
};

export default NewPostPage;
