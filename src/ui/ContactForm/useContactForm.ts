import { useQuery } from "react-query";
import { ApiService } from "../../services/api.service";
import { IContactForm } from "../../types/types";

export const useContactForm = (data: IContactForm) => {
    const { isLoading, data: news, error } = useQuery(
      ['postContact', data],
      () => ApiService.postContact(data),
      {
        select: (data) => data,
      }
    );
  
    return { isLoading, news, error };
  };
  