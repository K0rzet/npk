import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

export const useCategoryProducts = (categoryId: string | number | undefined) => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(
    ["categoryProducts", categoryId],
    () => ApiService.getProducts(categoryId),
    { enabled: !!categoryId }
  );

  return { products, isLoading, refetch };
};
