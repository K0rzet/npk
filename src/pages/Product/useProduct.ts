import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";

export const useProduct = (productId: string | undefined) => {
    const { isLoading, data: product } = useQuery(
      ['productById', productId],
      () => ApiService.getProductById(productId),
      {
        select: (data) => data,
      }
    );
    return {
        isLoading,
        product,
      };
}