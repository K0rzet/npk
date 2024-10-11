import styles from "./Footer.module.scss";
import NavigationItem from "../Header/Navigation/NavigationItem";
import { navigationData } from "../Header/Navigation/navigation.data";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (window.location.hash === "#/") {
      scrollToTop();
    } else {
      navigate("/");
      setTimeout(scrollToTop, 100);
    }
  };

  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logoContainer} onClick={handleLogoClick}>
        <img src={"/logo_olymp.png"} alt="Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavigationItem
            key={"Продукция"}
            text={"Продукция"}
            href={"/products-categories/"}
          />
          {navigationData.map((item) => (
            <NavigationItem key={item.text} text={item.text} href={item.href} />
          ))}
        </ul>
      </nav>
      <ul className={styles.socialIcons}>
        <li>
          <a
            href="https://www.youtube.com/@user-nk7wj8xy4v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/ytico.svg"} alt="Youtube" />
          </a>
        </li>
        <li>
          <a
            href="https://vk.com/mebelfactoryolimp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/vkico.svg"} alt="VK" />
          </a>
        </li>
      </ul>
      <img src="/iso.png" alt="iso" className={styles.standart} />
    </footer>
  );
};

export default Footer;
