import styles from "./Badge.module.css";

export const Badge = ({ count, className = "" }) => {
  if (!count) return null;
  return <div className={`${styles.badge} ${className}`}>{count}</div>;
};
