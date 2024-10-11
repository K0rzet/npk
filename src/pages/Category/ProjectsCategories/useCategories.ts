import { useQuery } from "react-query";
import { ApiService } from "../../../services/api.service";

export const useProductCategories = () => {
  const {
    isLoading,
    data: productCategories,
    refetch,
  } = useQuery("productCategories", () => ApiService.getCategoryProducts(), {
    select: (data) => data,
  });

  return {
    isLoading,
    productCategories,
    refetch,
  };
};
export const useProjectCategories = () => {
  const {
    isLoading,
    data: projectCategories,
    refetch,
  } = useQuery("projectCategories", () => ApiService.getCategoryProjects(), {
    select: (data) => data,
  });

  return {
    isLoading,
    projectCategories,
    refetch,
  };
};
