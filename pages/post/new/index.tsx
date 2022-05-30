import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { addNewPost } from "../../../api/posts/posts.api";
import Layout from "../../../components/Layout";
import NewPostForm from "../../../components/NewPostForm";
import { routes } from "../../../config/routes.config";
import { useGetCategories } from "../../../hooks/useGetCategories";

const NewPostPage = () => {
  const router = useRouter();
  const { categories, isCategoriesLoading } = useGetCategories();
  const { mutateAsync: addNewPostMutation } = useMutation(
    "addNewPostQuery",
    (data: any) => addNewPost(data),
    {
      onSuccess: () => {
        toast.success("Post added successfuly") as any;
        router.push(routes.root());
      },
    }
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
    <>
      <Head>
        <title>New post</title>
        <meta
          name="description"
          content="Create new posts for the whole world to see it"
        />
      </Head>
      <Layout className="lg:max-w-5xl mx-auto">
        <h3 className="tracking-wider mb-8 font-bold">Create New Post</h3>
        {categories && (
          <NewPostForm
            onSubmit={(values) => handleAddNewPost(values)}
            categories={categories}
          />
        )}
      </Layout>
    </>
  );
};

export default NewPostPage;
