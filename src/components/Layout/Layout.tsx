import React, { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import Navigation from "./Header/Navigation/Navigation";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
