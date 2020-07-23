import React from "react";
import { THEMES } from "./constants";


export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
    rawSetColorMode(initialColorValue);
  }, []);

  function setColorMode (newValue) {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Update each color
    Object.keys(THEMES).forEach(k => {
      root.style.setProperty(
        `--color-${k}`,
        THEMES[k][newValue]
      );
    });
  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
