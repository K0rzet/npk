import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

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
    data: projects,
    refetch,
  } = useQuery("projects-list", () => ApiService.getProjects(), {
    select: (data) => data,
  });

  return {
    isLoading,
    projects,
    refetch,
  };
};
export const useEquipmentCategories = () => {
  const {
    isLoading,
    data: equipmentCategories,
    refetch,
  } = useQuery("category-equipment", () => ApiService.getCategoryEquipment(), {
    select: (data) => data,
  });

  return {
    isLoading,
    equipmentCategories,
    refetch,
  };
};
