import styles from "./MainLayout.module.css";
import { Header } from "@components/layout/header/Header";
import { Footer } from "@components/layout/footer/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
