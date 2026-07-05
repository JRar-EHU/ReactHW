import styles from "./Icon.module.css";
import { IconProps } from "@types";

export const Icon = ({
  src,
  alt = "icon",
  size = "md",
  className = "",
}: IconProps) => {
  const classes = `${styles.icon} ${styles[size]} ${className}`;
  return <img src={src} alt={alt} className={classes} />;
};
