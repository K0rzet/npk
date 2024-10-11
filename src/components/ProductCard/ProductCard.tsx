import React from "react";
import styles from "./ProductCard.module.scss";
import { IProduct } from "../../types/types";
import { HashLink as Link } from "react-router-hash-link";

export interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link to={`/products/${product.id}`} className={styles.productLink}>
        <div className={styles.productImageContainer}>
          <img
            draggable={false}
            src={product.images[0].image}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productContent}>
          <h3 className={styles.productTitle}>{product.title}</h3>
          {/* <p className={styles.productDescription}>{product.description}</p> */}
          {product.price ? (
            <p className={styles.productPrice}>{product.price}руб.</p>
          ) : (
            <p className={styles.productPrice}>Узнайте цену</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
