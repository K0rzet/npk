import React, { useRef } from 'react';
import styles from './ProductScroller.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../types/types';

interface ProductScrollerProps {
  products: IProduct[];
}

const ProductScroller: React.FC<ProductScrollerProps> = ({ products }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft += event.deltaY;
    }
  };


  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
  };
  return (
    <div
      className={styles.scroller}
      onWheel={handleWheel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseLeave}
      ref={scrollerRef}
    >
      {products.map(product => (
        <ProductCard product={product}/>
      ))}
    </div>
  );
}

export default ProductScroller;
