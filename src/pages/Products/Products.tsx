import { useParams } from "react-router-dom";
import { useProducts } from "./useProducts";
import styles from "./Products.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import Meta from "../../utils/Meta";

const Products = () => {
  const { id } = useParams();
  const { isLoading, category, products } = useProducts(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Meta title={category?.name}>
      <div className={styles.categoriesPage}>
        <h1>{category?.name}</h1>
        <div className={styles.productCards}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </Meta>
  );
};

export default Products;
