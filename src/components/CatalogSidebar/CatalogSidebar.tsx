import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./CatalogSidebar.module.scss";
import { useProductCategories } from "../../pages/Category/useCategories";
import { useCategoryProducts } from "./useCatalogSidebar";
import {
  getProductsCategoriesUrl,
  getProductsUrl,
} from "../../configs/urls.config";
import { HashLink as Link } from 'react-router-hash-link'

interface CatalogSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  onClose: () => void;
  catalogButtonRef: RefObject<HTMLButtonElement>;
}

const CatalogSidebar: React.FC<CatalogSidebarProps> = ({
  isOpen,
  toggleSidebar,
  onClose,
  catalogButtonRef,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { productCategories } = useProductCategories();
  const [hoveredCategory, setHoveredCategory] = useState<number | undefined>(undefined);
  const { products, isLoading: isProductsLoading } =
    useCategoryProducts(hoveredCategory);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      catalogButtonRef.current &&
      !catalogButtonRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  const handleMouseEnterCategory = (categoryId: number) => {
    setHoveredCategory(categoryId);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory(undefined);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.sidebarContent}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          &times;
        </button>
        <div className={styles.categories}>
          {productCategories &&
            productCategories.map((category) => (
              <Link
                key={category.id}
                className={styles.category}
                onMouseEnter={() => handleMouseEnterCategory(category.id)}
                to={getProductsCategoriesUrl(category.id)}
              >
                {category.name}
              </Link>
            ))}
        </div>
        <div
          className={`${styles.products} ${hoveredCategory ? styles.show : ""}`}
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={handleMouseLeaveCategory}
        >
          {isProductsLoading ? (
            <p>Loading products...</p>
          ) : (
            hoveredCategory && (
              <>
                <h3>Продукция</h3>
                {products?.map((product, index) => (
                  <Link
                    key={index}
                    className={styles.product}
                    to={getProductsUrl(product.id)}
                  >
                    {product.title}
                  </Link>
                ))}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogSidebar;
