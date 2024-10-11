import React from "react";
import styles from "./NavigationItem.module.scss";
import { HashLink as Link } from 'react-router-hash-link'

interface NavigationItemProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  href,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={`${styles.navigationItem} ${text === "Продукция" ? styles.mobileLink : ""}`}
    >
      <Link to={href}>{text}</Link>
    </li>
  );
};

export default NavigationItem;
