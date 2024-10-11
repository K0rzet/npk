import { useRef, useState } from "react";
import styles from "./CatalogButton.module.scss";
import CatalogSidebar from "../CatalogSidebar/CatalogSidebar";

const CatalogButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const catalogButtonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.catalogPage}>
      <button
        ref={catalogButtonRef}
        className={styles.catalogButton}
        onClick={toggleSidebar}
      >
        Каталог
      </button>
      <CatalogSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onClose={closeSidebar}
        catalogButtonRef={catalogButtonRef}
      />
    </div>
  );
};

export default CatalogButton;
