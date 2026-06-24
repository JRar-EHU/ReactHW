import styles from "./NavLink.module.css";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavLink = ({
  href = "#",
  label = "",
  className = "",
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void | Promise<void>;
}) => {
  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) => `
  ${styles.link} ${isActive ? styles.isActive : ""} ${className}
  `}
    >
      {label}
    </RouterNavLink>
  );
};
