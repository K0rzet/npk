import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

export const useNewArrivals = () => {
  const {
    isLoading,
    data: newArrivals,
    refetch,
  } = useQuery("newArrivals", () => ApiService.getNewProducts(), {
    select: (data) => data,
  });

  return {
    isLoading,
    newArrivals,
    refetch,
  };
};
