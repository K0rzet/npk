import React from "react";
import styles from "./Header.module.scss";
import { HashLink as Link } from "react-router-hash-link";

const Header: React.FC = () => {
  return (
    <header className={styles.header} id='header'>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Ваш партнер в оснащении социальных объектов
        </h1>
        <h2 className={styles.headerSubtitle}>
          20 лет опыта. Качество и надежность.
        </h2>
        <Link to="/#contact" className={styles.headerButton}>
          Связаться с нами
        </Link>
      </div>
      <video
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
        draggable={false}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Header;
