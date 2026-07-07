import styles from "./Header.module.css";
import { Logo } from "@components/UI/logo/Logo.js";
import { NavLink } from "@components/UI/navLink/NavLink.js";
import { Cart } from "@components/features/cart/Cart";
import { useAppSelector } from "@store/hooks";
import { ThemeToggle } from "@components/features/themeToggle/ThemeToggle";
import { LangDropdown } from "@components/features/langSelect/LangDropdown";
import { useTranslation } from "react-i18next";
import { useAuth } from "@hooks/useAuth";

export const Header = () => {
  const cartCount = useAppSelector((state) => state.cart.cartCount);
  const user = useAppSelector((state) => state.auth.user);
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Logo />
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.themeToggle}>
            <ThemeToggle />
          </div>
          <div className={styles.langDropdown}>
            <LangDropdown />
          </div>
          <nav className={styles.nav}>
            <NavLink href="/" label={t("navigation.home")} />
            <NavLink href="/menu" label={t("navigation.menu")} />
            <NavLink href="/company" label={t("navigation.company")} />

            {user ? (
              <NavLink
                href="/"
                label={t("navigation.logout")}
                onClick={logout}
              />
            ) : (
              <NavLink href="/login" label={t("navigation.login")} />
            )}

            <NavLink href="/orders" label={t("navigation.orders")} />
          </nav>

          <div className={styles.cart}>
            <Cart count={cartCount} />
          </div>
        </div>
      </div>
    </header>
  );
};
