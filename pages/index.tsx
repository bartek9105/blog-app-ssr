import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";
import { getPosts } from "../api/posts/posts.api";
import CategoriesList from "../components/CategoriesList";
import PostA from "../components/Post";

const Home: NextPage = () => {
  const { data: categories } = useQuery("someKey", getCategories);
  const { data: posts } = useQuery("anotherKey", getPosts);

  console.log(posts);

  return (
    <>
      <CategoriesList categories={categories} />
      <ul>
        {posts?.map(({ id, title, img_url, categories }) => (
          <li key={id} className="mb-2">
            <PostA title={title} img_url={img_url} categories={categories} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
