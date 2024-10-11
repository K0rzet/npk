import ProductScroller from "../../ui/ProductScroller/ProductScroller";
import styles from "./NewArrivalsSection.module.scss";
import { useNewArrivals } from "./useNewArrivals";

const NewArrivalsSection: React.FC = () => {
  const { newArrivals, isLoading } = useNewArrivals();

  return (
    <section className={styles.newArrivalsSection}>
      <h2>Новинки</h2>
      {isLoading ? (
        <p>Загрузка</p>
      ) : newArrivals ? (
        <ProductScroller products={newArrivals}/>
      ) : (
        <p>Ошибка загрузки данных</p>
      )}
    </section>
  );
};

export default NewArrivalsSection;
