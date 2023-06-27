import React, { useState } from 'react';
import styles from './SwitchLight.module.scss';

const SwitchLight: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ul className={`${styles.switchLight} ${isDarkMode ? styles.dark : styles.light}`}>
      <span className="material-icons-outlined" onClick={toggleColorScheme}>
        {isDarkMode ? 'dark_mode' : 'light_mode'}
      </span>
    </ul>
  );
};

export default SwitchLight;