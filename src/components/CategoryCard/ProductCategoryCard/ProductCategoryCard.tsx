import { HashLink as Link } from 'react-router-hash-link'
import styles from "./ProductCategoryCard.module.scss";

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProductCategoryCardProps {
  category: ICategory;
}

const ProductCategoryCard: React.FC<IProductCategoryCardProps> = ({ category }) => {
  return (
    <div className={styles.categoryCard}>
      <Link to={`/products-categories/${category.id}`} className={styles.categoryLink}>
        <div className={styles.categoryImageContainer}>

          <img
            src={category.image}
            alt={category.name}
            className={styles.categoryImage}
          />
        </div>
        <div className={styles.categoryContent}>

          <h3 className={styles.categoryTitle}>{category.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategoryCard;
