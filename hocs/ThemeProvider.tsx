import React, { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  isLightMode: boolean;
  toggleLightMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isLightMode: true,
  toggleLightMode: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleLightMode = () => {
    const updatedMode = !isLightMode;
    setIsLightMode(updatedMode);
    localStorage.setItem("isLightMode", JSON.stringify(updatedMode));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("isLightMode");
    if (savedMode) {
      setIsLightMode(JSON.parse(savedMode));
    } else {
      const lightModeQuery = window.matchMedia("(prefers-color-scheme: light)");
      setIsLightMode(lightModeQuery.matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
  }, [isLightMode]);

  const contextValue: ThemeContextType = {
    isLightMode,
    toggleLightMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
