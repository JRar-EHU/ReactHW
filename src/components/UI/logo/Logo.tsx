import styles from "./Logo.module.css";
import logo from "@assets/icons/main-logo.svg";

export const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="main-logo" />
    </a>
  );
};
