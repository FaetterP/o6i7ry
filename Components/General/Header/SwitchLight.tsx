import React, { useContext, useEffect } from "react";
import { ThemeContext } from "hocs/ThemeProvider";
import styles from "./SwitchLight.module.scss";

const SwitchLight: React.FC = () => {
  const { isLightMode, toggleLightMode } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return (
    <ul className={styles.switchLight}>
      <span className="material-symbols-outlined" onClick={toggleLightMode}>
        {isLightMode ? "dark_mode" : "light_mode"}
      </span>
    </ul>
  );
};

export default SwitchLight;
