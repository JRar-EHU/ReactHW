import styles from "./Button.module.css";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isIcon = false,
  className = "",
  ...rest
}) => {
  const classes =
    `${styles.button} ${styles[variant]} ${styles[size]} ${isIcon ? styles.icon : ""} ${className}`.trim();
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
