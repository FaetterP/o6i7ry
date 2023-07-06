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
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const lightModeQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleLightModeChange = (e: MediaQueryListEvent) => {
      setIsLightMode(e.matches);
    };

    lightModeQuery.addEventListener("change", handleLightModeChange);
    setIsLightMode(lightModeQuery.matches);

    return () => {
      lightModeQuery.removeEventListener("change", handleLightModeChange);
    };
  }, []);

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
