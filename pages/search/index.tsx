import Link from "next/link";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { searchPosts } from "../../api/posts/posts.api";
import PostNavigation from "../../components/PostNavigation";
import PostSearchResult from "../../components/PostSearchResult";
import SearchPostsForm, {
  SearchPostsFormValues,
} from "../../components/SearchPostsForm";
import Spinner from "../../components/Spinner";
import { routes } from "../../config/routes.config";

const searchQueryKey = "searchQueryKey";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: posts,
    mutateAsync: handleSearchPosts,
    isLoading,
  } = useMutation(searchQueryKey, (data: SearchPostsFormValues) =>
    searchPosts(data)
  );

  return (
    <>
      <PostNavigation />
      <div className="py-6 px-4">
        <SearchPostsForm
          onSubmit={(values) => {
            handleSearchPosts(values);
            setSearchQuery(values.query);
          }}
        />
        {!isLoading ? (
          <div>
            {searchQuery ? (
              <h2 className="text-white mt-8">
                {posts?.length} Results found for{" "}
                <span className="text-gray-400">{searchQuery}</span>
              </h2>
            ) : null}
            {posts ? (
              <ul className="grid gap-6 mt-8">
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
            ) : null}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Search;
