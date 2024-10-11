import { useParams } from "react-router-dom";
import styles from "./News.module.scss";
import { useNews } from "./useNews";
import Meta from "../../utils/Meta";

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, news, error } = useNews(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading news</div>;

  return (
    <Meta title={news.title}>
      <div className={styles.newsPage}>
        <div className={styles.newsContent}>
          <h1>{news.title}</h1>
          <p className={styles.publishDate}>
            {new Date(news.publish_date).toLocaleDateString()}
          </p>
          <div
            className={styles.textContent}
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
        <div className={styles.newsImageContainer}>
          <img src={news.image} alt={news.title} className={styles.newsImage} />
        </div>
      </div>
    </Meta>
  );
};

export default NewsPage;
