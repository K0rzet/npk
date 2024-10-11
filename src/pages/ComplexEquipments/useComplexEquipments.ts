import { useQuery } from 'react-query';
import { ApiService } from '../../services/api.service';

export const useComplexEquipments = (categoryId: number | string | undefined) => {
  const { isLoading: isLoadingCategory, data: category } = useQuery(
    ['equipmentCategoryById', categoryId],
    () => ApiService.getEquipmentCategoryById(categoryId),
    {
      select: (data) => data,
    }
  );

  const { isLoading: isLoadingProjects, data: complexEquipments, refetch } = useQuery(
    ['complexEquipmentsByCategory', categoryId],
    () => ApiService.getEquipmentsByCategory(categoryId),
    {
      select: (data) => data,
    }
  );

  const isLoading = isLoadingCategory && isLoadingProjects;

  return {
    isLoading,
    category,
    complexEquipments,
    refetch,
  };
};
