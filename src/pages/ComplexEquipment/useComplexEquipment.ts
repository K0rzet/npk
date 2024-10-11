import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

export const useComplexEquipment = (complexEquipmentId: string | undefined) => {
    const { isLoading, data: complexEquipment } = useQuery(
      ['complexEquipmentById', complexEquipmentId],
      () => ApiService.getComplexEquipmentById(complexEquipmentId),
      {
        select: (data) => data,
      }
    );
    return {
        isLoading,
        complexEquipment,
      };
}