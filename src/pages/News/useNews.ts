import { useQuery } from 'react-query';
import { ApiService } from '../../services/api.service';

export const useNewsList = () => {
    const { isLoading, data: news, refetch } = useQuery(
        'news',
        ApiService.getNews,
        {
            select: (data) => data,
        }
    );

    return {
        isLoading,
        news,
        refetch,
    };
};

export const useNews = (newsId: number | string | undefined) => {
  const { isLoading, data: news, error } = useQuery(
    ['newsById', newsId],
    () => ApiService.getNewsById(newsId),
    {
      select: (data) => data,
    }
  );

  return { isLoading, news, error };
};
