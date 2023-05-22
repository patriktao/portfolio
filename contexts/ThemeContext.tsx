import React, { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  getTheme: () => "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState<"light" | "dark">("light");

  const setTheme = (s: "light" | "dark") => {
    setIsLightTheme(s);
  };

  const getTheme = () => {
    return isLightTheme;
  };

  // Provide the theme state and toggle function to the children
  return (
    <ThemeContext.Provider value={{ getTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<ThemeContextProps>({
  getTheme: () => "light",
  setTheme: () => {},
});
