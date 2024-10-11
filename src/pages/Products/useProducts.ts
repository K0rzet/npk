import { useQuery } from 'react-query';
import { ApiService } from '../../services/api.service';

export const useProducts = (categoryId: number | string | undefined) => {
  const { isLoading: isLoadingCategory, data: category } = useQuery(
    ['categoryById', categoryId],
    () => ApiService.getCategoryById(categoryId),
    {
      select: (data) => data,
    }
  );

  const { isLoading: isLoadingProjects, data: products, refetch } = useQuery(
    ['productsByCategory', categoryId],
    () => ApiService.getProducts(categoryId),
    {
      select: (data) => data,
    }
  );

  const isLoading = isLoadingCategory && isLoadingProjects;

  return {
    isLoading,
    category,
    products,
    refetch,
  };
};
