import React from "react";
import styles from "./Slide.module.scss";
import { IProduct } from "../../../types/types";
import { getProductsUrl } from "../../../configs/urls.config";
import { HashLink as Link } from 'react-router-hash-link'

type SlideProps = {
  content: IProduct;
};

const Slide: React.FC<SlideProps> = ({ content }) => {
  return (
    <div key={content.id} className={styles.slide}>
      <Link to={getProductsUrl(content.id)} className={styles.productLink} draggable={false}>
        <img src={content.images[0].image} alt={content.title} className="productImage" draggable={false}/>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h3>{content.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Slide;
