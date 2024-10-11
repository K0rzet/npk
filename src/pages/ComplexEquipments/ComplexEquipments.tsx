import { useParams } from "react-router-dom";
import { useComplexEquipments } from "./useComplexEquipments";
import styles from "./ComplexEquipments.module.scss";
import ComplexEquipmentCard from "../../components/ComplexEquipmentCard/ComplexEquipmentCard";
import Meta from "../../utils/Meta";

const ComplexEquipments = () => {
  const { id } = useParams();
  const { isLoading, category, complexEquipments } = useComplexEquipments(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Meta title={category?.name}>
      <div className={styles.categoriesPage}>
        <h1>{category?.name}</h1>
        <div className={styles.complexEquipmentCards}>
          {complexEquipments &&
            complexEquipments.map((product) => (
              <ComplexEquipmentCard
                key={product.id}
                complexEquipment={product}
              />
            ))}
        </div>
      </div>
    </Meta>
  );
};

export default ComplexEquipments;
