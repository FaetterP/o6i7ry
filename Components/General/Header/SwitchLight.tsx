import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./SwitchLight.module.scss";

export default function SwitchLight() {
  const {theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "dark-mode") {
      setTheme("light-mode");
    } else {
      setTheme("dark-mode");
    }
  };

  return (
    <ul className={styles.switchLight}>
      <span className="material-symbols-outlined" onClick={toggleTheme}>
        {theme === "dark-mode" ? "dark_mode" : "light_mode"}
      </span>
    </ul>
  );
};
