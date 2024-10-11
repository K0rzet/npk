import React from "react";
import styles from "./ComplexEquipmentCard.module.scss";
import { IComplexEquipment } from "../../types/types";
import { HashLink as Link } from 'react-router-hash-link'

export interface IComplexEquipmentCardProps {
  complexEquipment: IComplexEquipment;
}

const ComplexEquipmentCard: React.FC<IComplexEquipmentCardProps> = ({
  complexEquipment,
}) => {
  return (
    <div className={styles.complexEquipmentCard}>
      <Link to={`/complex-equipments/${complexEquipment.id}`} className={styles.complexEquipmentLink}>
        <div className={styles.complexEquipmentImageContainer}>

          <img
            src={complexEquipment.images[0].image}
            alt={complexEquipment.title}
            className={styles.complexEquipmentImage}
          />
        </div>
        <div className={styles.complexEquipmentContent}>

          <h3 className={styles.complexEquipmentTitle}>{complexEquipment.title}</h3>
          {/* <p className={styles.complexEquipmentDescription}>{complexEquipment.description}</p> */}
          {complexEquipment.price && (
            <p className={styles.complexEquipmentPrice}>{complexEquipment.price}руб.</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ComplexEquipmentCard;
