import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';
import { navigationData } from './navigation.data';
import CatalogButton from '../../../CatalogButton/CatalogButton';
import SearchBar from '../../../SearchBar/SearchBar';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.body.classList.remove('menu-open');
  };

  return (
    <nav className={styles.navLinks}>
      <Link to='/#header' className={styles.logo}><img src="/logo_olymp.png" alt="logo" /></Link>
      <CatalogButton/>
      <SearchBar/>
      <button className={styles.burger} onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <ul className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
        <NavigationItem key={'Продукция'} text={'Продукция'} href={'/products-categories/'} onClick={handleLinkClick} />
        {navigationData.map((item) => (
          <NavigationItem key={item.text} text={item.text} href={item.href} onClick={handleLinkClick} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
