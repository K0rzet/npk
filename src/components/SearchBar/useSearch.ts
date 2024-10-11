import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";


const fetchSearchResults = async (query: string) => {
  const [comprehensiveEquipment, products] = await Promise.all([
    ApiService.searchComprehensiveEquipment(query),
    ApiService.searchProducts(query),
  ]);

  return { comprehensiveEquipment, products };
};

export const useSearch = (query: string) => {
  const { data, isLoading, refetch } = useQuery(
    ["searchResults", query],
    () => fetchSearchResults(query),
    {
      enabled: !!query,
      keepPreviousData: true,
      staleTime: 3000,
    }
  );

  return {
    results: data || { comprehensiveEquipment: [], products: [] },
    loading: isLoading,
    refetch,
  };
};
