// src/components/NewsPage.tsx
import { useState } from 'react';

import styles from './News.module.scss';
import { useNewsList } from './useNews';
import RichTextContent from '../../ui/RichTextContent/RichTextContent';
import { Link } from 'react-router-dom';
import Meta from '../../utils/Meta';

interface NewsItem {
    id: number;
    title: string;
    content: string;
    image: string;
    publish_date: string;
}

const NewsListPage = () => {
    const { isLoading, news } = useNewsList();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedContent, setSelectedContent] = useState<string | null>(null);

    if (isLoading) return <div>Loading...</div>;

    const getShortContent = (content: string) => {
        return content.length > 100 ? content.substring(0, 100) + '...' : content;
    };

    return (
        <Meta title="Новости">

        <section className={styles.newsListSection}>
            <h2 className={styles.newsListTitle}>Новости</h2>
            <div className={styles.newsListContainer}>
                {news.map((newsItem: NewsItem) => (
                    <Link 
                        to={`${newsItem.id}`}
                        key={newsItem.id}
                        className={styles.newsListItem}
                        onMouseEnter={() => { setSelectedImage(newsItem.image), setSelectedContent(newsItem.content) }}
                        onMouseLeave={() => { setSelectedImage(null), setSelectedContent(null) }}
                    >
                        <div className={styles.newsListContent}>
                            <h2>{newsItem.title}</h2>
                            {selectedContent === newsItem.content && <RichTextContent htmlContent={getShortContent(newsItem.content)} />}
                        </div>
                        {selectedImage === newsItem.image && (
                            <div className={styles.newsListImageContainer}>
                                <img
                                    src={newsItem.image}
                                    alt={newsItem.title}
                                    className={`${styles.newsListImage} ${selectedImage === newsItem.image ? styles.visible : ''}`}
                                />
                            </div>
                        )}
                        {/* <Link to={`news/${newsItem.id}`} className={styles.newsButton}>Подробнее</Link> */}
                    </Link>
                ))}
            </div>
        </section>
        </Meta>
    );
};

export default NewsListPage;
