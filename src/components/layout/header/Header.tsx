import styles from "./Header.module.css";
import { Logo } from "@components/UI/logo/Logo.js";
import { NavLink } from "@components/UI/navLink/NavLink.js";
import { Cart } from "@components/features/cart/Cart";
import { useAppSelector } from "@store/hooks";

export const Header = () => {
  const cartCount = useAppSelector((state) => state.cart.cartCount);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Logo />
        </div>
        <div className={styles.secondContainer}>
          <nav className={styles.nav}>
            <NavLink href="/" label="Home" />
            <NavLink href="/menu" label="Menu" />
            <NavLink href="/company" label="Company" />
            <NavLink href="/login" label="Login" />
            <NavLink href="/orders" label="Orders" />
          </nav>

          <div className={styles.cart}>
            <Cart count={cartCount} />
          </div>
        </div>
      </div>
    </header>
  );
};
