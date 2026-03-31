import styles from "./Header.module.css";
import { Logo } from "@components/UI/logo/Logo.jsx";
import { NavLink } from "@components/UI/navLink/NavLink.jsx";
import { Cart } from "@components/features/cart/Cart.jsx";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Logo />
        </div>
        <div className={styles.secondContainer}>
          <nav className={styles.nav}>
            <NavLink label="Home" />
            <NavLink label="Menu" />
            <NavLink label="Company" />
            <NavLink label="Login" />
          </nav>

          <div className={styles.cart}>
            <Cart count={2} />
          </div>
        </div>
      </div>
    </header>
  );
};
