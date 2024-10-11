import { useParams } from "react-router-dom";
import styles from "./ComplexEquipment.module.scss";
import { useComplexEquipment } from "./useComplexEquipment";
import RichTextContent from "../../ui/RichTextContent/RichTextContent";
import ProductSlider from "../../ui/Slider/ProductSlider/ProductSlider";
import Meta from "../../utils/Meta";

const ComplexEquipmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const { complexEquipment } = useComplexEquipment(id);

  if (!complexEquipment) {
    return <div>Loading...</div>;
  }

  return (
    <Meta title={complexEquipment.title}>
      <div className={styles.complexEquipmentPage}>
        <h1 className={styles.complexEquipmentTitle}>
          {complexEquipment.title}
        </h1>
        <div className={styles.complexEquipmentContent}>
          <div className={styles.complexEquipmentImageWrapper}>
            {complexEquipment.images.length === 0 ? (
              <p>Отсутствуют изображения</p>
            ) : complexEquipment.images.length > 1 ? (
              <ProductSlider
                slidesToShow={1}
                slides={complexEquipment.images}
              />
            ) : (
              <img
                src={complexEquipment.images[0].image}
                alt={complexEquipment.title}
                className={styles.complexEquipmentImage}
              />
            )}
          </div>
          <RichTextContent htmlContent={complexEquipment.description} />
          <div className={styles.complexEquipmentDetails}>
            {complexEquipment.price > 0 ? (
              <p className={styles.complexEquipmentPrice}>
                Цена: {Math.round(complexEquipment.price)} руб.
              </p>
            ) : (
              <p className={styles.complexEquipmentPrice}>Уточните цену</p>
            )}
            <button className={styles.callToAction}>Связаться с нами</button>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default ComplexEquipmentPage;
