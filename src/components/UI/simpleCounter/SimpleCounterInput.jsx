import styles from "./SimpleCounterInput.module.css";
import React from "react";

export const SimpleCounterInput = ({
  type = "number",
  value,
  min = 1,
  onChange,
  className = "",
  ...rest
}) => {
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < 1) {
      onChange(min);
    } else {
      onChange(value);
    }
  };
  return (
    <input
      type={type}
      value={value}
      min={min}
      onChange={handleChange}
      className={`${styles.input} ${className}`}
      {...rest}
    />
  );
};
