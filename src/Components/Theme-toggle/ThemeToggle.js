import styles from "./ThemeToggle.module.css";
import Data from "../../Context/Context";

import { useContext, useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(Data);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleHandler = () => {
    setTheme(!theme);
  };

  return (
    <div className={styles.containerToggle} onClick={toggleHandler}>
      <div
        className={theme ? styles.toggle : `${styles.toggle} ${styles.active}`}
      ></div>
    </div>
  );
};
