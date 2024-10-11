import React, { useState, useRef, useEffect } from "react";
import styles from "./ProductSlider.module.scss";
import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/Dots";
import { IImage } from "../../../types/types";
import ProductSlide from "./ProductSlide/ProductSlide";

type ProductSliderProps = {
  slides: IImage[];
  slidesToShow: number
};

const ProductSlider: React.FC<ProductSliderProps> = ({ slides, slidesToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [translate, setTranslate] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);


  const totalSlides = slides.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - slidesToShow ? 0 : prevIndex + slidesToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - slidesToShow
    );
  };

  const handleDotClick = (pageIndex: number) => {
    setCurrentIndex(pageIndex * slidesToShow);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    setTranslate(currentPosition - startPosition);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translate > 50) {
      handlePrev();
    } else if (translate < -50) {
      handleNext();
    }
    setTranslate(0);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
    }
  }, [currentIndex, slidesToShow]);

  return (
    <div className={styles.sliderWrapper}>
      <Arrow direction="left" handleClick={handlePrev} />
      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(${translate}px)` }}
        >
          {slides.map((slide, index) => (
            <ProductSlide key={index} image={slide} />
          ))}
        </div>
      </div>
      <Arrow direction="right" handleClick={handleNext} />
      <Dots
        slides={slides}
        currentIndex={currentIndex}
        handleDotClick={handleDotClick}
        slidesToShow={slidesToShow}
      />
    </div>
  );
};

export default ProductSlider;
