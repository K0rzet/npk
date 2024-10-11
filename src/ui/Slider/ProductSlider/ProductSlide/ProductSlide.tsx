import React from "react";
import styles from "./ProductSlide.module.scss";
import { IImage } from "../../../../types/types";

type SlideProps = {
  image: IImage;
};

const Slide: React.FC<SlideProps> = ({ image }) => {
  return (
    <div className={styles.slide}>
        <img src={image.image} alt={'Изображение товара'} className={styles.productImage} draggable={false}/>
    </div>
  );
};

export default Slide;
