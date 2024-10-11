import { HashLink as Link } from 'react-router-hash-link'
import styles from "./EquipmentCategoryCard.module.scss";

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IEquipmentCategoryCardProps {
  category: ICategory;
}

const EquipmentCategoryCard: React.FC<IEquipmentCategoryCardProps> = ({ category }) => {
  return (
    <div className={styles.categoryCard}>
      <Link to={`/complex-equipment-categories/${category.id}`} className={styles.categoryLink}>
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

export default EquipmentCategoryCard;
