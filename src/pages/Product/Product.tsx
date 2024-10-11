import { useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import { useProduct } from "./useProduct";
import ProductSlider from "../../ui/Slider/ProductSlider/ProductSlider";
import RichTextContent from "../../ui/RichTextContent/RichTextContent";
import Meta from "../../utils/Meta";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Meta title={product.title}>
      <div className={styles.productPage}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <div className={styles.productContent}>
          <div className={styles.productImageWrapper}>
            {product.images.length === 0 ? (
              <p>Отсутствуют изображения</p>
            ) : product.images.length > 1 ? (
              <ProductSlider slidesToShow={1} slides={product.images} />
            ) : (
              <img
                src={product.images[0].image}
                alt={product.title}
                className={styles.productImage}
              />
            )}
          </div>
          <RichTextContent htmlContent={product.description} />
          <div className={styles.productDetails}>
            {product.price > 0 ? (
              <p className={styles.productPrice}>
                Цена: {Math.round(product.price)} руб.
              </p>
            ) : (
              <p className={styles.productPrice}>Уточните цену</p>
            )}
            <button className={styles.callToAction}>Связаться с нами</button>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default ProductPage;
