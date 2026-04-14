import styles from "./MainLayout.module.css";
import { Header } from "@components/layout/header/Header.jsx";
import { Footer } from "@components/layout/footer/Footer.jsx";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
