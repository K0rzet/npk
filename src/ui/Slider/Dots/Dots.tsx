import React from "react";
import styles from "./Dots.module.scss";
import { IImage, IProduct } from "../../../types/types";

type DotsProps = {
  slides: IProduct[] | IImage[];
  currentIndex: number;
  slidesToShow: number
  handleDotClick: (index: number) => void;
};

const Dots: React.FC<DotsProps> = ({
  slides,
  currentIndex,
  handleDotClick,
  slidesToShow
}) => {
  const totalPages = Math.ceil(slides.length / slidesToShow);
  const currentPage = Math.floor(currentIndex / slidesToShow);

  return (
    <div className={styles.dots}>
      {Array.from({ length: totalPages }).map((_, idx) => (
        <div
          key={idx}
          className={`${styles.dot} ${currentPage === idx ? styles.active : ""}`}
          onClick={() => handleDotClick(idx)}
        />
      ))}
    </div>
  );
};

export default Dots;
