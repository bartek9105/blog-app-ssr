import { useQuery } from "react-query";
import { getCategories } from "../api/categories/categories.api";

const categoriesQueryKey = "categoriesQueryKey";

export const useGetCategories = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    categoriesQueryKey,
    getCategories
  );

  return {
    categories,
    isCategoriesLoading,
  };
};
