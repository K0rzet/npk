import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

export const useProjects = (pageLimit?: string) => {
  const {
    isLoading,
    data: projects,
    refetch,
  } = useQuery("projects", () => ApiService.getProjects(pageLimit), {
    select: (data) => data,
  });

  return {
    isLoading,
    projects,
    refetch,
  };
};