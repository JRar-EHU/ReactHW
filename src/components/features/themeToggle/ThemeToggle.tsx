import styles from "./ThemeToggle.module.css";
import { useTheme } from "@contexts/ThemeContext";
import { Button } from "@components/UI/button/Button";
import { Icon } from "@components/UI/icon/Icon";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      variant="empty"
      size="sm"
      isIcon={true}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      area-pressed={theme === "dark"}
      className={styles.themeToggle}
    >
      {theme === "dark" ? (
        <Icon size="sm" src="src/assets/icons/moon-icon.svg" />
      ) : (
        <Icon size="sm" src="src/assets/icons/sun-icon.svg" />
      )}
    </Button>
  );
};
