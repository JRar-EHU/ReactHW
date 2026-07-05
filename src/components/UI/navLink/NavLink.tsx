import styles from "./NavLink.module.css";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavLink = ({ href = "#", label = "", className = "" }) => {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) => `
  ${styles.link} ${isActive ? styles.isActive : ""} ${className}
  `}
    >
      {label}
    </RouterNavLink>
  );
};
