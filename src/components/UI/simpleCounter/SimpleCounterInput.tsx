import styles from "./SimpleCounterInput.module.css";
import React, { ChangeEvent } from "react";
import { SimpleCounterInputProps } from "@types";

export const SimpleCounterInput = ({
  value,
  min = 1,
  onValueChange,
  className = "",
  ...rest
}: SimpleCounterInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < min) {
      onValueChange(min);
    } else {
      onValueChange(value);
    }
  };

  return (
    <input
      type="number"
      value={value}
      min={min}
      onChange={handleChange}
      className={`${styles.input} ${className}`}
      {...rest}
    />
  );
};
