import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchPosts } from "../../api/posts/posts.api";
import PostNavigation from "../../components/PostNavigation";
import PostSearchResult from "../../components/PostSearchResult";
import { routes } from "../../config/routes.config";

const searchQueryKey = "searchQueryKey";

const Search = () => {
  const [query, setQuery] = useState("");

  const { data: posts, refetch: handleSearchPosts } = useQuery(
    [searchQueryKey, query],
    () => searchPosts(query),
    {
      enabled: false,
    }
  );

  return (
    <>
      <PostNavigation />
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => handleSearchPosts()}>Search</button>
      {posts ? (
        <ul className="grid gap-6 px-4">
          {posts?.map((post) => (
            <Link href={routes.post.details(post.id)} key={post.id}>
              <a>
                <li key={post.id}>
                  <PostSearchResult post={post} />
                </li>
              </a>
            </Link>
          ))}
        </ul>
      ) : (
        <h1 className="text-gray-600">
          No results found for provided search term
        </h1>
      )}
    </>
  );
};

export default Search;
