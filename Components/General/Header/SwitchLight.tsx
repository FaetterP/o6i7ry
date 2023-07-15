import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./SwitchLight.module.scss";

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
    if (theme === "dark-mode") {
      setTheme("light-mode");
    } else {
      setTheme("dark-mode");
    }
    setClickCount((prevCount) => prevCount + 1);
    if ((clickCount + 1) % 10 === 0 && theme !== "aspidBlue-mode") {
      setTheme("aspidBlue-mode");
    }
  };

  return (
    <ul className={styles.switchLight}>
      <span className="material-symbols-outlined" onClick={toggleTheme}>
        {theme === "dark-mode" ? "dark_mode" : "light_mode"}
      </span>
    </ul>
  );
}
