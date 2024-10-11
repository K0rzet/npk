import styles from "./ComplexEquipment.module.scss";
import { useEquipmentCategories } from "../useCategories";
import EquipmentCategoryCard from "../../../components/CategoryCard/EquipmentCategoryCard/EquipmentCategoryCard";
import Meta from "../../../utils/Meta";

const ComplexEquipmentCategory = () => {
  const { equipmentCategories } = useEquipmentCategories();

  return (
    <Meta title="Комплексное оснащение">
      <div className={styles.categoriesPage}>
        <h1>Комплексное оснащение</h1>
        <div className={styles.complexEquipmentCards}>
          {equipmentCategories &&
            equipmentCategories.map((category) => (
              <EquipmentCategoryCard key={category.id} category={category} />
            ))}
        </div>
      </div>
    </Meta>
  );
};

export default ComplexEquipmentCategory;
