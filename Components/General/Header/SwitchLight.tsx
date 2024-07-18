import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./SwitchLight.module.scss";
import {
  ASPIDBLUE_THEME_NAME,
  DARK_THEME_NAME,
  LIGHT_THEME_NAME,
} from "utils/constants";

export default function SwitchLight() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === DARK_THEME_NAME) {
      setTheme(LIGHT_THEME_NAME);
    } else {
      setTheme(DARK_THEME_NAME);
    }
    setClickCount((prevCount) => prevCount + 1);
    if ((clickCount + 1) % 25 === 0 && theme !== ASPIDBLUE_THEME_NAME) {
      setTheme(ASPIDBLUE_THEME_NAME);
    }
  };

  return (
    <button className={styles.switchLight} onClick={toggleTheme}>
      <span className="material-symbols-outlined">
        {theme === DARK_THEME_NAME ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
