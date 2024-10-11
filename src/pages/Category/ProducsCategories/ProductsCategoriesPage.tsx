import styles from "./ProductsCategoriesPage.module.scss";
import { useProductCategories } from "../useCategories";
import ProductCategoryCard from "../../../components/CategoryCard/ProductCategoryCard/ProductCategoryCard";
import Meta from "../../../utils/Meta";

const ProductsCategories = () => {
  const { productCategories } = useProductCategories();

  return (
    <Meta title="Категории товаров">
      <div className={styles.categoriesPage}>
        <h1>Категории товаров</h1>
        <div className={styles.categoryCards}>
          {productCategories &&
            productCategories.map((category) => (
              <ProductCategoryCard key={category.id} category={category} />
            ))}
        </div>
      </div>
    </Meta>
  );
};

export default ProductsCategories;
