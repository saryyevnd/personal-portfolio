import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeHandler } from "../services";

export const ThemeContext = createContext(null);

const storageName = '"theme-personal-portfolio"';

const ThemeProvider = (props) => {
  const defaultTheme = localStorage.getItem(storageName) || "dark";
  const [theme, setTheme] = useState(defaultTheme);
  const currentTheme = themeHandler(theme);

  const setThemeToggle = () => {
    setTheme((prev) => {
      const _theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem(storageName, _theme);
      return _theme;
    });
  };

  return (
    <ThemeContext.Provider value={{ setThemeToggle, theme: currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
