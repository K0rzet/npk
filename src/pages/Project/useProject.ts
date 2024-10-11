import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

export const useProject = (projectId: string | undefined) => {
    const { isLoading, data: project } = useQuery(
      ['projectById', projectId],
      () => ApiService.getProjectById(projectId),
      {
        select: (data) => data,
      }
    );
    return {
        isLoading,
        project,
      };
}