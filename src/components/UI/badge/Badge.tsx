import styles from "./Badge.module.css";

export const Badge = ({
  count,
  className = "",
}: {
  count: number;
  className: string;
}) => {
  if (!count) return null;
  return <div className={`${styles.badge} ${className}`}>{count}</div>;
};
