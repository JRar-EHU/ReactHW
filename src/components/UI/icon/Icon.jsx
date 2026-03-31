import styles from "./Icon.module.css";

export const Icon = ({ src, alt = "icon", size = "md", className = "" }) => {
  const iconClass = `${styles.icon} ${styles[size]} ${className}`;
  return <img src={src} alt={alt} className={iconClass} />;
};
