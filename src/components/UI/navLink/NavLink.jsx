import styles from "./NavLink.module.css";

export const NavLink = ({
  href = "#",
  label,
  isActive = false,
  className = "",
}) => {
  const linkClasses = `
  ${styles.link} ${isActive ? styles.isActive : ""} ${className}
  `;
  return (
    <a href={href} className={linkClasses}>
      {label}
    </a>
  );
};
