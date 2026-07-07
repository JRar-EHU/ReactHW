import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { LANG_OPTIONS } from "../../../constants";
import styles from "./LangDropdown.module.css";

export const LangDropdown = ({ className = "" }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang).catch(console.error);
  };

  return (
    <select
      className={`${styles.langDropdown} ${className}`}
      onChange={changeLanguage}
    >
      {LANG_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
